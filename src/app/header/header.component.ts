import { Component, OnInit, Output } from '@angular/core';
import { Section, Content, InnerContent } from '../models/section.model';
import { AppService } from '../service/app-service';

@Component(
  {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  }
)
export class HeaderComponent implements OnInit {

  @Output() links: InnerContent [];
  public content: Content;

  constructor(private appService: AppService) { }
  ngOnInit(): void {
    this.appService.getSection().subscribe((sections: Section) => {
      if (sections) {
        this.content = sections.content[4];
        this.links = this.content.content;
      }
    });

  }
}
