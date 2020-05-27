import { Component } from '@angular/core';

@Component({       //декоратор
  selector: 'app-root',  //"данный компонент определяется по селектору app-root"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wedding-dance-angular';
}
