import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BreakpointObserverService} from "./services/breakpoint-observer/breakpoint-observer.service";
import {Subscription} from "rxjs";
import {breakpoint} from "./services/breakpoint-observer/breakpoints";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
