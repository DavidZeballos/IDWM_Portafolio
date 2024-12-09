import { Component } from '@angular/core';
import { VideoBackgroundComponent } from '../../components/video-background/video-background.component';

@Component({
  standalone: true,
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: [],
  imports: [VideoBackgroundComponent]
})
export class SobreMiComponent {}
