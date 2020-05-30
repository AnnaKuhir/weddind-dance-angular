import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/section.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() content: Content;

  constructor() { }

  ngOnInit(): void {
  }

}
