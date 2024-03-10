import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArtService } from './ArtSrevice';
import { MessagesService } from './MessagesService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shivam_Shivam_MyFavouritePaintings';

  constructor(private ArtService: content-interface) {}

  getContentItemById(id: number): void {
    this.ArtService.getContentItemById(id)
      .subscribe(data => {
        this.singleContentItem = data;
        this.ArtService.sendMessage(`Content Item at id: ${id}`);
      },
      error => {
        console.error(error);
      });

      constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService.getMessage()
      .subscribe(message => {
        this.messages.push(message);
      });
      <div>
  <app-app-messages [messages]="messages"></app-app-messages>
</div>
  }
  
}
