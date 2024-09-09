import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cars } from '../mock-car-list';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  cars = Cars;

  constructor(private router: Router) { }

  selectCar(id: number) {
    this.router.navigate(['/details', id]);
  }
}