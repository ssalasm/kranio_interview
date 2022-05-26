import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyFirstCollectionService } from './../my-fitst-collection/my-first-collection.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const syFirstCollectionSerivce = app.get(MyFirstCollectionService);

  console.log(await syFirstCollectionSerivce.findAll());

  await app.listen(3002);
}
bootstrap();
