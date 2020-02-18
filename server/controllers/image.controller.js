var http = require('http'),                                                
    Stream = require('stream').Transform,                                  
    fs = require('fs');    
const url = require('url');
const querystring = require('querystring');                                               

module.exports.Download = (req, res, next) =>{

	//var url = 'http://www.google.com/images/srpr/logo11w.png';                    
	let imageUrl = req.query.url;
	console.log(imageUrl);
	var dir = './download';

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        var filename = dir+'/image.png';
        http.request(imageUrl, function(response) {                                        
  				var data = new Stream();                                                    

  				response.on('data', function(chunk) {                                       
    				data.push(chunk);                                                         
  				});                                                                         

  				response.on('end', function() {                                             
    				fs.writeFileSync(filename, data.read());   
    				console.log("image downloaded succesfully");
    				next();                            
  				});                                                                         
			}).end();
}

		//imageresize FUNCTION
module.exports.Resize = (req, res, next) =>{
            console.log("In Image RESIZE")
            // input stream
            var inputFile=require('path').join(__dirname,'../download/image.png');
            var outputFile=require('path').join(__dirname,'../download/output.png');
            console.log(inputFile);
            console.log(outputFile);
            //let inStream = fs.createReadStream(inputFile);
            
            // input stream transformer
            // "info" event will be emitted on resize
            				sharp(inputFile)
                                .resize(50, 50)
                                .toFile(outputFile, function(err){
                                	if(!err){
                                		console.log("Resized succesfully");
                                		res.end;
                                	}
                                });
            //res.type('image/png');  
            //console.log("transform");                  
            //return inStream.pipe(transform);
        }   
