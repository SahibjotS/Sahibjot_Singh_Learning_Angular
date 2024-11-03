import { Injectable } from '@angular/core';
import { laptop } from "../shared/laptop";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private laptops: laptop[] = []; // Initialize as an empty array or populate it with data if needed

  constructor() { }

  // Fetch all laptops
  getLaptops(): Observable<laptop[]> {
    return of(this.laptops);
  }

  // Fetch a laptop by its ID
  getLaptopByID(laptopID: number): Observable<laptop | undefined> {
    const laptop = this.laptops.find(laptop => laptop.Id === laptopID);
    return of(laptop);
  }

  // Add a new laptop
  addLaptop(newLaptop: laptop): Observable<laptop[]> {
    this.laptops.push(newLaptop);
    return of(this.laptops);
  }

  // Update an existing laptop
  updateLaptop(updatedLaptop: laptop): Observable<laptop[]> {
    const index = this.laptops.findIndex(laptop => laptop.Id === updatedLaptop.Id);
    if (index !== -1) {
      this.laptops[index] = updatedLaptop;
    }
    return of(this.laptops);
  }
  deleteLaptop(laptopID: number): Observable<laptop[]> {
    this.laptops = this.laptops.filter(laptop => laptop.Id !== laptopID);
    return of(this.laptops);
  }

}
