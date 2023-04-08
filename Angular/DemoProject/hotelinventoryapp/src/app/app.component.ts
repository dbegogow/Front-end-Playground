import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(LocalStorageToken) private localStorage: Storage,
    private initService: InitService) {
    console.log(initService.config);
  }

  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit');
    this.name.nativeElement.innerText = 'Hilton Hotel';

    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!:   ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
