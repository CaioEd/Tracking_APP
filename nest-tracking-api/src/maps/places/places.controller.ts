import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService) {}

    @Get()
    findPlaces(@Query('text') text: string){      //Method with route parameter
    	return this.placesService.findPlaces(text)
    }
}
