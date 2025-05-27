# ✨ The "Leads-Go-Brrr" Generator 3000 ✨


Hi there , I have developed a Simple Lead generation System Please check Out the details below!!


**Live Demo (if you dare!):**
*   **Frontend:** https://lead-generation-system-seven.vercel.app
*   **Backend API Base:** https://lead-generation-system-o6kd.vercel.app/ (You won't see much here, but it's alive!)
*   **n8n Workflow (Public URL if available, otherwise a screenshot/description):** [LINK_TO_N8N_INFO_OR_SCREENSHOT]
*   ![image](https://github.com/user-attachments/assets/3062860e-799a-4cfb-ae3c-5bb2b7b819d8)


**(Psst! Don't forget to check out the video walkthrough! Link at the bottom.)**

## 🚀 Features

*   **Sleek Lead Generation Form:** Collects Name, Email, Company (optional), and Message (optional) with client-side validation that's stricter than your grandma's cookie recipe.
*   **Pythonic Backend Power (Flask):** A lean, mean API that catches lead data, gives it a quick once-over, and yeets it over to n8n.
*   **n8n Workflow Automation:**
    *   Triggers on new lead submissions.
    *   Sends delightful email notifications to your sales team (so they can pounce!).
    *   (Optional but cool) Can be easily extended to store leads in Google Sheets, Airtable, or your favorite database.

## 🛠️ Tech Stack

*   **Frontend:** Vite + React, HTML, CSS, JavaScript (because we're fancy)
*   **Backend:** Python, Flask (simple, effective, and snakes are cool)
*   **Automation:** n8n (your digital workflow butler)
*   **Email Service (via n8n):** SendGrid, Mailgun, SMTP (your choice!)
*   **Deployment:**
    *   Frontend: Vercel / Netlify
    *   Backend: Heroku / Render
    *   n8n: n8n Cloud / Local Docker

## 📋 Prerequisites

Before you embark on this thrilling adventure, make sure you have:

1.  **Node.js & npm/yarn:** For the React frontend. Get it from [nodejs.org](https://nodejs.org/).
2.  **Python 3.x & pip:** For the Flask backend. Grab it from [python.org](https://python.org/).
3.  **An n8n Instance:**
    *   **n8n Cloud:** Easiest way to get started ([n8n.cloud](https://n8n.cloud/)).
    *   **Local Docker:** For the brave and self-hosty. See [n8n docs](https://docs.n8n.io/hosting/installation/docker/).
4.  **An Email Service Account:** Like SendGrid, Mailgun, or access to an SMTP server. You'll need API keys/credentials for n8n.
5.  **A Code Editor:** VS Code is pretty neat.
6.  **Git:** Because version control is not just a suggestion, it's a lifestyle.
7.  **A Sense of Humor:** This is mandatory.

## ⚙️ Setup & Installation

Let's get this show on the road!

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
