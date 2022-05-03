const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))
const users = [
    {
        name: 'cr7'
    },
    {
        name: 'Cavani'
    }
]

app.put('/v1/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        elements: users
    })
})

app.listen(3000, () => {
    console.log(`server is running on port 3000`);
})