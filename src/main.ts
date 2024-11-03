import { provideRouter, Routes } from '@angular/router';
import { LaptopListComponent } from './app/laptop-list/laptop-list.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/laptops', pathMatch: 'full' },
  { path: 'laptops', component: LaptopListComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders = [
  provideRouter(routes)
];
