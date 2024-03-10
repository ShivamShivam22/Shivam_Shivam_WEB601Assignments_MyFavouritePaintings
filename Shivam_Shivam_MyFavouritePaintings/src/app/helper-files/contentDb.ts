
import { Content } from './content-interface';
import { ArtService } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  get content(): Content[] {
    return this.contentArray;
  }

  add(item: Content): void {
    this.contentArray.push(item);
  }

  count(): number {
    return this.contentArray.length;
  }

  getHtmlOutput(index: number): string {
    const item = this.contentArray[index];
   
    return `<div>${item.title}, ${item.description}, ${item.creator}, ${item.imgURL}, ${item.type}</div>`;
  
}

getContentArray(): void {
    this.contentArray.getContentArray()
      .subscribe(data => {
        this.contentArray = data;
        this.contentArray.sendMessage("Content array loaded!");
      });
  }

}

