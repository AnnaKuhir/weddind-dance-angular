import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/section.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() content: Content;

  constructor() {}

  ngOnInit(): void {}
}
