import { Component } from '@angular/core';
import { SDKQuickstart } from 'sdk-quickstart';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  deviceId = '';

  constructor(private data: DataService) {}

  register() {
    SDKQuickstart.onRegister({ deviceId: this.deviceId })
      .then((res) => {
        console.log('Result after register', res);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  }
}
