# 📚 TDTTI SS 7 Progression Report & E-Book Portal

An interactive, feature-rich Social Science E-Book and Academic Progression Tracking Portal designed for Class 7 (SCERT Curriculum) at TDTTI. Built with pure HTML5, CSS3, ES6 JavaScript, and powered by Firebase Firestore.

---

## 🌟 Key Features

### 📖 Student E-Book & Learning Features
* **12 SCERT Chapters:** Complete curriculum coverage with structured sections (Intro, Notes, Activities, Media, Model Tests).
* **High-Visibility TTS Read-Aloud:** Real-time Text-to-Speech reading with high-contrast fluorescent neon green word highlighting and speed controls (0.8x, 1.0x, 1.2x).
* **English to Malayalam Translation:** Instant inline translation for all chapter content and quizzes.
* **Mobile-Optimized Printing:** Custom formatted two-column layout for printing notes and question/answer sheets.
* **Revision Bookmarks:** Pin key notes with star ratings to a personal revision feed.
* **Interactive Model Tests:** Step-by-step quiz engine with 30-second timers per question, automated scoring, instant feedback, and attempt history.
* **Student Academic Folio:** Consolidated profile card displaying term exam marks, automatic letter grades (A–E), notebook diligence status, and earned learning badges.

### 🛠️ Admin / Teacher Dashboard
* **Dynamic Content Editor:** Create, update, or delete introduction sections, multi-card notes, multi-question activity blocks, video/PDF embeds, and quizzes in real-time.
* **CSV Batch Uploads:** Upload entire student user lists or quiz question sets via CSV templates.
* **Student Activity Tracker:** 5-section progress tracking matrix with direct **WhatsApp Detailed Report Generation** sent to parents/guardians.
* **Classwise Full Assessment Portfolio:** View and manage student performance ordered by Class (7A, 7B, 7C, 7D) with direct Call & WhatsApp quick links.
* **Live Online Presence Monitor:** Track active online students, login timestamps, and detected device details.
* **Media Library:** Upload images and videos directly or link external media.
* **Security & Audit Controls:** Configure right-click/copy protection, view system audit logs, or lock/disable specific chapters.

### 📱 Progressive Web App (PWA) & Security
* **Offline Ready (PWA):** Features dynamic Web App Manifest and Service Worker caching for studying without an internet connection.
* **3-Minute Inactivity Auto-Logout:** Protects student accounts from unattended session leaks.
* **Dark Mode Support:** Smooth theme toggling for low-light reading.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+)
* **Database & Hosting:** Firebase Firestore v9 (Compat Web SDK)
* **Icons & Fonts:** FontAwesome 6.4.0, System UI / Segoe UI Font Stack
* **APIs:** Web Speech API (SpeechSynthesis), Google Translate Public API

---

## 📁 Recommended Repository File Structure

To run the application smoothly with PWA offline features, set up your GitHub repository like this:
├── index.html # Main application code (The HTML file provided)
├── sw.js # Service Worker for PWA offline functionality
└── README.md # Project documentation
code
Code
> **Note:** Ensure you create a basic `sw.js` file in your repository root folder so the Service Worker registers without console errors.

---

## 🚀 How to Host on GitHub Pages

1. **Upload Files:** Push `index.html`, `sw.js`, and `README.md` to your GitHub repository.
2. **Enable Pages:**
   * Go to your repository **Settings** tab.
   * Click **Pages** on the left menu.
   * Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
   * Click **Save**.
3. **Authorize Domain in Firebase:**
   * Open the [Firebase Console](https://console.firebase.google.com/) -> **ss-ebook** project.
   * Navigate to **Authentication** > **Settings** > **Authorized domains**.
   * Click **Add domain** and enter your GitHub Pages domain (e.g., `username.github.io`).

---

## 📊 CSV Import Templates

### 1. Student Users Upload Template (`users_template.csv`)
```csv
Class,Division,PhoneNo,Username,Password,Role
7,A,9876543210,Rahul,Rahul@123,Student
7,B,9123456789,Ananya,Ananya@123,Student
2. Quiz Questions Upload Template (quiz_template.csv)
code
CSV
Question,OptionA,OptionB,OptionC,OptionD,CorrectAnswer
"Who wrote the Indian Constitution?","Dr. B.R. Ambedkar","Jawaharlal Nehru","Mahatma Gandhi","Sardar Patel","A"
"When did Vasco da Gama arrive in Calicut?","1498","1500","1757","1857","A"
🔒 Security & Default Credentials
Default Admin Account:
Username: Admin
Password: Admin@123
Default Student Password Logic:
Auto-generated from the first 3 letters of the student's name + @123 (e.g., Rahul ➔ Rah@123).
Students are prompted to change their password upon their initial login.
📄 License & Attribution
Developed for TDTTI Thuravoor — Social Science Class 7. All educational content belongs to the SCERT Kerala Social Science curriculum framework.
