var controller = require('../controllers/controller');

module.exports = app => {
  app.post('/api/login', controller.login);
  app.get('/api/current', controller.getCurrentPatient)
  app.get('/api/appointments', controller.getAppointments);
  app.post('/api/appointment/create', controller.createAppointment);
  app.post('/api/appointment/cancel/:appointment_id', controller.cancelAppointment);
  app.get('/logout', controller.logout);
}
