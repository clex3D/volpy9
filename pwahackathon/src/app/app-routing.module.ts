import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ScreenComponent} from './screen/screen.component';
import {FlashvibrateComponent} from './flashvibrate/flashvibrate.component';
import {SongComponent} from './song/song.component';
import {PhotoComponent} from './photo/photo.component';
import {FonctionComponent} from './fonction/fonction.component';

const routes: Routes = [
  { path: 'screen', component: ScreenComponent },
  { path: 'fonction', component: FonctionComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'song', component: SongComponent },
  { path: 'flashvibrate', component: FlashvibrateComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
