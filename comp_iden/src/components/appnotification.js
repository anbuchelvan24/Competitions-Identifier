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
  title: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
  read: {type: Boolean, default: false}
});

const Notification = mongoose.model('Notification', notificationSchema, "test");

// Save a new notification
app.post('/api/notifications', (req, res) => {
  const newNotification = new Notification({
    title: req.body.title,
    message: req.body.message,
    createdAt: req.body.createdAt
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
        const formattedDate = notification.createdAt.toLocaleString('en-US', {
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

app.get('/api/notificationCount', async (req, res) => {
  const count = await Notification.countDocuments({read: false}).exec()
  res.json(count)
})

app.post('/api/updateNotification', async(req, res) => {
  const notif = await Notification.findById(req.body._id);
  notif.read = true
  await Notification.findByIdAndUpdate(req.body._id, notif)
  res.redirect('/api/notificationCount')
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
