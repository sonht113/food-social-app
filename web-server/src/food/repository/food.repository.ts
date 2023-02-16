import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../../base.repository';
import { Food, FoodSchema } from '../models/food.model';

@Injectable()
export class FoodRepository extends BaseRepository<Food> {
  constructor(
    @InjectModel('Food')
    private readonly foodModel: Model<Food>,
  ) {
    super(foodModel);
  }
}
