import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app-service';
import { Section } from './models/section.model';

@Component({       //декоратор
  selector: 'app-root',  //"данный компонент определяется по селектору app-root"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wedding-dance-angular';

  
  public loading: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.loading = true;
    this.appService.getSection().subscribe((sections: Section) => {
      if (sections) {
          this.loading = false;
      }
    });
  }
}
