# ✨ The "Leads-Go-Brrr" Generator 3000 ✨

Hi there, I have developed a Simple Lead Generation System. Please check out the details below!

**Live Demo:**
*   **Frontend:** https://lead-generation-system-seven.vercel.app
*   **Backend API Base:** https://lead-generation-system-o6kd.vercel.app/ (API Endpoint, not for direct browsing)
*   **n8n Workflow Screenshot:**
    ![image](https://github.com/user-attachments/assets/3062860e-799a-4cfb-ae3c-5bb2b7b819d8)
    *(Psst! Video walkthrough link at the bottom!)*

## 🚀 Core Features
*   **Lead Collection Form (React):** Name, Email, Company, Message with client-side validation.
*   **Backend API (Python/Flask):** Validates and forwards lead data.
*   **n8n Workflow:** Email notifications for new leads.

## 🛠️ Tech Stack
*   **Frontend:** Vite + React
*   **Backend:** Python (Flask)
*   **Automation:** n8n
*   **Deployment:** Vercel (Frontend/Backend), n8n Cloud or Local Docker

## 📋 Prerequisites
1.  Node.js & npm (or yarn)
2.  Python 3.x & pip
3.  Docker (for local n8n) or an n8n Cloud account
4.  Git

---
## ⚙️ Local Setup & Installation Steps
---

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

```
Run the backend server:
```bash
cd backend
source venv/bin/activate
python app.py
```
Run the Frontend server:
```bash
cd frontend
npm run dev

```
n8n Setup (Local Docker) & Workflow Configuration

@Run n8n Locally using Docker
```
# Run n8n container, mapping port 5678 and persisting data in 'n8n_data' volume
docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n
```
** Configure n8n Workflow**
Import Workflow: In your local n8n (http://localhost:5678), import the workflow.json file (usually located in the repository's n8n/ folder or root).
<br>

Get Webhook URL:
<br>

Open the imported workflow in n8n.
<br>

Select the "Webhook" node.
<br>

Under "Webhook URLs", copy the TEST URL (e.g., http://localhost:5678/webhook-test/YOUR_WORKFLOW_ID).
<br>



Go back to your backend terminal.
Open the backend/.env file.
Replace YOUR_N8N_WEBHOOK_URL_GOES_HERE with the TEST Webhook URL you just copied from n8n. Save the file.


**n8n CONFIGURATION**



Configure Email Node:
<br>

In n8n, open the "Send Email" node (or SendGrid, Mailgun, etc.).
<br>

Add/select your email service credentials.
<br>

Set the "To Address" for notifications.
<br>

Ensure the subject and body use expressions (e.g., {{ $json.body.name }}) to include lead data.
<br>

Activate Workflow: In n8n, toggle the workflow to Active.
<br>

 
 **Run Backend & Test System**
 
Run Backend Server:
<br>

<br>

Go to your backend terminal (where the virtual environment is active and you updated the .env file).
Execute:
```
python app.py
```
Use code with caution.
<br>

Bash
(Or flask run if your project is configured for it. Assumes app.py contains if __name__ == '__main__': app.run(...))


**TEST**


 
Ensure your Frontend (from Step 3, e.g., http://localhost:5173) is running.
<br>

Ensure your n8n Docker container (from Step 4A) is running.
<br>

Ensure your Backend server  is running.
<br>

Open the frontend URL in your browser, fill out, and submit the lead form.
<br>

Check your backend terminal for logs.
<br>

Check n8n (http://localhost:5678) under "Executions" to see if the workflow triggered.
<br>

Check your email for the lead notification.
<br>



Activate the workflow.
<br>

Crucially: Use the PRODUCTION Webhook URL from n8n Cloud in your backend's N8N_WEBHOOK_URL environment variable (both for local testing against n8n Cloud and when deploying your backend).



