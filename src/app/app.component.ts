import { Component, OnInit } from '@angular/core';
import { Card } from './Card';
import { CARDS } from './mock-cards';
import { FunctionService } from './function.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FunctionService],
})
export class AppComponent implements OnInit {
  cards: Card[] = CARDS;
  title = 'Task-Cards';

  constructor(private functionService: FunctionService) {}
  ngOnInit() {}

  deleteCard(id: string) {
    this.cards = this.cards.filter((item) => item.id !== id);

    return this.cards;
  }

  createCard() {
    return {
      id: this.functionService.createUUID(),
      innerNumber: this.functionService.randomNumber(1, 1000),
    };
  }

  sortCard() {
    this.functionService.sortObjectArray(this.cards);
  }

  addCard() {
    this.cards.push(this.createCard());
  }
}
