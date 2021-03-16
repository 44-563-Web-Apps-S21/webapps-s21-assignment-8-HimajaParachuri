const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<table>')
      res.write('<tr> <th>Location</th><th>Stay</th><th>Budget</th></tr>')
      res.write('<tr><td>San Francisco</td><td>3</td><td>350</td> </tr>')
      res.write('<tr><td>Los Angeles</td><td>1</td><td>150</td> </tr>')
      res.write('<tr><td>San Diego</td> <td>2</td> <td>170</td> </tr>')
      res.write('<tr><td>Santa Barbara</td><td>1</td><td>300</td></tr>')
      res.write('</table>')  
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})