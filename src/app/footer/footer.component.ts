import { Component, OnInit } from '@angular/core';
import { Content, Section } from '../models/section.model';
import { AppService } from '../service/app-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public content: Content;

  constructor(private appService: AppService) { }
  ngOnInit(): void {
    this.appService.getSection().subscribe((sections: Section) => {
      if (sections) {
        this.content = sections.content[4];
      }
    });

  }

}
