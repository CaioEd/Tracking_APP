import { Injectable } from '@nestjs/common';
import { DirectionsRequest, Client as GoogleMapsClient, TravelMode } from '@googlemaps/google-maps-services-js'

import * as dotenv from 'dotenv';
dotenv.config();
const API_KEY = process.env.API_KEY

@Injectable()
export class DirectionsService {

    constructor(
        private googleMapsClient: GoogleMapsClient,
    ) {}

    async getDirections(originaId: string, destinationId: string) {

        const requestParams: DirectionsRequest['params'] = {
            origin: `place_id:${originaId}`,
            destination: `place_id:${destinationId}`,
            mode: TravelMode.driving,
            key: API_KEY,
        }

        const {data} =  await this.googleMapsClient.directions({
            params: requestParams,
        })
        return {
            ...data,
            request: {
                origin: {
                    place_id: requestParams.origin,
                    location: {
                        lat: data.routes[0].legs[0].start_location.lat,
                        lng: data.routes[0].legs[0].start_location.lng,
                    },
                },
                destination: {
                    place_id: requestParams.destination,
                    location: {
                        lat: data.routes[0].legs[0].end_location.lat,
                        lng: data.routes[0].legs[0].end_location.lng,
                    },
                },
                mode:  requestParams.mode,
            },
        }
    }

}
