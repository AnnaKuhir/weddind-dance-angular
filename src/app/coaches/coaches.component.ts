import { Component, OnInit, Output } from '@angular/core';
import { Section, Content, InnerContent } from '../models/section.model';
import { AppService } from '../service/app-service';

@Component(
  {
    selector: 'app-coaches',
    templateUrl: './coaches.component.html',
    styleUrls: ['./coaches.component.scss']
  }
)
export class CoachesComponent implements OnInit {

  @Output() items: InnerContent [];
  @Output() index: number;
  public content: Content;

constructor(private appService: AppService) { }

ngOnInit(): void {
  this.appService.getSection().subscribe((sections: Section) => {
    if (sections) {
      this.content = sections.content[2];
      this.items = this.content.content;
    }
  });
}
}