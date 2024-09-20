import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {laptop} from './shared/laptop';
import {JsonPipe , NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet,NgForOf,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sahib Laptops';

  laptop1: laptop={customerName:"Krisha Panesar", company:"Asus",storage:"SSD",Model:"Zenbook",EMI:true};
  laptop2: laptop={customerName:"Shalini Khashyp", company:"Asus",storage:"SSD",Model:"Zenbook Pro 2",EMI:true};
  laptop3: laptop={customerName:"Kamaldeep  Singh", company:"HP",storage:"HDD",Model:"FHD business",EMI:false};
  laptop4: laptop={customerName:"Gursimrat Singh", company:"Acer",storage:"SSD",Model:"Aspire 5",EMI:true};
  laptop5: laptop={customerName:"Japkaran Singh", company:"Dell",storage:"HDD",Model:"Inspiron 15",EMI:false};
  laptop6: laptop={customerName:"Fatti", company:"Lenovo",storage:"SSD",Model:"IdeaPad 5",EMI:true};

ArrayList: laptop[] =
  [this.laptop1,this.laptop2,this.laptop3,this.laptop4,this.laptop5,this.laptop6]



}
