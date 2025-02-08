import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ChannelComponent } from './channel/channel.component';

@Component({
  selector: 'app-root',
  template: `
   <h2>{{ topicName }}</h2>
   <button (click)="changeTopic()">Change Topic</button>
   <button (click)="changeChannel()">Change Channel</button>
   <app-channel [name]="name"></app-channel>
    `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ChannelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'OnPush strategy'
  topicName = 'Change Detection in Angular';

  // constructor(private cdr: ChangeDetectorRef) {
  //   setTimeout(() => {
  //       this.topicName = 'OnPush strategy in Angular';
  //       console.log('Data Model has changed...');
  //       this.cdr.markForCheck();
  //   }, 3000);
  // }

  changeTopic() {
    this.topicName = 'OnPush strategy in Angular';
  }

  changeChannel() {
    this.name = 'Angular'
  }
}
