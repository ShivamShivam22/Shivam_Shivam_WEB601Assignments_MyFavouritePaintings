import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'The Starry Night',
      description: 'Painting by Van gogh',
      creator: 'Vincent Van Gogh',
      imgURL: 'Images/starrynight.jpg',
      type: '1'
    });
    this.contentList.add({
      id: 2,
      title: 'The Last Supper',
      description: 'Painting by Leonardo Da Vinci',
      creator: 'Leonardo Da Vinci',
      imgURL: 'Images/thelastsupper.jpg',
      type: '2'
    });
    this.contentList.add({
      id: 1,
      title: 'The Scream',
      description: 'Painting by Edvard Munch',
      creator: 'Edvard Munch',
      imgURL: 'Images/thescream.jpg',
      type: '3'
    });
    console.log(this.contentList.content);
  }

  ngOnInit(): void {
  }
}
