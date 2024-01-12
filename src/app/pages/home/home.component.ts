import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
  });
  cards: Card[] = [];
  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
    this.loadCards();
  }

  loadCards() {
    this.cardService.getCards().subscribe((data: Card[]) => {
      console.log(data, 'data cards');
      this.cards = data;
    });
  }

  addCard() {
    if (this.cardForm.valid) {
      const newCard = {
        nome: this.cardForm.value.nome,
        descricao: this.cardForm.value.descricao,
        status: 'Backlog',
      };

      this.cardService.createCard(newCard as Card).subscribe((card: Card) => {
        this.cards.push(card);
        this.cardForm.reset();
      });
    }
  }
}
