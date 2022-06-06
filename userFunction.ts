import mysql from "mysql2";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Neeraj@123",
  database: "store",
});

export async function getAllUser() {
  try {
    const conn = connection.promise();
    const [rows] = await conn.query("select * from customers");
    return rows;
  } catch (error) {
    return error;
  }
}

export async function getUserByCustomerId(customer_id: number) {
  try {
    const conn = connection.promise();
    const [rows] = await conn.query(
      `select * from customers where customer_id = ${customer_id}`
    );
    return rows;
  } catch (error) {
    return error;
  }
}
