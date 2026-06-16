# CareConnect

A simple and clean healthcare support web application designed to help patients connect with support services.

## Tech Stack
- **Frontend Framework**: React (via Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Local State (`useState`)

## Key Features

1. **Patient Support Request Form**:
   - Collects personal details (Name, Email, Phone) and support details (Category, Description) with full client-side validation.

2. **Automatic Request Analysis**:
   - Extracts 2 to 4 key highlights (symptoms, concerns, and needs) as structured bullet points upon request submission.

3. **FAQ Chatbot Widget**:
   - A floating interactive chatbot widget in the bottom-right corner.
   - Contains 10 pre-loaded healthcare FAQs that users can query via direct buttons or typing.
   - Utilizes smart keyword-matching local logic with a fallback answer for unrecognized inputs, operating 100% client-side.

## NGO Use Case
Non-governmental organizations (NGOs) and community clinics can use CareConnect to:
- **Collect support requests online**: Centralize intake forms for patients needing help.
- **Understand patient concerns**: Review automatically extracted highlights to triage urgent support check-ins instantly.
- **Provide immediate self-help**: Empower patients to query the FAQ chatbot for answers to standard questions instantly, reducing coordinator intake load.

## Local Development Setup

To run the project locally, run the following commands:

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

## Vercel Deployment Instructions

Follow these instructions to deploy CareConnect to Vercel:

1. **Vercel CLI Method**:
   - Install Vercel CLI globally: `npm install -g vercel`
   - Run `vercel` in the root of the project.
   - Follow the prompts to log in and deploy.

2. **GitHub Integration Method (Recommended)**:
   - Push this project to a GitHub repository.
   - Go to [Vercel](https://vercel.com/) and log in.
   - Click **Add New** > **Project**.
   - Import your CareConnect repository.
   - Keep default settings (Vercel automatically detects Vite + React configuration).
   - Click **Deploy**.
