import { conn } from "../../db/conn";

export async function getAllUser() {
  try {
    const [data] = await conn.query("select * from customers");
    return data;
  } catch (error) {
    return error;
  }
}

export async function getUserByCustomerId(customer_id: number) {
  try {
    const [data] = await conn.query(
      `select * from customers where customer_id = ${customer_id}`
    );
    return data;
  } catch (error) {
    return error;
  }
}
