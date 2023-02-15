import { Controller, Body, Param, Delete, Get, Put, Post} from '@nestjs/common';
import { CreateFoodDto, UpdateFoodDto } from '../dto/food.dto';
import { FoodService } from '../service/food.service';

@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  getAllFood() {
    return this.foodService.getAllFood();
  }

  @Get(':id')
  getFoodById(@Param('id') id: string) {
    return this.foodService.getFoodById(id);
  }

  @Post()
  async createFood(@Body() body: CreateFoodDto) {
    return this.foodService.createFood(body)
  }

  @Put(':id')
  async updateFood(@Param('id') id: string, @Body() body: UpdateFoodDto) {
    return this.foodService.updateFood(id, body);
  }

  @Delete(':id')
  async deleteFood(@Param('id') id: string) {
    return this.foodService.deleteFood(id)
  }
}
