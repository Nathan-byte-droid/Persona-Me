const mongoose = require('mongoose');

const TraitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: [
      'Openness', 'Conscientiousness', 'Extraversion', 
      'Agreeableness', 'Neuroticism', 'Creativity',
      'Adaptability', 'Collaboration', 'Leadership',
      'Communication', 'Problem Solving', 'Attention to Detail'
    ]
  },
  value: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  }
});

const WorkPreferenceSchema = new mongoose.Schema({
  environment: {
    type: String,
    enum: ['office', 'remote', 'hybrid'],
    required: true
  },
  schedule: {
    type: String,
    enum: ['fixed', 'flexible', 'results-only'],
    required: true
  },
  communication: {
    type: String,
    enum: ['async', 'realtime', 'mixed'],
    required: true
  }
});

const PersonalitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  traits: [TraitSchema],
  workPreferences: WorkPreferenceSchema,
  assessmentDate: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Update lastUpdated field before saving
PersonalitySchema.pre('save', function(next) {
  this.lastUpdated = Date.now();
  next();
});

module.exports = mongoose.model('Personality', PersonalitySchema);
