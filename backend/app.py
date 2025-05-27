# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import re

app = Flask(__name__)
CORS(app)

N8N_WEBHOOK_URL = 'http://localhost:5678/webhook-test/myleadform'

def is_valid_email(email):
    if not email:
        return False
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return re.match(pattern, email) is not None

@app.route('/submit-lead', methods=['POST'])
def submit_lead():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400

        name = data.get('name')
        email = data.get('email')
        company = data.get('company', '')
        message = data.get('message', '')

        errors = {}
        if not name or not name.strip():
            errors['name'] = 'Name is required.'
        if not email:
            errors['email'] = 'Email is required.'
        elif not is_valid_email(email):
            errors['email'] = 'Invalid email format.'

        if errors:
            return jsonify({"errors": errors}), 400

        lead_data_for_n8n = {
            "name": name,
            "email": email,
            "company": company,
            "message": message
        }

        if N8N_WEBHOOK_URL == 'YOUR_N8N_WEBHOOK_URL_GOES_HERE':
            app.logger.warning("N8N_WEBHOOK_URL is still the placeholder. Please configure it.")
            return jsonify({"error": "N8N Webhook URL not configured correctly in backend."}), 500

        app.logger.info(f"Sending data to n8n at {N8N_WEBHOOK_URL}: {lead_data_for_n8n}")
        response_n8n = requests.post(N8N_WEBHOOK_URL, json=lead_data_for_n8n)

        if response_n8n.status_code == 200 or response_n8n.status_code == 204:
            app.logger.info("Data successfully sent to n8n.")
            return jsonify({"message": "Lead submitted successfully!", "data_sent": lead_data_for_n8n}), 200
        else:
            app.logger.error(f"Error sending data to n8n: {response_n8n.status_code} - {response_n8n.text}")
            return jsonify({"error": "Failed to process lead with automation tool."}), 500

    except requests.exceptions.RequestException as e:
        app.logger.error(f"Could not connect to n8n webhook: {str(e)}")
        return jsonify({"error": f"Could not connect to automation service: {str(e)}"}), 503
    except Exception as e:
        app.logger.error(f"An error occurred: {str(e)}")
        return jsonify({"error": f"An internal server error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
