import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FoodController } from './controller/food.controller';
import { FoodService } from './service/food.service';
import { FoodSchema } from './models/food.model';
import { FoodRepository } from './repository/food.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Food',
        schema: FoodSchema
      },
    ])
  ],
  controllers: [FoodController],
  providers: [FoodService, FoodRepository]
})
export class FoodModule {}
