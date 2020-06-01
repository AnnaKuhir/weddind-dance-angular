import { Component, OnInit, Input } from '@angular/core';
import { InnerContent } from 'src/app/models/section.model';

@Component({
  selector: 'app-coaches-item',
  templateUrl: './coaches-item.component.html',
  styleUrls: ['./coaches-item.component.scss']
})
export class CoachesItemComponent implements OnInit {

  @Input() item: InnerContent;
  @Input() index: number;
  constructor() {}

  public imgUrl: string;
  public itemIndex: string;

  ngOnInit(): void {
    if(this.item) {
      const imageName = this.item.name.replace(/[ ,.]/g, "-").toLocaleLowerCase();
      this.imgUrl = `../../../assets/images/${imageName}.jpg`;
      this.index++;
      if(this.index < 10){
       this.itemIndex = `0${this.index}`
      } else {
        this.itemIndex = `${this.index}`
      }
    }
  }

  handleClick() {
    if (this.item) {
      location.href = this.item.url;
    }
  }

}
