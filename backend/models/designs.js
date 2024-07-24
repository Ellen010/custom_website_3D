
const mongoose=require("mongoose");

const designSchema = mongoose.Schema({
    designName: String,
    main: String,
    description: String,
    photo: String,
    price: Number,
   });
   const Design = mongoose.model('designs', designSchema);
   module.exports = Design;

   
