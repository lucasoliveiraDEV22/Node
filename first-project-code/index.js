const port = 4000
const express = require ('express')
const app = express ()
app.get ('/users', (request, response) => {
    return response.send ('Hello Express')
})
app.listen (port, () =>  {
    console.log ('😀 Server started on port 4000')
})
