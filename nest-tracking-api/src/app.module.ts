import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsModule } from './maps/maps.module';
import { RoutesModule } from './routes/routes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MapsModule, RoutesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
