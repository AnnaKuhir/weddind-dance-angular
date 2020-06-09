import { Component, OnInit, Input } from '@angular/core';
import { InnerContent } from 'src/app/models/section.model';
import { strict } from 'assert';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public imgUrl: string;
  @Input() item: InnerContent;
  constructor() {}

  ngOnInit(): void {
    if (this.item) {
      const imageName = this.item.title
        .replace(/[ ,.]/g, '-')
        .toLocaleLowerCase();
      this.imgUrl = `../../../assets/images/${imageName}.jpg`;
    }
  }

  handleClick() {
    if (this.item) {
      location.href = this.item.url;
    }
  }
}
