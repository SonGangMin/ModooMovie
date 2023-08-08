import client from "../client";

export const AdminCinema = ({ page, category }) => {
  console.log("dddddddddddddddddd", page, category);
  return client.get(`/admin/cinema/${page}`, { params: { category } });
};
