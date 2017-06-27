import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-new',
  templateUrl: './appointment-new.component.html',
  styleUrls: ['./appointment-new.component.css']
})
export class AppointmentNewComponent implements OnInit {

  today: Date = new Date()
  appointments:Array<any>;

  constructor(
    private _appointmentService:AppointmentService,
    private _router:Router,
  ) { }

  ngOnInit() {
  }

  createAppointment(formData){
    this._appointmentService.createAppointment(formData.value)
    .then((appointment)=>{
      console.log(appointment)
      this._router.navigate(['/'])
    })
    .catch((err)=>console.log(err))
  }


}
