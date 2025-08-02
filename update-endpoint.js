// Script to update the frontend endpoint after deployment
// Run this after you get your Render URL

const fs = require('fs');
const path = require('path');

// Replace this with your actual Render URL after deployment
const RENDER_URL = 'https://driftchat-1.onrender.com'; // Your actual Render URL

const filePath = path.join(__dirname, 'frontend', 'src', 'components', 'SingleChat.js');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Update the ENDPOINT line
  const updatedData = data.replace(
    /const ENDPOINT = process\.env\.REACT_APP_API_URL \|\| "http:\/\/localhost:5000";/,
    `const ENDPOINT = "${RENDER_URL}";`
  );

  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('✅ Frontend endpoint updated successfully!');
    console.log(`🌐 Your app will be available at: ${RENDER_URL}`);
  });
}); 