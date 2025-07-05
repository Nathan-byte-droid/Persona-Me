const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  level: {
    type: Number,
    min: 1,
    max: 5,
    default: 3
  }
});

const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  }
});

const EducationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  fieldOfStudy: {
    type: String,
    required: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  }
});

const SocialSchema = new mongoose.Schema({
  linkedin: {
    type: String
  },
  twitter: {
    type: String
  },
  github: {
    type: String
  },
  portfolio: {
    type: String
  }
});

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  headline: {
    type: String,
    trim: true,
    maxlength: [100, 'Headline cannot be more than 100 characters']
  },
  bio: {
    type: String,
    trim: true,
    maxlength: [500, 'Bio cannot be more than 500 characters']
  },
  location: {
    type: String,
    trim: true
  },
  skills: [SkillSchema],
  experience: [ExperienceSchema],
  education: [EducationSchema],
  social: SocialSchema,
  personality: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Personality'
  },
  visibility: {
    type: String,
    enum: ['public', 'private', 'connections'],
    default: 'public'
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Update lastUpdated field before saving
ProfileSchema.pre('save', function(next) {
  this.lastUpdated = Date.now();
  next();
});

module.exports = mongoose.model('Profile', ProfileSchema);
