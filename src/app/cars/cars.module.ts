import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarCenterComponent } from './car-center/car-center.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {
    path: '',
    component: CarCenterComponent,
    children: [
      { path: '', component: CarListComponent },
      { path: 'details/:id', component: CarDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    CarCenterComponent,
    CarListComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CarsModule { }