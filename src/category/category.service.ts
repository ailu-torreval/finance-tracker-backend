import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }


  async findAll(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({id});
    return category;
  }

  async update(id: number, updateCategoryDto: CreateCategoryDto): Promise<Category> {
    await this.categoryRepository.update(id, {...updateCategoryDto});
    const updatedCategory = await this.categoryRepository.findOneBy({id});
    return updatedCategory;
  }

  async remove(id: number) {
    await this.categoryRepository.delete(id);
    return {"id": id, "status": "deleted"};  }
}
