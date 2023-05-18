import http from "./http";

const GetAllProducts = async () => {
  const result = await http.get(`/mall`);
  console.log(result);
  return result.data;
};
export { GetAllProducts };