import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  MyFirstCollection,
  MyFirstCollectionDocument,
} from './collection.schema';

@Injectable()
export class MyFirstCollectionService {
  constructor(
    @InjectModel(MyFirstCollection.name)
    private catModel: Model<MyFirstCollectionDocument>,
  ) {}

  async findAll(): Promise<MyFirstCollection[]> {
    return this.catModel.find().exec();
  }
}
