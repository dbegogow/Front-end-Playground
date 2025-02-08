import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h2>{{ topicName }}</h2> `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'OnPush strategy'
  topicName = 'Change Detection in Angular';

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
        this.topicName = 'OnPush strategy in Angular';
        console.log('Data Model has changed...');
        this.cdr.markForCheck();
    }, 3000);
  }
}
