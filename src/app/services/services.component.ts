import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Section, Content, InnerContent } from '../models/section.model';
import { AppService } from '../service/app-service';
import { SectionNumber } from '../enum/enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, OnDestroy {
  @Output() items: InnerContent[];
  public content: Content;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getSection()
      .pipe(takeUntil(this.destroy$))
      .subscribe((sections: Section) => {
        if (sections) {
          this.content = sections.content[SectionNumber.services];
          this.items = this.content.content;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
