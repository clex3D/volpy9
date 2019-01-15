import {Component, OnInit, ViewChild} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {SharedService} from '../shared.service';
import { WindowRefService, ICustomWindow } from '../window-ref.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styles: []
})
export class PhotoComponent implements OnInit {
  // val;
  private _window: ICustomWindow;
  private loginInput: string;
  @ViewChild('video') video;
  private videosource: any;

  constructor(updates: SwUpdate, private _sharedService: SharedService, private _windowref: WindowRefService) {
    this._window = _windowref.nativeWindow;
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  show() {
    console.log(this.video);
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }).then((stream) => {
      console.log(stream);
      // this.video.src = this._windowref.URL.createObjectURL(stream);
      this.video.srcObject = stream;
      // this.videosource = this._windowref.nativeWindow.URL
      // console.log(this.video);
      // this.video.play();
    });
        // video.src = window.URL.createObjectURL(stream);
        // this.video.srcObject = stream;
        // this.video.play();
      // });
    }

  ngOnInit() {
    this.show();
  }
}
