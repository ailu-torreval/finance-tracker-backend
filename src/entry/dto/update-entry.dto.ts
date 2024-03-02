import { PartialType } from '@nestjs/mapped-types';
import { CreateEntryDto } from './create-entry.dto';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateEntryDto extends PartialType(CreateEntryDto) {
    @IsNotEmpty()
    @IsNumber()
    amount: number;
  
    @IsNotEmpty()
    @IsDateString()
    date: Date;
  
    @IsNotEmpty()
    @IsString()
    currency: string;
  
    @IsNotEmpty()
    @IsString()
    name: string;
  
    // @IsString()
    // comment: string;
  
    @IsNumber()
    categoryId: number;
  }
