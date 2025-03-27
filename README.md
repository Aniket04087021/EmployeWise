# EmployWise React App

This is a React application for user management that integrates with the **Reqres API**. It includes authentication, user listing, pagination, and user editing/deletion.

## 🚀 Features
- **Login Authentication** (Token-based login)
- **Paginated User List** (Fetches users from API)
- **Edit User Details** (Modify name, email, and avatar)
- **Delete Users** (Remove users from the list)

---

## 📌 Setup & Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Aniket04087021/employwise-react.git
cd employwise-react
```

### 2️⃣ Install Dependencies
Ensure you have **Node.js** and **npm** installed, then run:
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
This will start the app at **http://localhost:5173/** (Vite default port).

---

## 🛠️ Project Structure
```
📦 src
 ┣ 📂 assets               # Static assets (images, styles)
 ┣ 📂 components            # Reusable UI components
 ┃ ┣ 📜 Navbar.jsx          # Navigation bar
 ┃ ┣ 📜 Pagination.jsx      # Pagination controls
 ┃ ┣ 📜 UserCard.jsx        # User display card
 ┣ 📂 pages
 ┃ ┣ 📜 Login.jsx           # Login page
 ┃ ┣ 📜 UsersList.jsx       # User listing page
 ┃ ┣ 📜 EditUser.jsx        # Edit user details
 ┣ 📜 api.js                # API interaction logic
 ┣ 📜 App.jsx               # Main application component
 ┣ 📜 main.jsx              # Entry point
```

---

## 🔑 Authentication
- Use the following test credentials for login:
  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
  ```
- Upon successful login, the **token** is stored, and users are redirected to the **Users List page**.

---

## 🔗 API Endpoints Used
- **Login:** `POST /api/login`
- **Fetch Users:** `GET /api/users?page=1`
- **Update User:** `PUT /api/users/{id}`
- **Delete User:** `DELETE /api/users/{id}`

### 🔥 Considerations
- **Reqres API does not persist changes.** Updates will return a success message but will not reflect in future API calls.
- **Pagination is simulated** (using `page=1,2` from API).
- **Users are stored in state** after fetching, so deletion and edits only update locally.

---

## ✅ Deployment
The app is deployed on **Vercel**: [EmployWise](https://employe-wise.vercel.app/)

To build for production:
```sh
npm run build
```
Deploy the `/dist` folder to **Netlify, Vercel, or any static hosting provider**.

---

## 📌 Author
Developed by [Aniket04087021](https://github.com/Aniket04087021)
