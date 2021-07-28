import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullmame: { type: String, required:true},
    email:{ type : String, required:true},
    password: {type: String},
    adress:[{detail:{type :String }, for: {type:String}}],
    phoneNumber:[{type:Number}],
},
{
    timestamps: true,
}
);

export const UserModel = mongoose.model("Users", UserSchema);