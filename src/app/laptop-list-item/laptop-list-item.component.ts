import {Component, Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-laptop-list-item',
  standalone: true,
  imports: [],
  templateUrl: './laptop-list-item.component.html',
  styleUrl: './laptop-list-item.component.css'
})
export class LaptopListItemComponent implements OnInit{
  @Input() laptopItem!:LaptopListItem;
  constructor() {
  }

  ngOnInit(): void {}

}
export interface LaptopListItem{
  customerName:string,
  company: string,
  storage:string;
  Model:string;
  EMI?:boolean
}
