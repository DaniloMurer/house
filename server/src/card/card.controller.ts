import { Controller, Get } from "@nestjs/common";
import { CardService } from "./card.service";

@Controller()
export class CardController {

    constructor(private readonly service: CardService) {}

    @Get('/api/cards')
    getCards() {
        return this.service.getCards();
    }
}