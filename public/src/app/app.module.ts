import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentService } from './appointment/appointment.service';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AppointmentNewComponent } from './appointment/appointment-new/appointment-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentComponent,
    AppointmentListComponent,
    AppointmentNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [LoginService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
