import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingUpgradeComponent } from './components/pages/booking-calender/booking-upgrade/booking-upgrade.component';
import { SetupFormComponent } from './components/pages/setup-calender/setup-form/setup-form.component';
import { UpgradeMainComponent } from './upgrade-client/admin-page/upgrade-main/upgrade-main.component';

const routes: Routes = [
  {path: 'old', component: BookingUpgradeComponent},
  {path: 'setupcalender', component: SetupFormComponent },
  {path: '', component: UpgradeMainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
