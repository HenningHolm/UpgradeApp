import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetTimeComponent } from './upgrade-client/admin-page/setup-new/set-time/set-time.component';
import { SetupFormComponent } from './upgrade-client/admin-page/setup-new/setup-form/setup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UpgradeInviterComponent } from './upgrade-client/admin-page/add-clients/upgrade-inviter/upgrade-inviter.component';
import { UpgradeMainComponent } from './upgrade-client/admin-page/main/upgrade-main/upgrade-main.component';
import { TimeslotsDayComponent } from './upgrade-client/admin-page/timeslots/timeslots-day/timeslots-day.component';
import { BookingMainComponent } from './upgrade-client/customer-page/booking-main/booking-main.component';
import { BookingTimeslotsComponent } from './upgrade-client/customer-page/booking-timeslots/booking-timeslots.component';
import { BookingDaysComponent } from './upgrade-client/customer-page/booking-days/booking-days.component';
import { TimeslotsContainerComponent } from './upgrade-client/admin-page/timeslots/timeslots-container/timeslots-container.component';


@NgModule({
  declarations: [
    AppComponent,
    SetTimeComponent,
    SetupFormComponent,
    UpgradeInviterComponent,
    UpgradeMainComponent,
    TimeslotsDayComponent,
    BookingMainComponent,
    BookingTimeslotsComponent,
    BookingDaysComponent,
    TimeslotsContainerComponent,
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
