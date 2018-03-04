import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CredentialsService } from './credentials.service';

import { watson_credentials } from '../../../config.js';
import { ConversationV1 } from 'watson-developer-cloud';

@Injectable()
export class ConversationService {

  conversation_credentials: any;
  watson_conversation: ConversationV1;

  constructor(
    private http: HttpClient,
    private credentials_service: CredentialsService
  ) { 
    this.conversation_credentials = this.credentials_service.load('watson-conversation');
    if (!this.conversation_credentials) {
      this.credentials_service.save('watson-conversation', watson_credentials);
    }
    console.log(this.conversation_credentials);


    // var ConversationV1 = require('watson-developer-cloud/conversation/v1');
    // var credentials = require('../env/conversation-credentials');
    // var workspace_id = 'f32f2938-766b-4ae5-89d1-0d16be395bbc';



    // this.watson_conversation = new ConversationV1({
    //   username: this.credentials.watson.conversation.username,
    //   password: this.credentials.watson.conversation.password,
    //   url: this.credentials.watson.conversation.url,
    //   version_date: '2017-05-26'
    // });
    
    /*

    */
  }

  postMessage(text: string) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  //   console.log('running conversation example', text);
  //     //this is the point you prepare for CORS
  //     // var origin = request.headers.origin;
  //     // response.header("Access-Control-Allow-Origin", origin);
  //     // //and you have just solved the CORS issue
  //     let data: any;

  //     this.watson_conversation.message(
  //       {
  //         input: { text: "Create an event for tomorrow at 5pm" },
  //         workspace_id: this.credentials.watson.conversation.workspace_id
  //       },
  //       function(err, response) {
  //         if (err) {
  //           data = err;
  //           console.error(err);
  //         } else {
  //           data = response;
  //           console.log(JSON.stringify(response, null, 2));
  //         }
  //       }
  //     );


  //   var url = this.credentials.watson.conversation.url + 
  //     "/v1/workspaces/" + this.credentials.watson.conversation.workspace_id + "/" +
  //     "message?version=" + this.credentials.watson.conversation.version_date;

  //   // return this.http.post(url, function(request, response) {
  //   //   console.log(request, response);
  //   //   // var text = request.body.text;


  //   //   /*
  //   //   curl -X POST -u "{username}":"{password}" 
  //   //   --header "Content-Type:application/json" 
  //   //   --data "{\"input\": {\"text\": \"Hello\"}}" 
  //   //     "https://gateway.watsonplatform.net/conversation/api/v1/workspaces/9978a49e-ea89-4493-b33d-82298d3db20d/message?version=2018-02-16"

  //   //   */
  
  //   //   //this is the point you prepare for CORS
  //   //   var origin = request.headers.origin;
  //   //   response.header("Access-Control-Allow-Origin", origin);
  //   //   //and you have just solved the CORS issue
  
  //   //   this.watson_conversation.message({
  //   //       workspace_id: this.credentials.watson.conversation.workspace_id,
  //   //       input: {'text': text},
  //   //       context: {}
  //   //   },
  //   //   function(err, response) {
  //   //     console.log(err, response);
  //   //     if (err) {
  //   //       console.error(err);
  //   //     } else {
  //   //       console.log(JSON.stringify(response, null, 2));
  //   //     }
  //   //   });
  // });

  }

}