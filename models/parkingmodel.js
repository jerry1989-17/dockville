const mongoose = require('mongoose')    

const parkingSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true, // this ensures that the field cannont be left empty
        trim: true // this removes any spcae or whitespace between characters

    },
    lastname:{
        type: String,
        required: true,
    },
    cartype:{
        type: String,
        enum: ['Truck', 'Taxi', 'Personal Car', 'Coaster', 'Bodaboda' ],
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    numberplate:{
        type: String,
        required: true,
        unique: true    // this only allows one value to be saved in the database
    },
    color:{
        type: String
    },
    arrivaltime:{
        type: String,
        required: true

    },
    departuretime:{
        type: String,
    },
    model: {
        type: String,
    },
    phone:{
        type: String,
        required: true,
        unique: true


    },
    date: {
        type: String,
        required: true
    },
    period:{
        type: String,
        required: true,
        enum: ['Day', 'Night', 'Less than 3 hours']
    },
    amount: {
        type: Number,
        required: true,
        enum: [1000, 2000, 5000, 4000, 3000]
    },
    nin:{
        type: String,
        required: true,
        unique: true

    },
    number:{
        type: Number,
        unique: true,
        required: true


    },
    tireclinic:{
        type: [String]
        
    },
    battery: {
        type: String
    },
    valves:{
        type: Number,
        
    },
    puncturefixing:{
        type: Number,
    },
    tirepressure:{
        type: Number,
    }

})

module.exports = mongoose.model('Parking', parkingSchema)