import mysql from 'mysql2';
import dontenv from 'dotenv';
dontenv.config();
const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

con.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connected with the MySQL');
});

export default con.promise();
