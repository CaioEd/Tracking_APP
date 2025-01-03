import { Injectable } from '@nestjs/common';
import { Client as GoogleMapsClient, PlaceInputType } from '@googlemaps/google-maps-services-js'

import * as dotenv from 'dotenv';
dotenv.config();
const API_KEY = process.env.API_KEY

@Injectable()
export class PlacesService {
    constructor(private googleMapsClient: GoogleMapsClient) {}
    async findPlaces(text: string) {
        const { data } = await this.googleMapsClient.findPlaceFromText({
            params: {
                input: text,
                inputtype: PlaceInputType.textQuery,
                fields: ['place_id', 'formatted_address', 'geometry', 'name'],
                key: API_KEY,
            },
        })
        return data
    }
}
