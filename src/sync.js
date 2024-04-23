"use strict"

const { BlogCategory} = require('./models/blog.models')

module.exports = async () => {

    /* BlogCategory */

    // Get first blogCategory:
    const blogCategory = await BlogCategory.findOne()
    console.log("*bu",blogCategory)
    // console.log(blogCategory._id)

    if (blogCategory) {
        BlogPost.updateMany({ //? Filter:
            "blogCategoryId": { $exists: false } // field yok ise
        }, { //? Update:
            "blogCategoryId": blogCategory._id // kaydı ata
        }).catch(err => console.log(err))
    }

    // End:
    console.log('* Synchronized *')
    /* Finished */
}