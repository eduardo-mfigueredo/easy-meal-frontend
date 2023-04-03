import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserverService} from "./services/breakpoint-observer/breakpoint-observer.service";
import {Subscription} from "rxjs";
import {breakpoint} from "./services/breakpoints";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  deviceType!: breakpoint | undefined;

  constructor(
    private readonly breakpointObserverService: BreakpointObserverService
  ) {
    this.breakpointObserverService.init();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.breakpointObserverService.breakpointSize$.subscribe(device => {
        this.deviceType = device;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
