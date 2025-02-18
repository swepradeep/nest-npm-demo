import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionsModule } from './connections/connections.module';
import { MongoService } from './connections/mongo/mongo.service';
import { DbModule } from '@db/db.module';
import { FooDataAccess } from '@db/dataAccess/fooDataAccess.service';
import { FooDao } from '@db/dao/fooDao.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConnectionsModule,
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoService, FooDataAccess, FooDao],
})
export class AppModule {}
