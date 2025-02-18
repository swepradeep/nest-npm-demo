import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { FooDataAccess } from './dataAccess/fooDataAccess.service';
import { FooDao } from './dao/fooDao.service';

@Module({
  providers: [DbService, FooDataAccess, FooDao],
  exports: [DbService, FooDataAccess],
})
export class DbModule {}
