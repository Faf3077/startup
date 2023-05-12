import db from "../config/database.js";

// Get All User
export const getUsers = (result) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

