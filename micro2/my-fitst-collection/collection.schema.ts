import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MyFirstCollectionDocument = MyFirstCollection & Document;

@Schema()
export class MyFirstCollection {
  @Prop()
  keep: string;
}

export const MyFirstCollectionSchema =
  SchemaFactory.createForClass(MyFirstCollection);
