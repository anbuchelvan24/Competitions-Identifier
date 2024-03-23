import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5173'
}));

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

const Notification = mongoose.model('Notification', notificationSchema, "21z104@psgitech.ac.in");

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
// Get all notifications with formatted createdAt field
app.get('/api/notifications', (req, res) => {
  Notification.find()
    .sort({ createdAt: -1 }) // Sort by most recent
    .then(notifications => {
      // Format createdAt field
      const formattedNotifications = notifications.map(notification => {
        const formattedDate = new Date(notification.createdAt).toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });
        return {
          ...notification.toJSON(),
          createdAt: formattedDate
        };
      });
      res.json(formattedNotifications);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
