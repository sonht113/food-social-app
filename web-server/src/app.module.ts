import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://hotrongson:hotrongson18101999@cluster0.ohwdmsi.mongodb.net/?retryWrites=true&w=majority'),
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
