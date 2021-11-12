const SIGN_UP_USER = 
`insert into users(email, password)
values ($1, $2)
returning id;`

const GET_USER = 
`select id, email, password from users where email = $1;`

module.exports = {
    SIGN_UP_USER,
    GET_USER
};