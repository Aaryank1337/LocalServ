const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'service_provider'],
        required: true,
    },
});

// Method to hash password before saving
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next(); // Only hash if password is modified or new
    this.password = await bcrypt.hash(this.password, 10); // Hash the password
    next();
});

// Method to compare passwords
UserSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password); // Compare given password with hashed password
};

module.exports = mongoose.model('User', UserSchema);