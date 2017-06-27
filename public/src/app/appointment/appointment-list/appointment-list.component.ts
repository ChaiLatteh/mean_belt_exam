import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './../appointment.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointment_id:string;
  appointments:Array<any>;
  patient:any;

  constructor(
    private _appointmentService:AppointmentService,
    private _router:Router,
    private _route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
      this.appointment_id=param.appointment_id;
    })
    this.getAppointments()
    this.getCurrentPatient()
  }
  getCurrentPatient(){
    this._appointmentService.getCurrentPatient()
    .then((patient)=>{
      this.patient=patient
      this._router.navigate(['/'])
    })
    .catch((err)=> this._router.navigate(['/login']))
  }
  getAppointments(){
    this._appointmentService.getAppointments()
    .then((appointments)=>{
      this.appointments=appointments
    })
    .catch((err)=>console.log(err))
  }
  cancelAppointment(appointment){
    this._appointmentService.cancelAppointment(appointment)
    .then(()=>{
      this.getAppointments()
    })
    .catch((err)=>console.log(err))
  }



}
