import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
   
  greeting = 'Universe';

  handleChange(event) {
    this.greeting = event.target.value;
  }
}