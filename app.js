const express = require('express')
const app = express()

app.use('/', express.static('public', {
	index: 'contact.html'
}));

const listener = app.listen(3000, () =>{
	console.log('server has started')
})