import mysql from 'mysql';

const connection = mysql.createConnection({
  host: '92.175.11.66', // adresse du serveur
  port: 1234,
  user: 'easylunch', // le nom d'utilisateur
  password: 'easylunch', // le mot de passe
  database: 'database_prod' // le nom de la base de données
});

export default connection;
