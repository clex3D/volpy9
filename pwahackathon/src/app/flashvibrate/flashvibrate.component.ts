import { Component, OnInit } from '@angular/core';
import { WindowRefService, ICustomWindow } from '../window-ref.service';

@Component({
  selector: 'app-flashvibrate',
  templateUrl: './flashvibrate.component.html',
  styles: []
})
export class FlashvibrateComponent implements OnInit {
  constructor() { }

  vibrateSimple() {
    navigator.vibrate(200);
  }

  ngOnInit() {
  }

}
