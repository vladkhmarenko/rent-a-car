import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-center',
  templateUrl: './car-center.component.html',
  styleUrl: './car-center.component.css'
})
export class CarCenterComponent { 

  constructor(private router: Router) { }
  openList() {
    this.router.navigate(['/list']);
  }
}