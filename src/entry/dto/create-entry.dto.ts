import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEntryDto {
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

  constructor(
    amount: number,
    date: Date,
    currency: string,
    name: string,
    // comment?: string,
    categoryId?: number
  ) {
    this.amount = amount;
    this.date = date;
    this.currency = currency;
    this.name = name;
    // this.comment = comment;
    this.categoryId = categoryId;
  }
}
