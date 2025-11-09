import mongoose from "mongoose";


export const Books = new mongoose.model('books', {
    name: {String}
})