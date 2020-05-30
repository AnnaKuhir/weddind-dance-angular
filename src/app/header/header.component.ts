import { Component, OnInit, Output } from '@angular/core';
import { HeaderService } from './services/header-service';
import { Section, Content, InnerContent } from '../models/section.model';

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

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.getSection().subscribe((sections: Section) => {
      if (sections) {
        this.content = sections.content[4];
        this.links = this.content.content;
      }
    });

  }
}
