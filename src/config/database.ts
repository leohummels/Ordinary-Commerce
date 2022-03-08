import {Pool,Client} from 'pg';
import dotenv from 'dotenv'
const pgp = require('pg-promise')();
//const db = pgp('connection')
//import dotenv from 'dotenv/config'

dotenv.config()

    
export const pool = /*new Pool */ pgp( {
   connectionString: process.env.DATA_URL
})


/*pool.query("SELECT * FROM products",  (err, res) => {
    console.log(err, res);
    pool.end();
})*/