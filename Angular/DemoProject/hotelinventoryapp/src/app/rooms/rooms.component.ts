import { HttpEventType } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Observable, Subject, Subscription, catchError, of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });

  // @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  totalBytes = 0;

  subscription !: Subscription;

  error$: Subject<string> = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      console.log(err);
      this.error$.next(err.message);
      return of([])
    })
  );

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Request success!');
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes += event.loaded;
          break;
        case HttpEventType.Response:
          console.log(event.body);
          break;
        default:
          break;
      }
    });

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });
    this.stream.subscribe((data) => console.log(data));
    // this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;
    // });
  }

  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngAfterViewInit() {
    this.headerChildrenComponent.last.title = 'Last Title';
  }

  ngAfterViewChecked() {
    this.headerComponent.title = 'Rooms View';
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://www.theghotel.ie/wp-content/uploads/2020/09/Deluxe-Room.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    };

    // this.roomList.push(room);
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://www.theghotel.ie/wp-content/uploads/2020/09/Deluxe-Room.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    };

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}