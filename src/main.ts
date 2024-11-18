import { provideRouter, Routes } from '@angular/router';
import { LaptopListComponent } from './app/laptop-list/laptop-list.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './app/in-memory-data.service';

const routes: Routes = [
  { path: '', redirectTo: '/laptops', pathMatch: 'full' },
  { path: 'laptops', component: LaptopListComponent },
  {
    path: 'laptops/:Id',
    loadComponent: () =>
      import('./app/laptop-list-item/laptop-list-item.component').then(
        (m) => m.LaptopListItemComponent
      ),
  },
  {
    path: 'modify-laptop',
    loadComponent: () =>
      import('./app/modify-laptop/modify-laptop.component').then(
        (m) => m.ModifyLaptopComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        delay: 1000,
      })
    ),
  ],
}).catch((err) => console.error(err));
