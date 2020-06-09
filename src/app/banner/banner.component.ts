import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Section, Content } from '../models/section.model';
import { AppService } from '../service/app-service';
import { SectionNumber } from '../enum/enum';
import { Subject, from } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  @Output() content: Content;

  destroy$: Subject<void> = new Subject<void>();

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getSection()
      .pipe(takeUntil(this.destroy$))
      .subscribe((sections: Section) => {
        if (sections) {
          this.content = sections.content[SectionNumber.banner];
        }
      });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
