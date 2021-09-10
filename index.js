// Activity:

// 1. Create a folder "activity" inside s26. Create an index.js and use the npm init -y to initialize the package.json and to used the npm start with nodemon.
// 2. Create a simple server using Node JS that will have an access to a /login route and a response of an error when accessing any other routes
// 3. Initialize a local git repository, add the remote link and push to git with the commit message of S26 Activity
// 4. Add the link in Boodle. Node Js Introduction


const http = require('http');

const port = 3000

const server = http.createServer((request, response) => {
	if(request.url == '/login'){
		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.end('Welcome. This is the login page.')
	} else {
		response.writeHead(404,{'Content-Type': 'text/plain'})
		response.end('The page you are looking for does not exist.')
	}
});


server.listen(port);


console.log(`Server now accessible at localhost:${port}`); 