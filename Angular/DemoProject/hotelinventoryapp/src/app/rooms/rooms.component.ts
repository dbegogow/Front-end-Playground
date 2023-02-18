import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  // @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
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
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://www.theghotel.ie/wp-content/uploads/2020/09/Deluxe-Room.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
