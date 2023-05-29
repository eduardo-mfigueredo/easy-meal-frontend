import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {FirestoreService} from "../../services/firestore/firestore.service";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  public dDay! : Date;
  milliSecondsInASecond: number = 1000;
  hoursInADay: number = 24;
  minutesInAnHour: number = 60;
  SecondsInAMinute: number = 60;

  public timeDifference!: number
  public secondsToDday!: number;
  public minutesToDday!: number;
  public hoursToDday!: number;
  public daysToDday!: number;


  constructor(private firestore: FirestoreService) {
  }

  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  ngOnInit() {
    this.firestore.getCutoff().subscribe((response: any) => {
      this.dDay = new Date(response[0].cutoff);
    });

    this.subscription = interval(1000)
      .subscribe(x => {
        this.getTimeDifference();
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
