import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';

import { ItemsService } from './items/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ItemsModule} from './items/items.module'
@Module({
  imports: [ItemsModule,
    // TypeOrmModule.forRoot({
    //   type: 'gresql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
