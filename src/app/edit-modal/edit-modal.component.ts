import { Component, OnInit, Input, Inject } from '@angular/core';
import { Content } from '../models/section.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../service/app-service';
import { ModalComponent } from '../modal/modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Content,
    private appService: AppService,
    private dialigRef:MatDialogRef<ModalComponent>,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      logotype: new FormControl(
        this.data.meta.title,
        Validators.compose([Validators.required])
      )
    });
    this.data.content.forEach(link => {
      this.form.addControl(link._id, new FormControl(
        link.title, Validators.compose([Validators.required])
      ))
    });
    this.form.addControl('button',new FormControl(
      this.data.action.title, Validators.compose([Validators.required])
    ))
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  save(): void {
    this.data.meta.title = this.form.controls.logotype.value;
    this.data.action.title = this.form.controls.button.value;
    this.data.content.forEach(link => {
      link.title = this.form.get(link._id).value;
    })
    this.appService.updataSection(this.data).subscribe((result) => {
      this.dialigRef.close();
      this.showSuccess();
    });
  }
}
