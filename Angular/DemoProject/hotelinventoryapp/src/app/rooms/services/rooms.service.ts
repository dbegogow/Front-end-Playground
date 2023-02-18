import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://www.theghotel.ie/wp-content/uploads/2020/09/Deluxe-Room.jpg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://www.theghotel.ie/wp-content/uploads/2020/09/Deluxe-Room.jpg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 3.45654
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://www.theghotel.ie/wp-content/uploads/2020/09/Deluxe-Room.jpg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 2.6
    }
  ];

  constructor() {
    console.log('Rooms Service Initialize');
  }

  getRooms() {
    return this.roomList;
  }
}
