import  Mongoose  from "mongoose";

const menuSchema = new Mongoose.Schema({
    menus: [
      {
          name: { type: String, required: true},
          items: [
          {
            type: Mongoose.Types.ObjectId,
            ref: "Foods",
          },
        ],
      },
    ],
    recommended: [
        {
            type: Mongoose.Types.ObjectId,
            ref: "Foods",
            unoque: true,
        }
    ]
},
{
  timestamps: true,
}
);

export const MenuModel = mongoose.model("Menu", menuSchema);