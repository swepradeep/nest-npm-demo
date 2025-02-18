import { Injectable } from '@nestjs/common';
import { FooDao } from '../dao/fooDao.service';

@Injectable()
export class FooDataAccess {
  constructor(private readonly fooDao: FooDao) {}

  async getAllFoo() {
    try {
      return await this.fooDao.getAllFoo();
    } catch (error) {
      console.error('getAllFoo: ', error);
      throw error;
    }
  }

  async getFooById(id: string) {
    try {
      return await this.fooDao.getFooById(id);
    } catch (error) {
      console.error('getFooById: ', error);
      throw error;
    }
  }

  async createFoo(data: any) {
    try {
      return await this.fooDao.createFoo(data);
    } catch (error) {
      console.error('createFoo: ', error);
      throw error;
    }
  }

  async updateFoo(id: string, data: any) {
    try {
      return await this.fooDao.updateFoo(id, data);
    } catch (error) {
      console.error('updateFoo: ', error);
      throw error;
    }
  }
}
