import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "Samantha Smith",
    bio: "Passionate about exploring new cultures and cuisines. Lover of books, music, and outdoor adventures.",
    location: "New York, USA",
    language: "English",
    email: "samantha.smith@example.com",
    phone: "+1 (555) 123-4567",
    birthdate: "1988-07-15",
    member_since: "2015-03-20",
    profile_picture_url: "https://randomuser.me/api/portraits/women/56.jpg",
    gender: "female",
    occupation: "Dancer",
    your_places: [
      {
        name: "jjjjjj",
        url: "https://a0.muscache.com/im/pictures/007104ff-8fa8-4d78-a8e7-ed01912d0196.jpg?aki_policy=x_large",
      },
      {
        name: "llllll",
        url: "https://a0.muscache.com/im/pictures/1384e910-39e6-4a6b-8338-ab0461e7dd23.jpg?aki_policy=x_large",
      },
      {
        name: "eeee",
        url: "https://a0.muscache.com/im/pictures/a4393e72-642f-4c4d-904b-61417ba46037.jpg?aki_policy=x_large",
      },
      {
        name: "hhhh",
        url: "https://a0.muscache.com/im/pictures/100334863/87ec8951_original.jpg?aki_policy=x_large",
      },
    ],
  },
  reducers: {},
});

export default profileSlice.reducer;
