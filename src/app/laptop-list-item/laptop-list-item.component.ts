import {Component, Input,OnInit} from '@angular/core';
import {laptop} from "../shared/laptop";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {}

@Component({
  selector: 'app-laptop-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './laptop-list-item.component.html',
  styleUrl: './laptop-list-item.component.css'
})
export class LaptopListItemComponent implements OnInit{

  laptops: laptop |undefined;
  laptopList: laptop[]=[];
  current Index=0;


  constructor {
    private route:ActivatedRoute,
  private
  }{}



  ngOnInit(){ const
  const id =this.route.snapshot.paramMap.get('id');
  if (id){
  this.l}
}
}
export interface LaptopListItem{
  customerName:string,
  company: string,
  storage:string;
  Model:string;
  EMI?:boolean
}
