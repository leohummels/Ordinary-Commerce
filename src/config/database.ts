import dotenv from 'dotenv'
import pgp from 'pg-promise'
const db = pgp()

dotenv.config()

export const pool = db( {
   connectionString: process.env.DATA_URL
})

