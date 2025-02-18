import { Injectable, OnModuleInit } from '@nestjs/common';
import { MongoService } from './connections/mongo/mongo.service';
import { FooDataAccess } from '@db/dataAccess/fooDataAccess.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly fooDataAccess: FooDataAccess,
    private readonly mongoService: MongoService,
  ) {}

  async onModuleInit() {
    try {
      await this.mongoService.connect();

      const foos = await this.fooDataAccess.getAllFoo();
      console.log('Successfully fetched foos on module init:', foos);
    } catch (error) {
      console.error('Error fetching foos on module init:', error);
    }
  }

  async getHello(): Promise<any> {
    const foos = await this.fooDataAccess.getAllFoo();

    return { msg: 'Hello World!', foos: foos };
  }

  async createFoo(data: any): Promise<any> {
    const foo = await this.fooDataAccess.createFoo(data);

    return { data: foo };
  }
}
