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



### 2. Frontend Setup (Vite + React - The Pretty Face of Our Operation!)

This is where the magic meets the eyeballs. Let's get this beauty up and running.

First, make sure you're in the root directory of the project (the one you cloned). Then, navigate to the frontend's lair (we'll assume it's a folder named `frontend`):

```bash
cd frontend

# Navigate to the backend directory
cd backend

# Create and activate a Python virtual environment
python -m venv venv
# On macOS/Linux:
source venv/bin/activate
# On Windows (Git Bash/PowerShell):
# .\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create a .env file (you'll get N8N_WEBHOOK_URL in Step 4)
echo "N8N_WEBHOOK_URL=YOUR_N8N_WEBHOOK_URL_WILL_GO_HERE" > .env
echo "FLASK_DEBUG=True" >> .env # For development

# (Leave this terminal open or come back to it after n8n setup)
# To run (once N8N_WEBHOOK_URL is set):
# python app.py


 **Run n8n Locally using Docker:**
    Open your PowerShell (or any terminal/command prompt that can run Docker commands) and execute the following:

    **`docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n`**




## ☁️ Setting Up Your n8n Workflow Environment

Your n8n workflow is the magical glue holding this lead-gen party together. Here's how to get it ready, whether you're using the cushy n8n Cloud or bravely self-hosting.

#

: Self-Hosting n8n (e.g., with Docker - For the Adventurous!)

If you prefer to host n8n yourself (e.g., on a VPS, your own server, or a platform that supports Docker):

1.  **Server Setup:**
    *   You'll need a server (Linux VPS is common) where you can install Docker and Docker Compose.
2.  **Install Docker & Docker Compose:**
    *   Follow the official Docker installation guides for your server's OS.
3.  **Get n8n Docker Compose File:**
    *   The recommended way to run n8n via Docker is using `docker-compose`. You can find the official `docker-compose.yml` examples in the [n8n documentation](https://docs.n8n.io/hosting/installation/docker/).
    *   A basic `docker-compose.yml` might look like this (but refer to official docs for the latest):
        ```yaml
        version: '3.7'

        services:
          n8n:
            image: n8nio/n8n
            restart: always
            ports:
              - "127.0.0.1:5678:5678" # Expose only to localhost initially
            environment:
              - N8N_HOST="your.n8n.domain.com" # IMPORTANT: Your public domain for n8n
              - WEBHOOK_URL="https://your.n8n.domain.com/" # IMPORTANT: Public base URL for webhooks
              # Add other environment variables as needed (e.g., for database, timezone)
              - TZ=America/New_York
            volumes:
              - ~/.n8n:/home/node/.n8n # Persists n8n data
        ```
4.  **Configure Environment Variables (in `docker-compose.yml` or a `.env` file for Docker):**
    *   **`N8N_HOST`**: The domain name your n8n instance will be accessible at (e.g., `n8n.yourcompany.com`).
    *   **`WEBHOOK_URL`**: Crucially, this **must be the public base URL** where your n8n instance can be reached from the internet (e.g., `https://n8n.yourcompany.com/`). This allows n8n to generate correct webhook URLs.
    *   Configure other variables like database connections (if not using SQLite), timezone, etc., as per n8n docs.
5.  **Data Persistence:**
    *   Use Docker volumes (as shown in the example `~/.n8n:/home/node/.n8n`) to ensure your n8n data (workflows, credentials) persists across container restarts.
6.  **Run n8n:**
    *   Navigate to the directory with your `docker-compose.yml` file and run:
        ```bash
        docker-compose up -d
        ```
7.  **Reverse Proxy & HTTPS (Highly Recommended & Often Necessary):**
    *   Your n8n instance (running on port 5678 by default) should be fronted by a reverse proxy like Nginx, Caddy, or Traefik.
    *   The reverse proxy will handle:
        *   **SSL/TLS (HTTPS):** Essential for security. Use Let's Encrypt for free certificates.
        *   Mapping your public domain (e.g., `https://your.n8n.domain.com`) to the n8n container (e.g., `http://localhost:5678`).
8.  **Firewall:** Ensure your server's firewall allows traffic on port 80 (for HTTP challenges/redirects) and 443 (for HTTPS).
9.  **Access n8n & Setup Workflow:**
    *   Access your n8n instance via its public URL (e.g., `https://your.n8n.domain.com`).
    *   Log in/create an admin user.
    *   Import the `workflow.json` file.
    *   Configure nodes and credentials as described in the "n8n Cloud" section.
    *   Activate the workflow.
10. **Key Step for Backend:**
    *   When you deploy your **backend** (Flask/Node.js app), set its `N8N_WEBHOOK_URL` environment variable to the **PRODUCTION Webhook URL** generated by your *self-hosted n8n instance* (e.g., `https://your.n8n.domain.com/webhook/your-workflow-id`).

**Important Considerations for Self-Hosting:**
*   **Security:** Keep your server and n8n updated. Secure access to your n8n instance.
*   **Maintenance:** You are responsible for backups, updates, and ensuring uptime.
*   **Complexity:** Self-hosting is more involved than n8n Cloud but offers more control.

---

No matter which option you choose, ensure your deployed backend points to the correct n8n **PRODUCTION Webhook URL** for the lead data to flow correctly!
