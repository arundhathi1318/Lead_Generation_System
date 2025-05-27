  The Lead Generator 3000 

Hi there, I have developed a Simple Lead Generation System. Please check out the setup below

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

# 🚀 Lead Generation System Setup & Installation Guide

---

## ⚙️ Local Setup & Installation Steps

### 1. Clone the Repository  
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```
2. Run the Backend Server
```
cd backend
source venv/bin/activate   # Activate virtual environment (Linux/macOS)
# OR
.\venv\Scripts\activate    # For Windows PowerShell
python app.py
```
3. Run the Frontend Server
```
cd frontend
npm install               # Install dependencies if needed
npm run dev
```
4. n8n Setup (Local Docker) & Workflow Configuration
4.1 Run n8n Locally using Docker
```
# Run n8n container, mapping port 5678 and persisting data
docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n
```
**4.2 Import Workflow**
Open http://localhost:5678 in your browser
<br>

Import the workflow JSON file (usually in your repo’s n8n/ folder or project root)
<br>


**4.3 Get Webhook URL**
Open the imported workflow in n8n
<br>


Select the Webhook node
<br>


Copy the TEST URL (e.g., http://localhost:5678/webhook-test/YOUR_WORKFLOW_ID)
<br>


**4.4 Update Backend Webhook URL**
Open your backend .env file or update directly in app.py
<br>

Replace YOUR_N8N_WEBHOOK_URL_GOES_HERE with the TEST Webhook URL you just copied

<br>

Save the file
<br>


**5. Configure Email Node in n8n**
Open the Send Email node (or SendGrid, Mailgun, etc.)
<br>


Add/select your email service credentials
<br>

Set the To Address to receive lead notifications
<br>


Use expressions like {{ $json.body.name }} and others in the email subject and body to include lead data dynamically
<br>


6. Activate Workflow
Toggle your workflow in n8n to Active
<br>


8. Run Backend & Test System
7.1 Run Backend Server
```
python app.py
```




8. Test Full System Flow
Make sure frontend is running (e.g., http://localhost:5173)
<br>

Ensure n8n Docker container is running (http://localhost:5678)
<br>


Ensure backend server is running
<br>

Open frontend in your browser, fill and submit the lead form
<br>


Watch backend terminal logs for submission
<br>


Check n8n Executions panel to confirm workflow triggered
<br>


Check your email for the lead notification message
<br>


**9. Production Deployment Notes**
When deploying, use the PRODUCTION Webhook URL from n8n Cloud or your hosted n8n instance in your backend’s N8N_WEBHOOK_URL environment variable
<br>


This ensures your system works seamlessly in production and during local testing

***🎉 Congratulations! Your Lead Generation System with automated n8n workflows is ready to use! 🎉****






