import { Pipe, PipeTransform } from '@angular/core';
import {laptop} from "../Shared/Models/laptop";

@Pipe({
  name: 'laptop',
  standalone: true
})
export class LaptopPipe implements PipeTransform {

  transform(Laptop:laptop): string {
    return`${Laptop.Model} by ${Laptop.company}`;
  }

}
