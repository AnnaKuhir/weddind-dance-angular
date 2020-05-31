import { Component, OnInit, Input } from '@angular/core';
import { InnerContent } from 'src/app/models/section.model';

@Component({
  selector: 'app-offers-item',
  templateUrl: './offers-item.component.html',
  styleUrls: ['./offers-item.component.scss'],
})
export class OffersItemComponent implements OnInit {
  @Input() items: InnerContent[];
  constructor() {}

  public baseImgUrl: string;

  ngOnInit(): void {
    this.baseImgUrl = '../../../assets/images/';
  }

  handleClick(cardItem: InnerContent, event: Event) {
    if (cardItem) {
      location.href = cardItem.url;
    }
  }
}
