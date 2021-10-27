import { Component, Input } from '@angular/core';
import { Card } from './Card';
import { CARDS } from './mock-cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  secondCards: Card[] = CARDS;
  id: string = this.createUUID();
  cards: Card[] = CARDS;
  innerNumber: number = this.randomNumber();
  card: any = {};

  title = 'Task-Cards';

  deleteCard(id: string) {
    this.cards = this.cards.filter((item) => item.id !== id);

    return this.cards;
  }

  createCard() {
    this.card = {
      id: this.createUUID(),
      innerNumber: this.randomNumber(),
    };
    return this.card;
  }

  sortCard() {
    this.sortObjectArray(this.cards);
  }

  addCard() {
    this.cards.push(this.createCard());
  }

  draw() {
    for (let i = 0; i < this.cards.length; i++) {
      this.cards.push(this.secondCards[i]);
    }
  }

  createUUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  randomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  sortObjectArray(array: Card[]) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j].innerNumber > array[j + 1].innerNumber) {
          let x = array[j];
          array[j] = array[j + 1];
          array[j + 1] = x;
        }
      }
    }
  }
}
