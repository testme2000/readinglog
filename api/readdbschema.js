import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const readdbSchema = Schema(
    {
        title : { type: String, required: true},
        author: { type: String, required: true},
        isbn: { type: String, required: true}
    }
);

const Readdb = mongoose.model("Readdb", readdbSchema);
module.exports = Readdb;

