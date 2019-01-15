import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styles: []
})
export class SongComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    function getUserMedia(options, successCallback, failureCallback) {
      const api = navigator.getUserMedia;
      if (api) {
        return api.bind(navigator)(options, successCallback, failureCallback);
      }
    }

    function getStream (type) {
      if (!navigator.getUserMedia) {
        alert('User Media API not supported.');
        return;
      }
      const constraints = {};
      constraints[type] = true;
      getUserMedia(constraints, function (stream) {
        const mediaControl = document.querySelector(type);
        const prog = new User();
        prog.test = mediaControl;
      }, function (err) {
        alert('Error: ' + err);
      });
    }

  }

}
