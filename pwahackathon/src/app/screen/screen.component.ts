import { Component, OnInit } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styles: []
})
export class ScreenComponent implements OnInit {
  info: string;
  constructor(updates: SwUpdate, private _sharedService: SharedService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.info = navigator.userAgent;
  }

}
