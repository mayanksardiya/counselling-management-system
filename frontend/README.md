# 🎓 Counselling Management System

A full-stack web application to digitize and automate the college admission and counselling process.

## 🚀 Features

- Student Registration & Login
- Online Application Form
- Document Upload
- Counseling Slot Booking
- AI-Powered Chatbot (Gemini AI)
- Branch Recommendation Engine
- Admin Dashboard

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Java, Spring Boot |
| Database | MySQL |
| AI Chatbot | Google Gemini API |
| Version Control | Git & GitHub |

## 📁 Project Structure
```
college-admission/
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   └── chatbot.html
├── src/
│   └── main/java/com/admission/
│       ├── controller/
│       ├── service/
│       ├── repository/
│       └── model/
└── README.md
```

## ⚙️ How to Run

### Database
1. Install MySQL
2. Run `schema.sql` in MySQL
3. Database `college_admission` will be created

### Backend
1. Install Java 17
2. Open project in IntelliJ
3. Update `application.properties` with your MySQL password
4. Run `CollegeAdmissionApplication.java`
5. Backend runs on `http://localhost:8080`

### Frontend
1. Open `frontend/index.html` in browser
2. Register as a student
3. Login and explore features

## 📡 API Endpoints

| Method | URL | Description |
|---|---|---|
| POST | `/api/students/register` | Register student |
| POST | `/api/students/login` | Login |
| GET | `/api/students/{id}` | Get student |
| POST | `/api/chatbot` | AI chatbot |

## 👨‍💻 Developer

- **Name:** Khushi Choudhary
- **GitHub:** [@Khushic208](https://github.com/Khushic208)
- **Year:** 3rd Year Engineering Student
```

---

Save → then push to GitHub:
```
git add .
git commit -m "Added README"
git push