const mysql = require('mysql2');

const createFARdbConnection = () => {
    const fardb0 = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin123',
        database: 'far_db0'
    });

    fardb0.connect((err) => {
        if (err) {
            console.error('Error connecting to AFR database:', err);
            process.exit(1);
        }
        console.log('DB connected');
    });

    return fardb0;
};

module.exports = createFARdbConnection;
