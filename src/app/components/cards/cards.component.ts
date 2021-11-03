import { AppComponent } from './../../app.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../Card';
import { CARDS } from '../../mock-cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() cards: Card[] = CARDS;
  @Input() id: string = '';
  @Input() innerNumber: number = 0;
  @Output() deleteCard: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  handleDelete(id: string) {
    this.deleteCard.emit(id);
  }
}
