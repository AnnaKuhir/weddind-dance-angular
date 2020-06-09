import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './service/app-service';
import { Section } from './models/section.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  //декоратор
  selector: 'app-root', //"данный компонент определяется по селектору app-root"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'wedding-dance-angular';

  private destroy$: Subject<void> = new Subject<void>();

  public loading: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loading = true;
    this.appService
      .getSection()
      .pipe(takeUntil(this.destroy$))
      .subscribe((sections: Section) => {
        if (sections) {
          this.loading = false;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
