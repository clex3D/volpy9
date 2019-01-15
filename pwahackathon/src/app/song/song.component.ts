import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styles: []
})
export class SongComponent implements OnInit {
  @ViewChild('audio') audio;

  constructor() { }
  getUserMedia(options, successCallback, failureCallback) {
      const api = navigator.getUserMedia;
      if (api) {
        return api.bind(navigator)(options, successCallback, failureCallback);
      }
    }
  getStream (type) {
      if (!navigator.getUserMedia) {
        alert('User Media API not supported.');
        return;
      }
      const constraints = {};
      constraints[type] = true;
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        this.audio.nativeElement.srcObject = stream;
        // this.videosource = this._windowref.nativeWindow.URL
        console.log('tot', this.audio);
      }, function (err) {
        alert('Error: ' + err);
      });
    }
  ngOnInit() {
  }
}
