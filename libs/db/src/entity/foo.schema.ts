import mongoose, { Schema } from 'mongoose';

const FooSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

FooSchema.index({ name: 1, age: 1 });
const Foo = mongoose.model('Foo', FooSchema);

export default Foo;
