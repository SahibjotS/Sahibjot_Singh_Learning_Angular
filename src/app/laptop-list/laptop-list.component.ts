import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {LaptopListItem, LaptopListItemComponent} from "../laptop-list-item/laptop-list-item.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-laptop-list',
  standalone: true,
  imports: [
    LaptopListItemComponent, CommonModule, RouterLink
  ],
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  laptopItem:LaptopListItem[]=[
    {customerName:"Krisha Panesar", company:"Asus",storage:"SSD",Model:"Zenbook",EMI:true},
  {customerName:"Shalini Khashyp", company:"Asus",storage:"SSD",Model:"Zenbook Pro 2",EMI:true},
  {customerName:"Kamaldeep  Singh", company:"HP",storage:"HDD",Model:"FHD business",EMI:false},
  {customerName:"Gursimrat Singh", company:"Acer",storage:"SSD",Model:"Aspire 5",EMI:true}
  ]

}
