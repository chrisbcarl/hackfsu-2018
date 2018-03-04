import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CredentialsService } from './credentials.service';

@Injectable()
export class WatsonService {

  constructor(
    private http: HttpClient,
    private credentials_service: CredentialsService
  ) { }


  getConversationToken() {
    return this.http.get(
      'https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/conversation/api'
    );
    curl -X GET --user {username}:{password} \
""
  }

  /*
  get(url: string, options: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: HttpObserve;
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
  } = {}): Observable<any>
  */
}
