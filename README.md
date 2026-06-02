# 🚕 AutoConnect – India's Inclusive Local Transport App

AutoConnect connects passengers with nearby **auto rickshaws, e-rickshaws, cycle rickshaws, and single-engine bikes** through a mobile-first platform built for Indian users.

## 🔗 Live Demo
- **Frontend:** https://auto-connect-mobile-app.vercel.app
- **Backend API:** https://autoconnect-backend-production.up.railway.app

---

## ✅ What Changed (May 2026 — GitHub Finish-Up-A-Thon)

This project was originally built as a **UI/UX prototype in December 2025** with no backend. For the GitHub Finish-Up-A-Thon Challenge, it was transformed into a **fully functional full-stack application**:

| Before (Dec 2025) | After (May 2026) |
|---|---|
| Pure HTML/CSS/JS prototype | Spring Boot backend + REST APIs |
| No database | PostgreSQL database saving real data |
| Simulated interactions | Real ride booking flow |
| No deployment | Live on Railway + Vercel |
| No validation | Phone, name, document validation |
| No location | Real GPS detection |

---

## 🛠 Tech Stack

### Frontend
- TypeScript, React, Vite, Tailwind CSS
- Deployed on **Vercel**

### Backend
- Java, Spring Boot, Spring Data JPA
- PostgreSQL, REST APIs
- Deployed on **Railway**

---

## 🚀 Running Locally

### Frontend
```bash
npm i
npm run dev
```

### Backend
```bash
cd backend
mvn spring-boot:run
```

---

## 📌 Features

### Passenger
- Signup with phone validation
- GPS-based current location
- Ride request → real backend
- Vehicle selection with fare estimate
- Kid Safety Mode for minors

### Driver
- Registration with document upload
- Online/Offline toggle
- Real-time ride requests from passengers
- Accept/Reject rides

### Safety
- Verified driver badges
- SOS button during rides
- Live location sharing
- Transparent fare display

---

## 🎨 Design System

| Usage | Color |
|---|---|
| Passenger Theme | Yellow `#FFC107` |
| Driver Theme | Green `#4CAF50` |

---

## 🚀 Future Enhancements
- Multilingual support (Hindi & regional languages)
- Voice-assisted booking
- Digital payments integration
- Real-time WebSocket tracking
- Google Maps integration

---

### 🌟 "AutoConnect – Empowering Local Transport, One Ride at a Time"
