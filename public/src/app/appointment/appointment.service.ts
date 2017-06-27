import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class AppointmentService {

  constructor(private _http: Http) { }
  getCurrentPatient(){
    return this._http.get('/api/current')
    .map((response:Response)=>response.json())
    .toPromise()
  }
  createAppointment(appointment){
    return this._http.post('/api/appointment/create', appointment)
    .map((response:Response)=>response.json())
    .toPromise()
  }
  getAppointments(){
    return this._http.get('/api/appointments')
    .map((response:Response)=>response.json())
    .toPromise()
  }
  cancelAppointment(appointment){
    return this._http.post('/api/appointment/cancel/' + appointment._id, appointment)
    .map((response:Response)=>response.json())
    .toPromise()
  }

}
