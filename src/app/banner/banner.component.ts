import { Component, OnInit, Output } from '@angular/core';
import { Section, Content } from '../models/section.model';
import { AppService } from '../service/app-service';
import { SectionNumber } from '../enum/enum';

@Component(
  {
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
  }
)
export class BannerComponent implements OnInit{
  @Output() content: Content;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getSection().subscribe((sections: Section) => {
      if (sections) {
        this.content = sections.content[SectionNumber.banner];
      }
    });

  }
}