const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const heroSchema = new Schema({
    response: {
        type:String,
    },
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    powerstats: {
        type: Object,
        required: true,
    },
    biography: {
        type: Object,
        required: true,
    },
    appearance: {
        type: Object,
    },
    work: {
        type: Object,
        required: true,
    },
    connections: {
        type: Object,
        required: true,
    },
    image: {
        type: Object,
        required: true,
    }
}, {
    timestamps: true,
});

const Hero = mongoose.models['Hero'] || mongoose.model("Hero", heroSchema);

module.exports = Hero;
