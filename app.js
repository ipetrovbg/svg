const express 		= require('express');

const server 		= express();
const port 			= 8000;

/* static files */
server.use('/public', express.static(__dirname + '/public'));

/* routes */
const routes = {
	Svg: require('./routes/svg.js')
} 

/* users routes */
// server.use('/svg', routes.Svg);

/* sending public/index.html file for all unregistered routes */
server.get('/*', function(req, res){	
	console.log(`http://${req.hostname}:${port + req.url}`);
  	res.sendFile(__dirname + '/public/index.html');
});

/* listen on port */
server.listen(port, function() {
  console.log('server listening on port ' + port);
});