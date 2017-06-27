var mongoose = require('mongoose');
var strftime = require('strftime');
var sortBy = require('sort-by');

var Patient = mongoose.model('Patient');
var Appointment = mongoose.model('Appointment');

module.exports = {
  login: (req, res) => {
    Patient.findOne({name: req.body.name}, (err, patient) => {
      if(patient == null){
        let newPatient = new Patient(req.body);
        newPatient.save( (err, savedPatient) =>{
          if(err){
            console.log(err);
            return res.sendStatus(500);
          }
          else{
            req.session.patient = savedPatient;
            return res.json(savedPatient);
          }
        })
      }
      else{
        req.session.patient = patient;
        return res.json(patient);
      }
      console.log(req.session.patient);
    })
  },

  getCurrentPatient: (req, res) => {
    if(!req.session.patient){
      return res.status(401).send("No patient in session");
    }
    else{
      return res.json(req.session.patient);
    }
  },

  getAppointments:(req, res)=>{
    var today = strftime('%F', new Date);
    Appointment.find({date:{$gte:today}}).sort({date:1, time:1}).populate('_patient').exec((err, appointments)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Could not retrieve appointments list");
      }
      else{
        return res.json(appointments);
      }
    })
  },

  createAppointment: (req, res)=>{
    Appointment.find({date:req.body.date}, (err, appointments)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Something happened");
      }
      else if(appointments.length>=3){
        return res.status(500).send("Only maximum of 3 appointments can be scheduled per day.")
      }
      else if (req.body.date <= strftime('%F', new Date)){
        return res.status(500).send("You may not schedule appointment prior to today.")
      }
      else{
        let appointment = new Appointment(req.body);
        appointment._patient = req.session.patient._id;
        appointment.save((err, appointment)=>{
          if(err){
            console.log(err);
            return res.status(500).send("could not save appointment");
          }
          else{
            console.log("created a new appointment!")
            res.json(appointment);
          }
        })
      }
    })
  },

  cancelAppointment: (req, res)=>{
    Appointment.findOne({_id:req.params.appointment_id}, (err, appointment)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Could not find appointment");
      }
      else{
        appointment.remove();
        return res.json(appointment);
      }
    })
  },


  logout:(req, res)=>{
    req.session.destroy();
    res.redirect('/login');
  }

}
