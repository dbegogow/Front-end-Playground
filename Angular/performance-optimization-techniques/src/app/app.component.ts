import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ChannelComponent } from './channel/channel.component';
import { AsyncPipe } from '@angular/common';
import { interval } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ topicName }}</h2>
    <button (click)="changeTopic()">Change Topic</button>
    <button (click)="changeChannel()">Change Channel</button>
    <app-channel [name]="name"></app-channel>
    <h2>{{ counter$ | async }}</h2>
    <button routerLink="/">Home</button>
    <button routerLink="/dashboard">Dashboard</button>
    <button routerLink="/content">Content</button>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ChannelComponent, AsyncPipe, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'OnPush strategy';
  topicName = 'Change Detection in Angular';

  counter$ = interval(1000);

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
    this.name = 'Angular';
  }
}
