# 🍽️ Flavors & Finesse

**Flavors & Finesse** is a full-stack **MERN web application** developed for managing and presenting a food franchise business. The platform provides a modern and responsive interface for users to explore the franchise, submit franchise applications, and interact with the business.

It also includes a secure **Admin Dashboard** for managing franchise applications, requests, sales-related information, clients, and administrative settings.

---

## 🚀 Features

### 👤 User Side

* 🏠 Home Page
* ℹ️ About Section
* 🍽️ Services Section
* 📄 Terms & Conditions
* 📞 Contact Section
* 📝 User Registration
* 🔐 User Login
* 🔑 Password Reset Functionality
* 📋 Franchise Registration/Application
* 📱 Fully Responsive User Interface

### 👨‍💼 Admin Side

* 🔐 Admin Login
* 🛡️ Secure Admin Authentication
* 📊 Admin Dashboard
* 📋 Manage Franchise Applications
* 📩 Manage Requests
* 💰 Manage Sales-Related Data
* 👥 Manage Clients
* ⚙️ Admin Settings
* 🔑 Password Update Functionality

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* React Router
* Axios
* Tailwind CSS
* JavaScript (ES6+)
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* Axios
* CORS
* dotenv

### Development Tools

* Git
* GitHub
* Visual Studio Code
* npm

---

## 📁 Project Structure

```text
mern-project/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routers/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── router/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── screenshots/
│   ├── home.png
│   ├── services.png
│   ├── contact.png
│   ├── admin-login.png
│   ├── admin-dashboard.png
│   └── register.png
│
├── .gitignore
└── README.md
```

---

# 📸 Screenshots

## 🏠 Home Page

The home page provides an overview of the Flavors & Finesse franchise platform. It introduces the business, highlights the major services, and provides navigation to different sections of the website.

![Home Page](./screenshots/home.png)

---

## 📞 Contact Section

The Contact page enables users and franchise seekers to get in touch, submit inquiries, and communicate directly with the management team.

![Contact Section](./screenshots/contact.png)

---

## 🍽️ Services Page

The Services page presents the services and franchise opportunities available through the platform.

![Services Page](./screenshots/services.png)

---

## 🔐 Admin Login

The Admin Login page provides authenticated access to the administrative dashboard.

![Admin Login](./screenshots/admin-login.png)

---

## 📊 Admin Dashboard

The Admin Dashboard allows administrators to manage franchise applications, requests, accepted applications, clients, sales-related information, and other administrative operations.

![Admin Dashboard](./screenshots/admin-dashboard.png)

---

## 🏢 Franchise Registration

New users interested in obtaining a franchise can register by submitting the required details through the franchise registration form.

![Franchise Registration](./screenshots/register.png)

---

# ⚙️ Installation

Follow the steps below to run the project locally.

## 1. Prerequisites

Make sure the following software is installed on your system:

* **Node.js** — version 18 or higher recommended
* **npm** — included with Node.js
* **Git**
* **MongoDB Atlas account** or a local MongoDB installation
* **Visual Studio Code** or another code editor

You can verify Node.js and npm using:

```bash
node --version
npm --version
```

Verify Git using:

```bash
git --version
```

---

## 2. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/Yeshwant-kumar/Restaurant-Franchise-.git
```

Move into the project directory:

```bash
cd Restaurant-Franchise-
```

---

## 3. Install Backend Dependencies

Open the terminal inside the project directory and run:

```bash
cd backend
npm install
```

This installs all required backend dependencies from `package.json`.

---

## 4. Configure Backend Environment Variables

Create a `.env` file inside the `backend` folder (or copy from `.env.example`).

```text
backend/
└── .env
```

Add your backend configuration:

```env
PORT=2004
url=your_mongodb_connection_string
SEC_KEY=your_secret_jwt_key
```

### Environment Variables

| Variable     | Description                             |
| ------------ | --------------------------------------- |
| `PORT`       | Port on which the backend server runs (default: `2004`) |
| `url`        | MongoDB / MongoDB Atlas connection string |
| `SEC_KEY`    | Secret key used for JWT authentication  |

### Example

```env
PORT=2004
url=mongodb+srv://username:password@cluster.mongodb.net/flavors_and_finesse
SEC_KEY=your_secure_jwt_secret
```

**Do not upload your `.env` file to GitHub.**

Make sure `.gitignore` contains:

```text
.env
node_modules/
```

---

## 5. Start the Backend Server

From the `backend` directory:

```bash
npm start
```

If your project uses a development script such as `nodemon`, you can use:

```bash
npm run dev
```

The backend server should start on:

```text
http://localhost:2004
```

The exact port depends on the value configured in your `.env` file.

---

# 🎨 Frontend Installation

## 6. Install Frontend Dependencies

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

---

## 7. Configure Frontend Environment Variables

Create a `.env` file inside the `frontend` directory (or copy from `.env.example`):

```text
frontend/
└── .env
```

For a Vite application, environment variables exposed to the frontend should start with `VITE_`.

For example:

```env
VITE_API_URL=http://localhost:2004
```

Use the variable name expected by your frontend code if your project already uses a different API variable.

---

## 8. Start the Frontend

Run:

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# ▶️ Running the Complete Project

You need to run both the frontend and backend servers.

### Terminal 1 — Backend

```bash
cd backend
npm install
npm start
```

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

The frontend communicates with the backend through the configured API URL.

---

# 🗄️ MongoDB Configuration

The application uses **MongoDB** as its database and **Mongoose** for database interaction.

You can use:

* MongoDB Atlas
* Local MongoDB

For MongoDB Atlas:

1. Create a MongoDB Atlas account.
2. Create a new cluster.
3. Create a database user.
4. Add your IP address to the Network Access list.
5. Copy the MongoDB connection string.
6. Add it to the backend `.env` file.

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/flavors_and_finesse
```

---

# 🔐 Security

The project uses several security-related technologies and practices:

* JWT-based authentication
* Protected admin functionality
* Password authentication
* Environment variables for sensitive configuration
* CORS configuration
* `.env` exclusion through `.gitignore`

### Important

Never commit the following to GitHub:

```text
.env
Database passwords
JWT secrets
API keys
Private credentials
```

---

# 🧪 Development

To install dependencies after cloning the repository:

```bash
cd backend
npm install
```

and:

```bash
cd ../frontend
npm install
```

For frontend development:

```bash
npm run dev
```

For backend development:

```bash
npm start
```

If a development script is configured:

```bash
npm run dev
```

---

# 🔨 Production Build

To create a production build of the frontend:

```bash
cd frontend
npm run build
```

The production files will generally be generated inside:

```text
frontend/dist/
```

You can preview the production build using:

```bash
npm run preview
```

The backend can be deployed separately to a Node.js-compatible hosting platform.

---

# 🌐 Deployment

The project can be deployed using services such as:

* Vercel — Frontend
* Render — Frontend/Backend
* Railway — Backend
* MongoDB Atlas — Database

Before deployment, update the environment variables with your production configuration.

For example:

```env
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_production_secret
```

For the frontend, configure the production backend API URL:

```env
VITE_API_URL=https://your-backend-url.com
```

---

# 🐛 Troubleshooting

## Backend is not starting

Check:

```bash
node --version
npm --version
```

Then reinstall dependencies:

```bash
cd backend
npm install
```

Make sure the `.env` file exists and contains the required variables.

---

## MongoDB connection error

Check:

* MongoDB connection string
* Database username
* Database password
* MongoDB Atlas Network Access
* Internet connection
* `MONGO_URI` variable in `.env`

---

## Frontend cannot connect to backend

Make sure:

1. Backend server is running.
2. Frontend API URL is correct.
3. CORS is configured correctly.
4. Frontend `.env` contains the correct backend URL.

For local development, the backend may be:

```text
http://localhost:2004
```

and the frontend:

```text
http://localhost:5173
```

---

# 📌 Future Improvements

Possible future enhancements include:

* Online payment integration
* Email notifications
* Franchise application tracking
* Advanced sales analytics
* Role-based admin access
* Cloud image/file storage
* Automated email communication
* Advanced reporting
* Production deployment
* Mobile application

---

# 🤝 Contributing

Contributions are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git add .
git commit -m "Add new feature"
```

5. Push your branch.

```bash
git push origin feature/your-feature
```

6. Create a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, distribute, and build upon this project, subject to the terms of the MIT License.

