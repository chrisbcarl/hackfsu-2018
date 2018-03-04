import { Component, OnInit } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  query: string;


  constructor(
    private conversation_service: ConversationService,
    private credentials_service: CredentialsService,
  ) { 
    
  }

  ngOnInit() {
    this.conversation_service.postMessage("Create an event for tomorrow at 5pm")
      .subscribe((data) => {
        console.log("data returned", data);
      }, (error) => {
        console.error("error returned", error);
      }, () => {
        console.log("completed this shit");
      });
  }

  onClick(event: Event) {
    console.log(event, this.query);
  }
}
