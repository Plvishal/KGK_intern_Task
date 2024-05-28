import mysql from 'mysql2';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'kgk_task',
});

con.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connected with the MySQL');
});

export { con };
