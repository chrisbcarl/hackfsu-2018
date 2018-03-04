import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CredentialsService } from './credentials.service';


@Injectable()
export class ConversationService {

  conversation_credentials: any;

  constructor(
    private http: HttpClient,
    private credentials_service: CredentialsService
  ) { 
    this.conversation_credentials = this.credentials_service.load('watson-conversation');
    console.log(this.conversation_credentials);
  }

  createMessage(text: string, context: any) {
    let body = {};
    body['text'] = text;
    body['context'] = context;

    return this.http.post('/api/conversation', body);
  }

  readMessage() {
    return this.http.get('/api/conversation');
  }

}