import { Routes } from '@angular/router'
import { HomeComponent } from './app/home/home.component';

const routeConfig: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent
  }
]

export default routeConfig;