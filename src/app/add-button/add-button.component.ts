import { Component, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  public showOptions = false;
  private alreadyFired = false;

  constructor(
    private elementRef: ElementRef,
    private dialog: MatDialog
  ) {}

  public toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

  public openProductForm(): void {
    this.dialog.open(ProductComponent, {
      width: '400px', // Defina o tamanho da modal conforme necessário
    });
  }

  public openPersonForm(): void {
    this.dialog.open(PersonComponent, {
      width: '400px', // Defina o tamanho da modal conforme necessário
    });
  }
  
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: any): void {
    if(this.alreadyFired){
      this.alreadyFired = false;
      return;
    }

    this.alreadyFired = true;

    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.showOptions = false;
    }
  }
}
