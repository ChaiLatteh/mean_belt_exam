let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let PatientSchema = new Schema({
  name: {type: String, required:true},
}, {timestamps: true});

mongoose.model('Patient', PatientSchema);
