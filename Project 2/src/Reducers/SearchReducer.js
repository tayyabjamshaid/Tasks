import { createReducer } from "@reduxjs/toolkit";

/* Reducer */

const initialState = {
  tableUsers: [
    {
      id: 1,
      address: "Johar Town",
      postCode: 699,
      propertyType:"Flat",
      numberOfRooms:8,
      area:78
    },
    {
        id: 2,
        address: "Gulberg",
        postCode: 789,
        propertyType:"Terraced house",
        numberOfRooms:8,
        area:78
      },
      {
        id: 3,
        address: "Valencia Town",
        postCode: 699,
        propertyType:"Semi-detached",
        numberOfRooms:8,
        area:78
      },
      {
        id: 4,
        address: "Johar Town",
        postCode: 6991,
        propertyType:"Flat",
        numberOfRooms:7,
        area:32
      },
      {
        id: 5,
        address: "Shalamar Town",
        postCode: 865,
        propertyType:"Semi-detached",
        numberOfRooms:4,
        area:967
      },
      {
        id: 6,
        address: "Harbanspura Town",
        postCode: 549,
        propertyType:"Terraced house",
        numberOfRooms:8,
        area:71
      },
      {
        id: 7,
        address: "Johar Town",
        postCode: 699,
        propertyType:"Flat",
        numberOfRooms:3,
        area:78
      },
      {
        id: 8,
        address: "Bahria Town",
        postCode: 845,
        propertyType:"Semi-detached",
        numberOfRooms:4,
        area:42
      },
      {
        id: 9,
        address: "Thokar Town",
        postCode: 172,
        propertyType:"Terraced house",
        numberOfRooms:2,
        area:63
      },
      {
        id: 10,
        address: "Ichra Town",
        postCode: 499,
        propertyType:"Semi-detached",
        numberOfRooms:8,
        area:712
      },
  ],
};

const reducer = createReducer(initialState, {});

export default reducer;