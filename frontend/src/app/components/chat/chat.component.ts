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
  queries: string[];
  responses: string[][];

  // clients are 0, server is 1
  exchanges: {
    messages: string[],
    source: number
  }[];
  contexts: any[];


  constructor(
    private conversation_service: ConversationService,
    private credentials_service: CredentialsService,
  ) { 
    this.queries = ["Hello?"];
    this.responses = [
      ["fuck", "this", "shit"]
    ];
    this.exchanges = []
    this.contexts = [{}];
  }

  ngOnInit() {
    this.populateWelcomeMessages();
  }

  onClick(event: Event) {
    this.doTheThing();
    this.query = '';
  }

  populateWelcomeMessages() {
    this.conversation_service.createMessage(null, null)
      .subscribe((data) => {
        console.log(
          "conversation_service.createMessage on null");

        this.responses.push(data['message']);
        this.contexts.push(data['context']);
        this.exchanges.push({
          messages: data['message'],
          source: 1
        });

        console.log(this);
      }, (error) => {
        console.error("error returned", error);
      }, () => {
        console.log("completed this shit");
    });


    this.conversation_service.readMessage()
      .subscribe((data) => {
        console.log(
          "conversation_service.readMessage", 
          data
        );

        this.responses.push(data['message']);
        this.contexts.push(data['context']);
        this.exchanges.push({
          messages: data['message'],
          source: 1
        });
      }, (error) => {
        console.error("error returned", error);
      }, () => {
        console.log("completed this shit");
    });
  }

  doTheThing() {
    this.queries.push(this.query);
    this.exchanges.push({
      messages: [this.query],
      source: 0
    })

    // SUPER HACKY
    if (this.exchanges.length > 20) {
      this.exchanges.shift();
      this.exchanges.shift();
    }

    this.conversation_service.createMessage(
      this.queries[this.queries.length - 1],
      this.contexts[this.contexts.length - 1]
    )
      .subscribe((data) => {
        console.log(
          "conversation_service.createMessage", 
          this.queries[this.queries.length],
          this.contexts[this.contexts.length], 
          data
        );

        this.responses.push(data['message']);
        this.contexts.push(data['context']);
        this.exchanges.push({
          messages: data['message'],
          source: 1
        })

        console.log(this);
      }, (error) => {
        console.error("error returned", error);
      }, () => {
        console.log("completed this shit");
    });
  }
}
