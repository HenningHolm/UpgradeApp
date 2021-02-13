import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeDayComponent } from './components/pages/booking-calender/upgrade-day/upgrade-day.component';
import { UpgradeCalenderComponent } from './components/pages/booking-calender/upgrade-calender/upgrade-calender.component';
import { BookingUpgradeComponent } from './components/pages/booking-calender/booking-upgrade/booking-upgrade.component';
import { SetTimeComponent } from './components/pages/setup-calender/set-time/set-time.component';
import { SetupFormComponent } from './components/pages/setup-calender/setup-form/setup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UpgradeInviterComponent } from './upgrade-client/admin-page/upgrade-inviter/upgrade-inviter.component';
import { UpgradeMainComponent } from './upgrade-client/admin-page/upgrade-main/upgrade-main.component';
import { UpgradeTimeslotsComponent } from './upgrade-client/admin-page/upgrade-timeslots/upgrade-timeslots.component';
import { TimeslotsDayComponent } from './upgrade-client/admin-page/components/timeslots-day/timeslots-day.component';


@NgModule({
  declarations: [
    AppComponent,
    UpgradeDayComponent,
    UpgradeCalenderComponent,
    BookingUpgradeComponent,
    SetTimeComponent,
    SetupFormComponent,
    UpgradeInviterComponent,
    UpgradeMainComponent,
    UpgradeTimeslotsComponent,
    TimeslotsDayComponent,
 ],

    
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
