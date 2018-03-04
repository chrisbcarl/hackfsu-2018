import { Injectable } from '@angular/core';

import { watson, google, trello } from '../../../../config.js';

@Injectable()
export class CredentialsService {
  credentials: {
    [key: string]: any;
  };
  keys: string[];

  constructor() {
    this.credentials = {};
    this.keys = [
      "watson",
      "google",
      "trello"
    ];

    this.credentials['watson'] = watson;
    this.save('watson', watson);

    this.keys.forEach(key => {
      if (!this.credentials[key]) {
        this.credentials[key] = null;
      }
      this.credentials[key] = this.load(key);
    });

  }

  save(key: any, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(key + ' stored in localstorage', value);
  }

  load(key: string): any {
    let value: any = null;

    if (this.credentials[key]) {
      value = this.credentials[key];
    } else {
      if (localStorage.getItem(key) === null)
        console.log(key, ' doesn\'t exist in localStorage');
      else
        value = JSON.parse(localStorage.getItem(key));
    }

    return value;
  }


}
