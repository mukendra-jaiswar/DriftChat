# DriftChat Deployment Guide

## Option 1: Render (Recommended)

### Prerequisites

1. GitHub account
2. MongoDB Atlas account (free)

### Step 1: MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Create a database user
5. Get your connection string

### Step 2: GitHub Repository

1. Create a new repository on GitHub
2. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/driftchat.git
git push -u origin main
```

### Step 3: Deploy on Render

1. Go to [Render](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name:** driftchat
   - **Environment:** Node
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free

### Step 4: Environment Variables

In Render dashboard → Environment → Add:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chat-app?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
```

### Step 5: Update Frontend

After deployment, update the ENDPOINT in `frontend/src/components/SingleChat.js`:

```javascript
const ENDPOINT = "https://your-app-name.onrender.com";
```

## Option 2: Heroku (Alternative)

### Step 1: Install Heroku CLI

```bash
npm install -g heroku
```

### Step 2: Login and Deploy

```bash
heroku login
heroku create your-app-name
git push heroku main
```

### Step 3: Set Environment Variables

```bash
heroku config:set MONGO_URI="your-mongodb-connection-string"
heroku config:set JWT_SECRET="your-jwt-secret"
heroku config:set NODE_ENV="production"
```

## Option 3: Vercel (Frontend Only)

### Step 1: Deploy Frontend

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure build settings:
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

### Step 2: Environment Variables

Add in Vercel dashboard:

```
REACT_APP_API_URL=https://your-backend-url.com
```

## Important Notes

1. **MongoDB Atlas:** Use the free tier (512MB)
2. **Environment Variables:** Never commit secrets to GitHub
3. **CORS:** Backend is configured to accept requests from any origin
4. **Build Process:** The build script handles both frontend and backend
5. **Domain:** Your app will be available at `https://your-app-name.onrender.com`

## Troubleshooting

1. **Build Fails:** Check if all dependencies are in package.json
2. **Database Connection:** Verify MongoDB Atlas connection string
3. **CORS Issues:** Check if backend is properly configured
4. **Socket.io Issues:** Ensure WebSocket connections are allowed

## Cost

- **Render:** Free tier available
- **MongoDB Atlas:** Free tier (512MB)
- **Total Cost:** $0/month for basic usage
