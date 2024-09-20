import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {laptop} from './shared/model/laptop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My name is Sahibjot Singh';
  age: number = 23;

}
