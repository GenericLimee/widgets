import { useState } from 'react'

type suit = 'S' | 'H' | 'D' | 'C';
type cardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';
type card = {
  suit: suit,
  card: cardValue
}

const suits: suit[] = ['S', 'H', 'D', 'C'];
const cards: cardValue[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

class Deck {
  deck: card[]
  constructor() {
    this.deck = [];
    for (let num = 0; num < 13; num++) for (let suit = 0; suit < 13; suit ++) {
      this.deck.push({
        card: cards[num],
        suit: suits[suit]
      });
    }
    console.log(this.deck);
  }
}

export default function Page() {
  const thing = new Deck();
  //delete thing;
  return (
    <div>
      poker :D
    </div>
  )
}