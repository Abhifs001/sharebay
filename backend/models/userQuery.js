import mongoose from "mongoose";
const querySchema= mongoose.Schema({
    name: {type:String, required:true},
    email:{type:String, required:true,  },
    query:{type:String, required:true},

}, {
    timestamps:true,
})
const userQuery= mongoose.model('UserQuery', querySchema);
export default userQuery;