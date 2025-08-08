# 🔗 Social Media Frontend

A modern, scalable frontend for a full-stack social media platform built with **ReactJS**, **Vite**, **Redux Toolkit**, and **Socket.IO**.  
This project allows users to register, log in, create posts, react, comment, update profile/cover images, search users, and see a real-time news feed.


## 🚀 Features

- ✅ User Authentication (JWT-based)
- 👤 Profile Page with DP, Cover Image, Bio, Education, Address
- 📝 Post Creation with optional media
- ❤️ Like, 💬 Comment, 📤 Share Posts
- 🔍 Search users by username/name
- 🧑‍🤝‍🧑 Follow/Unfollow users
- 📰 Personalized News Feed (Real-Time)
- 📸 Upload Profile and Cover Photos
- 🔄 Real-Time Updates using Socket.IO
- 🌓 Responsive UI with clean design



## 🛠 Tech Stack

### Frontend

- [ReactJS](https://react.dev)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [Socket.IO Client](https://socket.io/)



## 🔗 API Endpoints (Used from Backend)

Ensure your backend server is running and exposes:

- POST `/api/auth/register` – Register user
- POST `/api/auth/login` – Login user
- GET `/api/users/:username` – Fetch profile
- PUT `/api/users/update` – Update user details
- POST `/api/posts/` – Create post
- GET `/api/posts/feed` – News feed
- PUT `/api/posts/:id/like` – Like a post
- POST `/api/comments/:postId` – Comment on a post
- GET `/api/users/search?q=` – Search users


## ⚡ Real-Time Features

- Socket.IO is initialized on login.
- Real-time updates for new posts, likes, and comments.
- Notification system (optional).

## 📸 Image Uploads

- Images (DP, Cover, Post Media) are uploaded via form-data using Axios. You can use:
- Local server with Multer
- OR Cloud-based storage like Cloudinary

## 🧪 To-Do & Enhancements

 - Story feature (like Instagram)
 - Dark mode support
 - Post privacy (public/friends/private)
 - Chat module (real-time messaging)
 - Admin dashboard