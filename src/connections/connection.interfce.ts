export interface ConnectionInterface {
  connect(): Promise<void>;
  disconnect(): any;
  checkHealth(): Promise<boolean>;
}
