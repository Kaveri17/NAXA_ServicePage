import { GET_SERVICES, SET_SERVICES } from "./constant";

export const serviceData = (data = [], action) => {
  switch (action.type) {
    case SET_SERVICES:
      console.log("get serivces reducer", action);
      return [...action.data];
    default:
      return data;
  }
};
