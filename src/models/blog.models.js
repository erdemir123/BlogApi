const mongoose = require("mongoose");

const blogCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
},{
    collection:"BlogCategory",
    timestamps:true
});

module.exports={
    BlogCategory:mongoose.model('BlogCategory',blogCategorySchema)
}



// ,iki tabloyu birbirine bağlamak için type:mongoose.Schema.Types.ObjectId ref:"BlogCategory" demek lazım