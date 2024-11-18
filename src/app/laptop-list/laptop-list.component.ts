import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import{laptop} from "../Shared/Models/laptop";
import { LaptopListItemComponent } from '../laptop-list-item/laptop-list-item.component';
import{DataService} from "../services/data.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {LaptopPipe} from "../pipes/laptop.pipe";

@Component({
  selector: 'app-laptop-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgForOf,
    LaptopListItemComponent,
    NgOptimizedImage,
    LaptopPipe
  ],
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptopList: laptop[] = [];

  constructor(private laptopService: DataService, private router: Router) {}

  ngOnInit(): void {

    this.fetchLaptops();
  }

  fetchLaptops(): void {
    this.laptopService.getLaptops().subscribe({
      next: (data: laptop[]) => {
        this.laptopList = data;
        console.log("Laptops fetched successfully!", this.laptopList);
      },
      error: err => {
        console.error("Error fetching laptops", err);
      },
      complete: () => {
        console.log("Laptop data fetch complete!");
      }
    });
  }

  editLaptop(laptopId: number): void {
    this.router.navigate(['/laptops', laptopId]);
  }

  deleteLaptop(laptopId: number): void {
    if (confirm('Are you sure you want to delete this laptop?')) {
      this.laptopService.deleteLaptop(laptopId).subscribe({
        next: () => {
          // Reload the laptop list after deletion
          this.laptopList = this.laptopList.filter(laptop => laptop.Id !== laptopId);
          console.log(`Laptop with ID ${laptopId} deleted.`);
        },
        error: err => {
          console.error("Error deleting laptop", err);
        }
      });
    }
  }

  protected readonly error = error;
}
