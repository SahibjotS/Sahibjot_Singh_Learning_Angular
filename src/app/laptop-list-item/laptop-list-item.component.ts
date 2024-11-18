import {Component, Input,OnInit} from '@angular/core';
import {laptop} from "../Shared/Models/laptop";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {LaptopListComponent} from "../laptop-list/laptop-list.component";


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
  currentIndex=0;


  constructor (
    private route:ActivatedRoute,

  ){}



  ngOnInit():void{
  const id =this.route.snapshot.paramMap.get('id');
  if (id){
  }
}

  protected readonly LaptopListComponent = LaptopListComponent;

  goBackward() {

  }

  goForwad() {

  }

  goBack() {

  }
}

