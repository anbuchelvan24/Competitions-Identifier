// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/popup-messages', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Schema for notifications
const notificationSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Notification = mongoose.model('Notification', notificationSchema);

// Save a new notification
app.post('/api/notifications', (req, res) => {
  const newNotification = new Notification({
    message: req.body.message
  });

  newNotification.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ success: false, error: err.message }));
});

// Get all notifications
app.get('/api/notifications', (req, res) => {
  Notification.find()
    .sort({ createdAt: -1 }) // Sort by most recent
    .then(notifications => res.json(notifications))
    .catch(err => res.status(500).json({ error: err.message }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
