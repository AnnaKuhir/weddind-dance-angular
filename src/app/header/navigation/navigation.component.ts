import { Component, OnInit, Input } from '@angular/core';
import { InnerContent } from 'src/app/models/section.model';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() links: InnerContent[];

  constructor() {}

  ngOnInit(): void {}
}
