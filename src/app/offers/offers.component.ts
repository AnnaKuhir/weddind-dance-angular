import { Component, OnInit, Output } from '@angular/core';
import { Section, Content, InnerContent } from '../models/section.model';
import { AppService } from '../service/app-service';

@Component(
  {
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss']
  }
)
export class OffersComponent implements OnInit {

  @Output() items: InnerContent [];
  public content: Content;

constructor(private appService: AppService) { }

ngOnInit(): void {
  this.appService.getSection().subscribe((sections: Section) => {
    if (sections) {
      this.content = sections.content[3];
      this.items = this.content.content;
    }
  });



}
}