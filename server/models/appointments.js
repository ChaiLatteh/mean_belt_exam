let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AppointmentSchema = new Schema({
  date: {type: Date, required:true},
  time: {type: String, required: true},
  complain: {type: String, required: true},
  _patient: {type: Schema.Types.ObjectId, ref: 'Patient'},
}, {timestamps: true});

mongoose.model('Appointment', AppointmentSchema);
