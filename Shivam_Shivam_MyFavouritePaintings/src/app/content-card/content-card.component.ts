import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

import { Component, Input } from '@angular/core';
import { Content } from './content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() content: Content | undefined;

  onImageClick(): void {
    if (this.content) {
      console.log('ID:', this.content.id);
      console.log('Title:', this.content.title);
    }
  }
}
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
    this.contentList.add({
      id: 1,
      title: 'The Scream',
      description: 'Painting by Edvard Munch',
      creator: 'Edvard Munch',
      imgURL: 'Images/thescream.jpg',
      type: '3'
    });
    console.log(this.contentList.content);
    this.contentList.add({
      id: 1,
      title: 'The Scream',
      description: 'Painting by Edvard Munch',
      creator: 'Edvard Munch',
      imgURL: 'Images/thescream.jpg',
      type: '3'
    });
    console.log(this.contentList.content);
    this.contentList.add({
      id: 1,
      title: 'The Scream',
      description: 'Painting by Edvard Munch',
      creator: 'Edvard Munch',
      imgURL: 'Images/thescream.jpg',
      type: '3'
    });
    console.log(this.contentList.content);
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
  
  searchTitle: string = '';
  searchResultExists: boolean = false;
  searchResultMessage: string = '';
  
  searchContent() {
    this.searchResultExists = false;
    const foundContent = this.content.find(item => item.title === this.searchTitle);
    if (foundContent) {
      this.searchResultExists = true;
      this.searchResultMessage = `Content with title "${this.searchTitle}" exists!`;
    } else {
      this.searchResultMessage = `Content with title "${this.searchTitle}" does not exist.`;
    }
  }
  
  ngOnInit(): void {
  }
}
