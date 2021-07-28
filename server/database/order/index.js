import Mongoose from "mongoose";

const OrdersSchema = new Mongoose.Schema({
    user: {
        type: Mongoose.Types.ObjectId,
        ref: "Users",
    },
    orderDetails: [
        {
            food: {type: Mongoose.Types.ObjectId, ref: "Foods"},
            quantity: {type: Number, required: true},
            paymode: {type: String, required: true},
            status: {type: String, required: "Placed"},
            paymentDetails: {
                itemTotal: {type: Number, required: true},
                promo: {type: Number, required: true},
                tax: {type: Number, required: true},
            },
        },
    ],
    orderRatings: {
      type:Number,
      required: true,
    },
},
{
    timestamps: true,
}
);

export const OrderModel = Mongoose.model("Orders",OrderSchema);