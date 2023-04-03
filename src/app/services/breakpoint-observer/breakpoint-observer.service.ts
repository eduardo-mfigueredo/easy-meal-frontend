import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {breakpoint} from "../breakpoints";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {isPlatformBrowser} from "@angular/common";
import {DeviceDetectorService} from "ngx-device-detector";

@Injectable({
  providedIn: 'root'
})
export class BreakpointObserverService {

  private breakpoint$ = new BehaviorSubject<breakpoint | undefined>(undefined);
  readonly breakpointSize$ = this.breakpoint$.asObservable();
  subscription?: Subscription;

  constructor(
    private readonly _breakpointObserver: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId: any,
    private deviceService: DeviceDetectorService
  ) {
  }

  init(): void {
    if(!isPlatformBrowser(this.platformId)) {
      if(this.deviceService.isMobile()) {
        this.breakpoint$.next('desktop');
      } else if(this.deviceService.isTablet()) {
        this.breakpoint$.next('mobile');
      } else {
        this.breakpoint$.next('desktop');
        console.log('is isDesktop --->', this.deviceService.isDesktop())
      }
    } else {
      this.subscription = this._breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ]).subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.setObservable('mobile');
        }
        if (state.breakpoints[Breakpoints.Small] || state.breakpoints[Breakpoints.Medium]) {
          this.setObservable('tablet');
        }
        if (state.breakpoints[Breakpoints.Large] || state.breakpoints[Breakpoints.XLarge]) {
          this.setObservable('desktop');
        }
      });
    }
  }

  setObservable(device: breakpoint): void {
    this.breakpoint$.next(device);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
