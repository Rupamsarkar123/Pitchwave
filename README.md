# Pitchwave

Pitchwave is a startup-investor pitching platform that connects entrepreneurs with potential investors. It provides a streamlined interface for startups to showcase their ideas and receive funding opportunities.

## 🚀 Tech Stack

### Frontend:
- React.js (Vite)
- TailwindCSS
- React Router

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemailer (SMTP for email services)
- Multer (for file uploads)

## Features

- **User Authentication**: Secure login/signup with JWT authentication.
- **Profile Management**: Users can create and manage their profiles.
- **Pitch Submission**: Startups can submit their project details for investors.
- **Chat System**: Real-time chat between startups and investors.
- **Email Notifications**: Using SMTP and Nodemailer to send automated emails.
- **File Uploads**: Multer is used for handling profile pictures and pitch documents.
- **Ask ChatAI**: Integrated AI assistant to provide startup-related guidance and insights.

## Screenshots

![Screenshot 1](https://github.com/user-attachments/assets/36def5f0-b008-4063-bbf0-83eb91e3eb33)
![Screenshot 2](https://github.com/user-attachments/assets/38ecb936-93f8-4deb-9a94-60e6e4bf47f9)
![Screenshot 3](https://github.com/user-attachments/assets/dd926a67-6a80-4805-8d5e-ca5079e8116c)
![Screenshot 4](https://github.com/user-attachments/assets/ce0f5d64-5048-44c0-a888-7e8b9521a267)
![Screenshot 5](https://github.com/user-attachments/assets/f8c89950-8ec1-4da5-903b-270fab9724ff)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Rupamsarkar123/Pitchwave.git
   ```
2. Install dependencies:
   ```sh
   cd Pitchwave
   npm install
   ```
3. Setup environment variables:
   Create a `.env` file and add your database connection string, email credentials for SMTP, and other required variables.
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_email
   SMTP_PASS=your_email_password
   ```
4. Start the backend:
   ```sh
   cd back
   nodemon index.js
   ```
5. Start the frontend:
   ```sh
   cd ..
   npm run dev
   ```

## Contributing

Contributions are welcome! Feel free to fork this repo and submit pull requests.






