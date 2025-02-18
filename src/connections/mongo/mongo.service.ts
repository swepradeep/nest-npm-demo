import { Injectable } from '@nestjs/common';
import { ConnectionInterface } from '../connection.interfce';
import { connect, connection, disconnect } from 'mongoose';

@Injectable()
export class MongoService implements ConnectionInterface {
  private client = connection;

  constructor() {}
  async connect(): Promise<void> {
    if (this.client.readyState === 0) {
      console.log('Connecting to MongoDB...');
      await connect(process.env.MONGO_URI);
      console.log('Connected to MongoDB');
    }
  }
  disconnect(): void {
    if (this.client.readyState === 1) {
      disconnect();
    }
  }
  async checkHealth(): Promise<boolean> {
    try {
      return this.client.readyState === 1;
    } catch (error) {
      return false;
    }
  }
}
