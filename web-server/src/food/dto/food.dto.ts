import {IsNotEmpty} from 'class-validator';


export class CreateFoodDto {
  @IsNotEmpty()
  name: string;
  description: string;
  price: number | string;
}

export class UpdateFoodDto {
  @IsNotEmpty()
  name: string;
  description: string;
  @IsNotEmpty()
  price: number | string;
}
