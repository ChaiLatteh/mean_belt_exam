import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentNewComponent } from './appointment/appointment-new/appointment-new.component';

const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: AppointmentComponent},
  {path: 'new_appointment', component: AppointmentNewComponent},

]
export const routing = RouterModule.forRoot(APP_ROUTES);
