import { Component } from '@angular/core';
import { Dormakaba } from 'dormakaba';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  deviceId = '';
  token = '';
  state:
    | 'AVAILABLE'
    | 'DEPLOY IN PROGRESS'
    | 'DEPLOYED'
    | 'REJECTED'
    | 'REMOVE IN PROGRESS'
    | 'REMOVED'
    | 'REQUEST ADD'
    | 'REQUEST REMOVE' = 'AVAILABLE';

  states = [
    'AVAILABLE',
    'DEPLOY IN PROGRESS',
    'DEPLOYED',
    'REJECTED',
    'REMOVE IN PROGRESS',
    'REMOVED',
    'REQUEST ADD',
    'REQUEST REMOVE',
  ];

  constructor(private data: DataService) {}

  register() {
    Dormakaba.onRegister({ deviceId: this.deviceId })
      .then((res) => {
        console.log('Result after register', res);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  }

  onCompleteRegistration() {
    Dormakaba.completeRegistration({ token: this.token })
      .then((res: { result: string }) => {
        console.log('Result after completeRegistration', res);
        alert('Result : ' + res.result);
      })
      .catch((err: any) => {
        console.error('Error: ', err);
      });
  }

  getAllFiles() {
    Dormakaba.getAllFiles({})
      .then((res: { result: string }) => {
        console.log('Result after completeRegistration', res);
        alert('Result : ' + res.result);
      })
      .catch((err: any) => {
        console.error('Error: ', err);
      });
  }

  getAllFilesWithState() {
    console.log(this.state);
    Dormakaba.getAllFilesWithState({ fileState: this.state })
      .then((res: { result: string }) => {
        console.log('Result after completeRegistration', res);
        alert('Result : ' + res.result);
      })
      .catch((err: any) => {
        console.error('Error: ', err);
      });
  }
}
