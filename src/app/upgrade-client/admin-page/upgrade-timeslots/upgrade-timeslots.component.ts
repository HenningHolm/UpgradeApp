import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-upgrade-timeslots',
  templateUrl: './upgrade-timeslots.component.html',
  styleUrls: ['./upgrade-timeslots.component.css']
})
export class UpgradeTimeslotsComponent implements OnInit, OnChanges { //


  appointmentDays: any;
  @Input() upgradeId: string = "";

  constructor(private appointmentService: AppointmentService) { }


  
  ngOnInit(): void {
    // this.appointmentService.getAppointmentDays()
    //   .subscribe(result => {
    //     this.appointmentDays = result
    //   });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.upgradeId.currentValue) {
      if (this.upgradeId) {
        this.appointmentService.getAppointmentDaysByUpgradeId(this.upgradeId)
          .subscribe(result => {
            this.appointmentDays = result
          });
      }

    }
  }

}
