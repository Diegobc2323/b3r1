import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'World Diego';

    changeHandler(event) {
        this.greeting = event.target.value;
    }
}