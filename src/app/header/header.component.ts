import { Component, OnInit, Output } from '@angular/core';
import { Section, Content, InnerContent } from '../models/section.model';
import { AppService } from '../service/app-service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { UserService } from '../service/user-service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() links: InnerContent[];
  @Output() content: Content;

  constructor(private appService: AppService, public dialog: MatDialog, private userService: UserService) {}
  ngOnInit(): void {
    this.appService.getSection().subscribe((sections: Section) => {
      if (sections) {
        this.content = sections.content[4];
        this.links = this.content.content;
      }
    });
  }

  onStartBtnClick(): void {
    this.dialog.open(ModalComponent, {
      height: '400px',
      width: '600px',
    });
  }



  
  public isTokenExist():boolean{
    return this.userService.isTokenExist()
  }
}
