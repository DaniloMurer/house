import { Injectable } from "@nestjs/common";

@Injectable()
export class CardService {
    getCards() {
        return [
            {
                title: 'My Card Number 1',
                content: 'This card has some very important content written in it'
            },
            {
                title: 'My Card Number 2',
                content: 'This card has some very important content written in it'
            },
            {
                title: 'My Card Number 3',
                content: 'This card has some very important content written in it'
            }
        ]
    }
}