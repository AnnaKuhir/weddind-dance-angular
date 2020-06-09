import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/section.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() content: Content;
  constructor() {}

  public imgUrl: string;

  ngOnInit(): void {
    this.imgUrl = `../../../assets/images${this.content.meta.heroImage}`;
  }
}
