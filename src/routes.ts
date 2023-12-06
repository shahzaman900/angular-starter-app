import { Routes } from '@angular/router'
import { HomeComponent } from './app/home/home.component';
import { HousingLocationDetailsComponent } from './app/housing-location-details/housing-location-details.component';

const routeConfig: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    title: 'Page Details',
    component: HousingLocationDetailsComponent
  },
  // {
  //   path: 'details',
  //   title: 'Page Details',
  //   component: HousingLocationDetailsComponent
  // }
]

export default routeConfig;