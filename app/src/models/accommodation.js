import mongoose from "mongoose";

const accommodationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  hostImage: {
    type: String,
  },
  summary: {
    type: String,
  },
  space: {
    type: String,
  },
  description: {
    type: String,
  },
  rooms: {
    type: Number,
    min: 1,
  },
  price: {
    type: Number,
  },
  image: [
    {
      type: String,
    },
  ],
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  category: {
    type: String,
    minLength: 1,
  },
  bedrooms: {
    type: Number,
  },
  bathrooms: {
    type: Number,
  },
  parking: {
    type: Boolean,
  },
  wifi: {
    type: Boolean,
  },
  number_of_reviews: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  reviews: [
    {
      userName: {
        type: String,
      },
      comment: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      rating: {
        type: Number,
      },
    },
  ],
  tv: {
    type: Boolean,
  },
  air_condition: {
    type: Boolean,
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
});

mongoose.set("strictQuery", false);

const AccModel = mongoose.model("Accommodation", accommodationSchema);

export default AccModel;
