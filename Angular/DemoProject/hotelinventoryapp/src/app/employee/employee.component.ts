import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';

  constructor(private roomsService: RoomsService) { }

  ngOnInit() {
  }
}
