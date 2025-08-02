# DriftChat - Real-Time Chat Application

A full-stack real-time chat application built with the MERN stack that enables users to communicate instantly with features similar to popular messaging applications like WhatsApp and Telegram.

## 🌟 Live Demo

**Visit the application:** [https://driftchat-1.onrender.com](https://driftchat-1.onrender.com)

## ✨ Features

### 🔐 Authentication & User Management

- Secure user registration and login
- JWT-based authentication
- Password hashing with bcryptjs
- Profile picture upload using Cloudinary
- User profile management

### 💬 Real-Time Messaging

- Instant message delivery using Socket.io
- One-to-one private messaging
- Group chat creation and management
- Real-time typing indicators
- Message history and persistence

### 👥 Group Chat Features

- Create group chats with multiple users
- Add/remove users from groups
- Group admin controls
- Group chat notifications

### 🔍 User Experience

- User search functionality
- Real-time notifications
- Responsive design for all devices
- Modern UI with Chakra UI components
- Guest user credentials for testing

### 🔔 Notifications

- Real-time message notifications
- Notification badge with message count
- Click to navigate to specific chats
- Automatic notification clearing

## 🛠️ Tech Stack

### Frontend

- **React.js** - User interface and component management
- **Chakra UI** - Modern, accessible component library
- **Socket.io-client** - Real-time communication
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing

### Backend

- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security

- **JWT (JSON Web Tokens)** - Secure authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Database

- **MongoDB Atlas** - Cloud database service
- **Mongoose ODM** - Object document modeling

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

### Local Development

1. **Clone the repository**

```bash
git clone https://github.com/mukendra-jaiswar/DriftChat.git
cd DriftChat
```

2. **Install dependencies**

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install --legacy-peer-deps
cd ..
```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/chat-app?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

4. **Start the development servers**

```bash
# Start backend server
npm run server

# In a new terminal, start frontend
cd frontend
npm start
```

5. **Access the application**

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🌐 Deployment

### Render Deployment

1. Fork or clone this repository
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Set environment variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your secret key
   - `NODE_ENV`: production
5. Deploy and get your live URL

### Environment Variables for Production

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chat-app?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
```

## 📁 Project Structure

```
DriftChat/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── generateToken.js
│   ├── controllers/
│   │   ├── chatControllers.js
│   │   ├── messageControllers.js
│   │   └── userControllers.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── chatModel.js
│   │   ├── messageModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── chatRoutes.js
│   │   ├── messageRoutes.js
│   │   └── userRoutes.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Authentication/
│   │   │   ├── miscellaneous/
│   │   │   └── userAvatar/
│   │   ├── Context/
│   │   ├── Pages/
│   │   └── config/
│   └── package.json
├── screenshots/
└── README.md
```

## 🔧 API Endpoints

### Authentication

- `POST /api/user` - Register a new user
- `POST /api/user/login` - User login
- `GET /api/user` - Get all users (protected)

### Chats

- `POST /api/chat` - Create or access chat
- `GET /api/chat` - Get user chats
- `PUT /api/chat/group` - Create group chat
- `PUT /api/chat/rename` - Rename group
- `PUT /api/chat/groupadd` - Add user to group
- `PUT /api/chat/groupremove` - Remove user from group

### Messages

- `POST /api/message` - Send a message
- `GET /api/message/:chatId` - Get chat messages

## 🎯 Key Features Implementation

### Real-Time Communication

- Socket.io for instant message delivery
- Typing indicators
- Online status tracking
- Real-time notifications

### Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- Protected API routes
- Input validation and sanitization

### User Experience

- Responsive design for mobile and desktop
- Modern UI with Chakra UI
- Intuitive navigation
- Real-time updates

## 🚀 Performance Optimizations

- Efficient database queries with Mongoose
- Optimized Socket.io connections
- React component optimization
- Lazy loading for better performance

## 🔒 Security Measures

- JWT token authentication
- Password hashing
- CORS configuration
- Input validation
- Error handling middleware

## 📱 Mobile Responsive

The application is fully responsive and works seamlessly on:

- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Mukendra Jaiswar**

- GitHub: [@mukendra-jaiswar](https://github.com/mukendra-jaiswar)
- LinkedIn: [Mukendra Jaiswar](https://linkedin.com/in/mukendra-jaiswar)

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the amazing component library
- [Socket.io](https://socket.io/) for real-time communication
- [MongoDB Atlas](https://www.mongodb.com/atlas) for cloud database
- [Render](https://render.com/) for hosting



⭐ **Star this repository if you found it helpful!**
