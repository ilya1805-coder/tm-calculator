import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PriceSchema = new Schema({
  priceName: { type: String, required: true, unique: true },
  applicationBase: { type: Number, required: true },
  applicationPerClass: { type: Number, required: true },
  registrationBase: { type: Number, required: true },
  registrationPerClass: { type: Number, required: true },
  search: { type: Number, required: true },
  isColored: { type: Number, required: true },
  multipleApplicants: { type: Number, required: true },
  isExpress: { type: Number, required: true },
  discountPercent: { type: Number, required: true },
});
const Price = mongoose.model('price', PriceSchema);

export default Price;
