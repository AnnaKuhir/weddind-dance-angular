import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { Content } from '../models/section.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() content: Content;

  constructor(public dialog: MatDialog) {}
  onEditBtnClick(): void {
    this.dialog.open(EditModalComponent, {
      height: '400px',
      width: '600px',
      data: this.content,
    });
  }

  ngOnInit(): void {}
}
