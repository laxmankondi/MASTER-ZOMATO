import { Mongoose } from "mongoose";

const ImageSchema = new Mongoose.Schema({
    images:[
        {
            location: {type:String, required:true },
        },
    ],
},
{
    timestamps: true,
}
);

export const ImageModel = mongoose.model("Images", ImageSchema);