import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, fromEvent, merge, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-check-network-status',
  templateUrl: './check-network-status.component.html',
  styleUrls: ['./check-network-status.component.scss'],
})
export class CheckNetworkStatusComponent implements OnInit, OnDestroy {
  
  networkStatus: any;
  networkStatus$: Subscription = Subscription.EMPTY;

  constructor() {}

  ngOnInit(): void {
    this.checkNetworkStatus();
  }

  //  Network Status

  ngOnDestroy(): void {
    this.networkStatus$.unsubscribe();
  }

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine))
      .subscribe((status) => {
        console.log('status', status);
        this.networkStatus = status;
      });
  }
}
