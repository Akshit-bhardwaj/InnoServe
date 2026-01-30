# ⚡             InnoServe  

A modern **Full-Stack Web Application** with complete **Authentication, Authorization, Role-Based Access (Admin/User)**, and an interactive **Admin Dashboard**.  
Built using the **MERN stack** + EJS with a clean UI and secure backend.  

🔗 **Live Demo:** [InnoServe on Render](https://innoserve-app.onrender.com/home)  

---

##  Features  

✅ User Authentication (Register, Login, Logout, JWT with Cookies & Sessions)  
✅ Role-Based Authorization (Admin & Normal User)  
✅ Admin Panel with:  
   - Manage Users (View, Edit, Delete)  
   - Manage Contacts (View, Delete)  
✅ Services Page (Dynamic data fetched from MongoDB Atlas)  
✅ Contact Form (Messages stored in DB, visible to admin)  
✅ Dynamic Navbar based on Login State  
✅ Secure Passwords with **bcrypt**  
✅ Fully Responsive & Modern UI with **Bootstrap**  

---

## 🛠 Tech Stack  

**Frontend:** EJS, HTML, CSS, Bootstrap, JavaScript  
**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas  
**Authentication:** JWT, Cookies, express-session  
**Other Tools:** Method-Override, Dotenv, Zod  

---

## 📂 Project Structure  

📦 InnoServe  
┣ 📂 config  
┃ ┣ db.js  
┃ ┗ data/servicedata.js  
┣ 📂 controllers  
┣ 📂 middlewares  
┣ 📂 models  
┣ 📂 public  
┣ 📂 router  
┣ 📂 views  
┃ ┣ base/  
┃ ┣ adminUserPage.ejs  
┃ ┣ adminContactPage.ejs  
┃ ┣ services.ejs  
┃ ┣ ...  
┣ index.js  
┣ package.json  
┣ .gitignore  
┗ README.md  

---

## ⚡ Getting Started (Run Locally)  

1. **Clone the repository**  
```bash
git clone https://github.com/Akshit-bhardwaj/InnoServe.git
cd InnoServe
