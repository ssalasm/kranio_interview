import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MyFirstCollection,
  MyFirstCollectionSchema,
} from './collection.schema';
import { MyFirstCollectionService } from './my-first-collection.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MyFirstCollection.name,
        schema: MyFirstCollectionSchema,
        collection: 'my_first_collection',
      },
    ]),
  ],
  providers: [MyFirstCollectionService],
  exports: [MyFirstCollectionService],
})
export class MyFirstCollectionModule {}
