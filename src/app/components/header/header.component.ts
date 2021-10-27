import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../Card';
import { CARDS } from '../../mock-cards';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() id: string = '';
  @Input() innerNumber: number = 0;
  @Input() cards: Card[] = CARDS;
  @Output() addCard: EventEmitter<any> = new EventEmitter<any>();
  @Output() sortCard: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  handleAdd() {
    this.addCard.emit();
  }

  handleSort() {
    this.sortCard.emit();
  }
}
