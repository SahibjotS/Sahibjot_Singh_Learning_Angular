import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{CommonModule} from "@angular/common";
import {laptop} from "./Shared/Models/laptop";
import {LaptopListComponent} from "./laptop-list/laptop-list.component";
import{LaptopListItemComponent} from "./laptop-list-item/laptop-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, LaptopListComponent,LaptopListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sahib Laptops';

}
