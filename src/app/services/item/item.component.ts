import { Component, OnInit, Input } from '@angular/core';
import { InnerContent } from 'src/app/models/section.model';
import { strict } from 'assert';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public cardItems: CardItem[];
  public url: string;
  @Input() items: InnerContent[];
  constructor() {
    this.cardItems = [];
  }

  ngOnInit(): void {
    this.cardItems.push({
      style: ['First Dance', 'Parent & Child Dance'],
      imageUrl: '../../../assets/images/service1.jpg',
    } as CardItem);
    this.cardItems.push({
      style: ['Groomsmen Dance', 'Parent Dance', 'Children’s Dance'],
      imageUrl: '../../../assets/images/service2.jpg',
    } as CardItem);
    this.cardItems.push({
      style: ['Bridal Party Dance', 'Anniversary Dance'],
      imageUrl: '../../../assets/images/service3.jpg',
    } as CardItem);

    this.items.forEach((item, index) => {
      const cardItem = this.cardItems[index];
      if (cardItem) {
        cardItem._id = item._id;
        cardItem.title = item.title;
        cardItem.url = item.url;
      }
    });
  }

  handleClick(cardItem: CardItem, event: Event) {
    if (cardItem) {
      location.href = cardItem.url;
    }
  }
}

interface CardItem {
  style: any[];
  _id: string;
  title: string;
  url: string;
  imageUrl: string;
}
