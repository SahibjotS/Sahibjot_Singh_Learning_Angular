<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/modify-cat">Modify Cat</a>
</nav>
<router-outlet></router-outlet>
Ensure you have defined these routes in AppRoutingModule.





import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'goodKitty'
})
export class GoodKittyPipe implements PipeTransform {
transform(isGoodKitty: boolean): string {
return isGoodKitty ? 'This is a good kitty' : 'All cats are good cats';
}
}





import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'defaultPicture'
})
export class DefaultPicturePipe implements PipeTransform {
transform(pictureUrl: string | undefined): string {
return pictureUrl && pictureUrl.trim() ? pictureUrl : 'assets/DefaultPicture.png';
}
}



import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
selector: '[appHighlightGoodKitties]'
})
export class HighlightGoodKittiesDirective implements OnChanges {
@Input() isGoodKitty: boolean = false;
@Input() highlightColor: string = 'lightgreen';

constructor(private el: ElementRef) {}

ngOnChanges() {
this.el.nativeElement.style.backgroundColor = this.isGoodKitty ? this.highlightColor : '';
}
}



ng generate directive FlashBackground
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
selector: '[appFlashBackground]'
})
export class FlashBackgroundDirective {
private colors = ['red', 'blue', 'green', 'yellow', 'pink'];

constructor(private el: ElementRef) {}

@HostListener('mouseover') onMouseOver() {
this.el.nativeElement.style.backgroundColor = this.getRandomColor();
}

private getRandomColor(): string {
const index = Math.floor(Math.random() * this.colors.length);
return this.colors[index];
}
}




import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [ReactiveFormsModule],
})
export class AppModule {}





import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
selector: 'app-modify-cat',
templateUrl: './modify-cat.component.html',
})
export class ModifyCatComponent implements OnInit {
catForm = new FormGroup({
name: new FormControl(''),
isGoodKitty: new FormControl(false),
pictureUrl: new FormControl(''),
});

ngOnInit() {}

onSubmit() {
console.log(this.catForm.value);
}
}





<form [formGroup]="catForm" (ngSubmit)="onSubmit()">
  <label for="name">Name:</label>
  <input id="name" formControlName="name" />

<label for="isGoodKitty">Good Kitty:</label>
<input id="isGoodKitty" type="checkbox" formControlName="isGoodKitty" />

<label for="pictureUrl">Picture URL:</label>
<input id="pictureUrl" formControlName="pictureUrl" />

<button type="submit">Submit</button>
</form>



ng add @angular/material

<mat-card *ngFor="let cat of cats">
<mat-card-header>
<mat-card-title>{{ cat.name }}</mat-card-title>
<mat-card-subtitle>
{{ cat.isGoodKitty ? 'Good Kitty' : 'All Cats are Good' }}
</mat-card-subtitle>
</mat-card-header>
<img mat-card-image [src]="cat.pictureUrl || 'assets/DefaultPicture.png'" alt="{{ cat.name }}" />
<mat-card-actions>
<button mat-button color="primary" (click)="editCat(cat)">Edit</button>
<button mat-button color="warn" (click)="deleteCat(cat)">Delete</button>
</mat-card-actions>
</mat-card>




"styles": [
"src/styles.scss",
"node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
],


