import axios from "axios";

export const getAllOrders = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/api/v1/menu/dish?resturant_id=1`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6Ind0Z2loYW5AZ21haWwuY29tIiwiaWF0IjoxNjg3MDI4MTgzLCJleHAiOjE2ODcxNzgxODN9.ZkmFEEYHgJlo1ShLGdSmpgSRCrtEq7KupqjzDORecRw",
      },
    }
  );
};
