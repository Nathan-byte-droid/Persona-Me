const express = require('express');
const router = express.Router();
const passport = require('passport');

const authController = require('../controllers/authController');
const profileController = require('../controllers/profileController');

// Auth routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.get('/auth/me', 
  passport.authenticate('jwt', { session: false }), 
  authController.getMe
);

// Profile routes
router.get('/profile',
  profileController.getProfiles
);
router.get('/profile/me',
  passport.authenticate('jwt', { session: false }),
  profileController.getMyProfile
);
router.post('/profile',
  passport.authenticate('jwt', { session: false }),
  profileController.createProfile
);
router.get('/profile/user/:userId',
  profileController.getProfile
);
router.put('/profile/personality',
  passport.authenticate('jwt', { session: false }),
  profileController.updatePersonality
);

module.exports = router;
