import { Injectable } from '@angular/core';

@Injectable()
export class CredentialsService {
  credentials: {
    [key: string]: any;
  };
  keys: string[];

  constructor() {
    this.credentials = {};
    this.keys = [
      "watson-conversation",
      "google-calendar",
      "trello"
    ];

    this.keys.forEach(key => {
      this.credentials[key] = null;
      this.credentials[key] = this.load(key);
    });
  }

  save(key: any, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(key + 'stored in localstorage', value);
  }

  load(key: string): any {
    let value: any = null;

    if (this.credentials[key]) {
      value = this.credentials[key];
    } else {
      if (localStorage.getItem(key) === null)
        console.log(key, 'doesn\'t exist in localStorage');
      else
        value = JSON.parse(localStorage.getItem(key));
    }

    return value;
  }


}
