import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from './entities/entry.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry) private entryRepository: Repository<Entry>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createEntryDto: CreateEntryDto): Promise<Entry> {
    const category = await this.categoryRepository.findOneBy({
      id: createEntryDto.categoryId,
    });
    const entry = this.entryRepository.create({ ...createEntryDto, category });
    return this.entryRepository.save(entry);
  }

  async findAll(): Promise<Entry[]> {
    const entries = await this.entryRepository.find({
      relations: ['category'],
    });
    return entries;
  }

  async findOne(id: number): Promise<Entry> {
    const findedEntry = await this.entryRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    return findedEntry;
  }

  async update(id: number, updateEntryDto: UpdateEntryDto) {
    const category = await this.categoryRepository.findOneBy({
      id: updateEntryDto.categoryId,
    });
    const { categoryId, ...updateProps } = updateEntryDto;
    await this.entryRepository.update(id, { ...updateProps, category });
    const updatedEntry = await this.entryRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    return updatedEntry;
  }

  async remove(id: number) {
    const deletedItem = this.entryRepository.delete(id);
    return {"id": id, "status": "deleted"};
  }
}
