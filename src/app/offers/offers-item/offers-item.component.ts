import { Component, OnInit, Input } from '@angular/core';
import { InnerContent } from 'src/app/models/section.model';

@Component({
  selector: 'app-offers-item',
  templateUrl: './offers-item.component.html',
  styleUrls: ['./offers-item.component.scss'],
})
export class OffersItemComponent implements OnInit {
  @Input() item: InnerContent;
  constructor() {}

  public imgUrl: string;

  ngOnInit(): void {
    // debugger;
    if(this.item) {
      const imageName = this.item.title.replace(/[ ,.]/g, "-").toLocaleLowerCase();
      this.imgUrl = `../../../assets/images/${imageName}.svg`;
    }
  }

  handleClick() {
    if (this.item) {
      location.href = this.item.url;
    }
  }
}
