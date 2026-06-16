/**
 * Smart request analysis engine for CareConnect.
 * Extracts 2-4 brief, specific highlights from the patient's request description.
 * All urgency level and scoring logic has been removed.
 */
export function analyzeSupportRequest(description, category) {
  if (!description || !description.trim()) {
    return {
      highlights: ["No request details provided."]
    };
  }

  const text = description.trim().toLowerCase();
  const highlights = [];

  // 1. Missed appointment checks
  if (text.includes("miss") && (text.includes("appoint") || text.includes("schedule"))) {
    const facility = text.includes("hospital") ? "hospital" : (text.includes("doctor") ? "doctor" : "clinic");
    highlights.push(`Missed ${facility} appointment`);
  }

  // 2. Family emergency checks
  if (text.includes("family emergency")) {
    highlights.push("Family emergency prevented attendance");
  }

  // 3. Rescheduling requests
  if (text.includes("reschedule") || text.includes("book") || text.includes("new")) {
    highlights.push("Needs appointment rescheduled");
  }

  // 4. Missed medication checks
  if (text.includes("miss") && (text.includes("med") || text.includes("pill") || text.includes("medicine"))) {
    let condition = "medication";
    if (text.includes("blood pressure") || text.includes("bp")) {
      condition = "blood pressure medication";
    } else if (text.includes("diabetes") || text.includes("insulin")) {
      condition = "diabetes medication";
    } else if (text.includes("heart")) {
      condition = "heart medication";
    }

    const timeMatch = text.match(/(?:for\s+)?(one|two|three|four|five|six|seven|\d+)\s+days?/i);
    const timeframe = timeMatch ? ` (${timeMatch[1]} days)` : "";
    highlights.push(`Missed ${condition}${timeframe}`);
  }

  // 5. Symptoms check (very brief)
  const symptoms = [];
  if (text.includes("weak")) symptoms.push("weakness");
  if (text.includes("fatigue") || text.includes("tired")) symptoms.push("fatigue");
  if (text.includes("dizzy") || text.includes("dizziness")) symptoms.push("dizziness");
  if (text.includes("pain")) symptoms.push("pain");
  if (text.includes("breath")) symptoms.push("breathing difficulty");
  if (text.includes("anxi")) symptoms.push("anxiety");
  if (text.includes("stress")) symptoms.push("stress");
  if (text.includes("fever")) symptoms.push("fever");

  if (symptoms.length > 0) {
    highlights.push(`Experiencing ${symptoms.join(", ")}`);
  }

  // 6. Support goals (very brief)
  if (text.includes("guidance") || text.includes("guide") || text.includes("advice")) {
    highlights.push("Seeking medical guidance");
  } else if (category === "Appointment Support" && highlights.length < 3) {
    highlights.push("Requires follow-up care");
  }

  // Fallback sentence parser for customized inputs:
  if (highlights.length < 2) {
    const sentences = description.split(/[.,;]|\band\b/);
    for (const sentence of sentences) {
      const clean = sentence.trim();
      if (clean.length > 8 && 
          !clean.toLowerCase().includes("request") && 
          !clean.toLowerCase().includes("assistance")) {
        let formatted = clean
          .replace(/\b(i am|i feel)\b/gi, "Feels")
          .replace(/\bi\b/gi, "Patient")
          .replace(/\bmy\b/gi, "their");
        formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
        if (!highlights.includes(formatted)) {
          highlights.push(formatted);
        }
      }
      if (highlights.length >= 3) break;
    }
  }

  // Ensure between 2 and 4 brief bullet points
  if (highlights.length === 0) {
    highlights.push(`Requested ${category.toLowerCase()} support`);
    highlights.push("Requires follow-up check-in");
  } else if (highlights.length === 1) {
    highlights.push("Awaiting volunteer coordination");
  }

  const finalHighlights = highlights.slice(0, 4).map(h => {
    return h.charAt(0).toUpperCase() + h.slice(1);
  });

  return {
    highlights: finalHighlights
  };
}
