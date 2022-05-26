import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Micro 1';
  }
  getNumber(input) {
    return input.number + 1;
  }

  validationNumber(input) {
    if (isNaN(input.number)) {
      return false;
    } else {
      const request = {
        number: input.number,
        type: this.validationEvenOdd(input.number),
      };
      //this.testConnection();
      //this.sendNumber(request);
      return request;
    }
  }

  validationEvenOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
  }

  // async testConnection() {
  //   const response = await axios
  //     .get('http://localhost:3002/')
  //     .then((res) => console.log(res.data));
  // }

  // async sendNumber(request) {
  //   const response = await axios
  //     .post('http://localhost:3002/savedata', request)
  //     .then((res) => console.log(res.data));
  // }
}
