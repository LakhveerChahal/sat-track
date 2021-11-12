const pool = require('../db/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const loginQueries = require('../queries/login-queries/login.queries');

const signup = async (email, password) => {
    try {
        // Encrypt password
        const hashedPassword = await bcrypt.hash(password, 5);

        const result = await pool.query(loginQueries.SIGN_UP_USER, [email, hashedPassword]);
        // Create token
        const token = jwt.sign(
            { user_id: result.rows[0].id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        );

        const user = {
            token: token,
            email: email,
        }
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getUser = async (email) => {
    try {
        const result = await pool.query(loginQueries.GET_USER, [email]);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
};

const getLoggedInUser = async(email, password) => {
    try {
        let loggedInUser = null;
        const user = await getUser(email);

        // check if user exists and confirm password
        if(!(user && await bcrypt.compare(password, user.password))) {
            return loggedInUser;
        }

        // create token
        const token = jwt.sign(
            {user_id: user.id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        );

        loggedInUser = {
            token,
            email
        }
        return loggedInUser;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    signup,
    getUser,
    getLoggedInUser
};