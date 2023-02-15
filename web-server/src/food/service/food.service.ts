import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateFoodDto, UpdateFoodDto } from '../dto/food.dto'
import { FoodRepository } from '../repository/food.repository';

@Injectable()
export class FoodService {
  constructor(private readonly foodRepository: FoodRepository) {}

  async getAllFood() {
    return await this.foodRepository.getByCondition({});
  }

  async getFoodById(id: string) {
   const food = await this.foodRepository.findById(id);
   if(food){
     return food;
   }
   throw new HttpException('Food not found', HttpStatus.NOT_FOUND);
  }

  async createFood(food: CreateFoodDto) {
    return await this.foodRepository.create(food);
  }

  async updateFood(id: string, food: UpdateFoodDto) {
    return await this.foodRepository.findByIdAndUpdate(id, food);
  }
  
  async deleteFood(id: string) {
    return await this.foodRepository.deleteOne(id);
  }
}
