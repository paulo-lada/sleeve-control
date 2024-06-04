import { Component, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {
  @Input() public task : any = {};
  @Output() deleteTaskEvent = new EventEmitter<any>();

  public isEditing = false;
  public editedTitle = '';
  public editedDescription: string[] = [];
  private alreadyFired = false;

  constructor(
    private dialog: MatDialog, 
    private elementRef: ElementRef
  ){}

  public deleteTask(): void { 
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        this.deleteTaskEvent.emit(this.task);
      }
    });
  }

  public enableEdit(click : any): void {
    this.isEditing = true;
    this.editedTitle = this.task.Title;
    this.editedDescription = this.task.Description;
    
    setTimeout(() => {
      if(click == 1){
        const titleInput = document.getElementById('titleInput') as HTMLInputElement;
        titleInput?.select();  
        return;
      }      

      const descriptionInput = document.getElementById('descriptionInput') as HTMLInputElement;
      descriptionInput?.select();
      
    }, 100);
  }

  public saveEdit(): void {
    if(!this.isEditing){
      return;
    }

    this.task.Title = this.editedTitle;
    this.task.Description = this.editedDescription;
    this.isEditing = false;
  }

  nl2br(text: string): string {
    if(text == null) return text;
    
    return text.replace(/\n/g, '<br>');
  }
  
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: any): void {
    if(this.alreadyFired){
      this.alreadyFired = false;
      return;
    }

    this.alreadyFired = true;

    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isEditing) {
      this.saveEdit();
    }
  }
}