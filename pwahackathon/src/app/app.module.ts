import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedService } from './shared.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { PhotoComponent } from './photo/photo.component';
import { FlashvibrateComponent } from './flashvibrate/flashvibrate.component';
import { SongComponent } from './song/song.component';
import { FonctionComponent } from './fonction/fonction.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { WindowRefService } from './window-ref.service';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    PhotoComponent,
    FlashvibrateComponent,
    SongComponent,
    FonctionComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    FormsModule

  ],
  providers: [SharedService, WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
