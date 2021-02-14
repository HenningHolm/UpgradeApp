import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupFormComponent } from './upgrade-client/admin-page/setup-new/setup-form/setup-form.component';
import { UpgradeMainComponent } from './upgrade-client/admin-page/main/upgrade-main/upgrade-main.component';

const routes: Routes = [
  {path: 'setupcalender', component: SetupFormComponent },
  {path: '', component: UpgradeMainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
