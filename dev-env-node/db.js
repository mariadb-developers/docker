import mariadb from 'mariadb'

const pool = mariadb.createPool({
    host: 'mariadb',
    user: 'root',
    password: 'password',
    database: 'food'
})

export default pool