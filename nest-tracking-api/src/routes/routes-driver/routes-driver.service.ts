import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesDriverService {
    constructor(private prismaService: PrismaService) {}

    proccesRoute(dto: { route_id: string; lat: number; lng: number }) {
         return this.prismaService.routeDriver.upsert({
            include: {
                route: true, //eager loading
            },
            where: { route_id: dto.route_id },
            create: {
                route_id: dto.route_id,
                points: {
                set: {
                    location: {
                    lat: dto.lat,
                    lng: dto.lng,
                    },
                },
                },
            },
            update: {
                points: {
                push: {
                    location: {
                    lat: dto.lat,
                    lng: dto.lng,
                    },
                },
                },
            },
            });
    }
}
