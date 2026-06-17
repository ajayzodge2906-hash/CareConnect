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

## How NGOs Can Use CareConnect
- Receive healthcare support requests digitally through a simple online form.
- Understand patient concerns through automatically generated key highlights.
- Help patients access information using the built-in FAQ chatbot.
- Save volunteer time by simplifying the support request review process.
- Improve communication and response efficiency for community support services.

## Local Development Setup

To run the project locally, run the following commands:

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```


