# Codivio 🎥💻

**Codivio** is a full-stack video interview platform that simulates a real-world technical interview environment. <br> <br>
It allows seamless communication, collaboration, and evaluation between interviewers and candidates, all in one place. <br><br> The platform features a **live coding IDE integrated within the video call**, enabling real-time problem-solving and technical discussions.


## 🚀 Live Demo

[🌐 View Live Project](codivio.vercel.app)

> 🔐 **Interviewer Access:**
- **Email**: chiragnoida3345@gmail.com  
- **Password**: G$3p9t!Kw@l2zrV

## 🖼️ Screenshots

### 👨‍💼 Interviewer View

<table>
  <tr>
    <td><img src="public/I (1).png" width="400"/></td>
    <td><img src="public/I (3).png" width="400"/></td>
  </tr>
  <tr>
    <td><img src="public/I (4).png" width="400"/></td>
    <td><img src="public/I (2).png" width="400"/></td>
  </tr>
</table>

---

### 👨‍🎓 Candidate View

<table>
  <tr>
    <td><img src="public/C (1).png" width="400"/></td>
    <td><img src="public/C (2).png" width="400"/></td>
  </tr>
</table>



## 📌 Features

### 👨‍💼 Interviewer Functionality
- **New Call**: Instantly start a live interview
- **Join Interview**: Enter an interview using an invite link
- **Schedule**: Plan upcoming interviews
- **Recordings**: View past interview sessions
- **Evaluate**: Mark interview outcome as pass/fail, rate performance, and add comments

### 👨‍🎓 Candidate Functionality
- **View Scheduled Interviews**
- **Access Completed Interviews**

### 🔧 Interview Environment
- **Video Calling**
- **Screen Sharing**
- **Screen Recording**
- **Live Code Editor** (with sliding/resizable interface)
- **Server-side Evaluations**


---

## ⚙️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Video API**: [Stream](https://getstream.io/)
- **Database & Backend**: [Convex](https://convex.dev/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Other Features**: Server Actions, Client & Server Components, Dynamic Routing

---

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project and add the following:

```env
# Convex Deployment
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk (Authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
VITE_CLERK_FRONTEND_API_URL=

# Stream (Chat or Feed)
NEXT_PUBLIC_STREAM_API_KEY=
```

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

### 🛠️ How to Contribute

1. **Fork the repository**
2. **Create your feature branch**

```bash
git checkout -b feature/your-feature-name
git push origin feature/your-feature-name
```

---
<br>

**Designed and Built by Chirag Sharma**
