import { Injectable } from '@nestjs/common';
import Foo from '../entity/foo.schema';

@Injectable()
export class FooDao {
  async getAllFoo() {
    return Foo.find().exec();
  }

  async getFooById(id: string) {
    return Foo.findById(id).exec();
  }

  async createFoo(data: any) {
    return Foo.create(data);
  }

  async updateFoo(id: string, data: any) {
    return Foo.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true },
    ).exec();
  }
}
