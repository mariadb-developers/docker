// var express = require('express');
// var app = express();
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });



import express from 'express'
import pool from './db'
const app = express()

// Home Route
app.get('/', async (req, res) => {
    res.json({
        message: 'Docker Service :D'
    })
})

// Route to test database connection
app.get('/desserts', async (req, res) => {
    let conn
    try {
        conn = await pool.getConnection()

        let sql = `SELECT * FROM desserts`
        let result = await conn.query(sql)

        res.send(result)
    } catch (error) {
        throw error
    } finally {
        if (conn) {
            conn.release()
        }
    }
})

const port = process.env.PORT || 8000

// Listening Server
app.listen(port, () => {
    console.log(`Server is up at port:${port}`)
})