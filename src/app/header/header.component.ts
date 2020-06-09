import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Section, Content, InnerContent } from '../models/section.model';
import { AppService } from '../service/app-service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { UserService } from '../service/user-service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { SectionNumber } from '../enum/enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() links: InnerContent[];
  @Output() content: Content;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private appService: AppService,
    public dialog: MatDialog,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.appService
      .getSection()
      .pipe(takeUntil(this.destroy$))
      .subscribe((sections: Section) => {
        if (sections) {
          this.content = sections.content[SectionNumber.header];
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

  public isTokenExist(): boolean {
    return this.userService.isTokenExist();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
