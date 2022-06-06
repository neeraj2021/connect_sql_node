import mysql from "mysql2";
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Neeraj@123",
  database: "store",
});

export const conn = connection.promise();
