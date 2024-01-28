import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  get content(): Content[] {
    return this.contentArray;
  }

  add(item: Content): void {
    this.contentArray.push(item);
  }

  get numberOfItems(): number {
    return this.contentArray.length;
  }

  getContentDetails(index: number): string {
    if (index >= 0 && index < this.numberOfItems) {
      const item = this.contentArray[index];
      return `
        <div>
          <strong>Title:</strong> ${item.title}<br>
          <strong>Description:</strong> ${item.description}<br>
          <strong>Creator:</strong> ${item.creator}<br>
          <img src="${item.imgURL}" alt="Image" /><br>
          <strong>Type:</strong> ${item.type}<br>
        </div>
      `;
    } else {
      return `<div>Error: Index out of range</div>`;
    }
  }
}