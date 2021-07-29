import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({user: this._id.toString ()}, "zomatoAPP");
};

UserSchema.statics.findByEmailAndPhone = async ({email, phoneNumber}) => {
     //cleck Whether email exist
       
    const chechUserByEmail = await UserModel.findOne({email});
    const chechUserByPhone = await UserModel.findOne({phoneNumber});

    if (chechUserByEmail || chechUserByPhone) {
       throw new Error ("User Already Exist...!");
    }

    return false;
};

UserSchema.pre("save", function(next){
    const user = this;
     //password is modified
    if(!user.isModified("password"))return next();
    //generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if(error) return next(error);
        //hash the password
        bcrypt.hash(user.password, salt, (error, hash) => {
        if(error) return next(error);
        //assigning hashed password
        user.password = hash;
        return next();
    });
    });
});


export const UserModel = mongoose.model("Users", UserSchema);