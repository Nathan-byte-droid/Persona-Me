const Profile = require('../models/Profile');
const Personality = require('../models/Personality');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get current user's profile
// @route   GET /api/profile/me
// @access  Private
exports.getMyProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id })
    .populate('personality');

  if (!profile) {
    return next(new ErrorResponse('No profile found for this user', 404));
  }

  res.status(200).json({
    success: true,
    data: profile
  });
});

// @desc    Create or update user profile
// @route   POST /api/profile
// @access  Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const {
    headline,
    bio,
    location,
    skills,
    experience,
    education,
    social,
    visibility
  } = req.body;

  // Build profile object
  const profileFields = {
    user: req.user.id,
    headline,
    bio,
    location,
    skills,
    experience,
    education,
    social,
    visibility
  };

  let profile = await Profile.findOne({ user: req.user.id });

  if (profile) {
    // Update
    profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      data: profile
    });
  }

  // Create
  profile = new Profile(profileFields);
  await profile.save();

  res.status(201).json({
    success: true,
    data: profile
  });
});

// @desc    Get all profiles
// @route   GET /api/profile
// @access  Public
exports.getProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find({ visibility: 'public' })
    .populate('user', ['firstName', 'lastName', 'email'])
    .populate('personality');

  res.status(200).json({
    success: true,
    count: profiles.length,
    data: profiles
  });
});

// @desc    Get profile by user ID
// @route   GET /api/profile/user/:userId
// @access  Public
exports.getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.params.userId })
    .populate('user', ['firstName', 'lastName', 'email'])
    .populate('personality');

  if (!profile) {
    return next(new ErrorResponse('Profile not found', 404));
  }

  res.status(200).json({
    success: true,
    data: profile
  });
});

// @desc    Update personality assessment
// @route   PUT /api/profile/personality
// @access  Private
exports.updatePersonality = asyncHandler(async (req, res, next) => {
  const { traits, workPreferences } = req.body;

  let personality = await Personality.findOne({ user: req.user.id });

  if (personality) {
    // Update existing personality
    personality.traits = traits;
    personality.workPreferences = workPreferences;
  } else {
    // Create new personality
    personality = new Personality({
      user: req.user.id,
      traits,
      workPreferences
    });
  }

  await personality.save();

  // Update profile reference
  await Profile.findOneAndUpdate(
    { user: req.user.id },
    { personality: personality._id }
  );

  res.status(200).json({
    success: true,
    data: personality
  });
});
