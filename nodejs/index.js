const projects = require('./data-store');
let server;

let http_server = require('http');
http_server.createServer((req,res)=>{
	const url = req.url;
	const method = req.method;
	const projectId = url.split('/')[2];
	console.log("url is ",url,"  ",projectId,"   ",method);
	
	if(method == 'GET' && url == '/projects/'+projectId && !!projectId){
		let projectIds = [];
		for(const {id:n} of projects){
			projectIds.push(n);
			console.log(`id is ${n}`);
		}
		if(projectIds.indexOf(+projectId) != -1){
			console.log("correct url");
		}
		console.log(projectIds,"   ",projectIds.indexOf(+projectId),"  projectId ",projectId);
		console.log('/projects/'+projectId);
		console.log("came inside");
		if(projectIds.indexOf(+projectId) != -1){
			console.log(getProject(projects,projectId)," projects ",projects);
			let matchedData = projects.filter((o,value) => {
				console.log(o.id ,"  --- ",+projectId);
				if(o.id == +projectId) return o;
			})
			if(matchedData.length){
				res.writeHead(200,{'Content-Type':'application/json'});
				return res.end(JSON.stringify(matchedData[0]));
			}
			
		} else {
			res.writeHead(404);
			return res.end();
		}
		
	} else {
		console.log("came wrong inside");
		res.writeHead(400,{'Content-Type':'application/json'});
		return res.end(JSON.stringify({message:'BAddD REQUEST'}));
	}
	
	
}).listen(8082);


let getProject = (items,projectId) =>{
	//return new Promise((resolve,reject)=>{
		console.log(items,"items");
		items.filter((o,value) => {
			console.log(o.id ,"  --- ",+projectId);
			if(o.id == +projectId) return o;
		})
	//resolve(getData());
	//})
	
		
	
}


console.log(projects,"  server");
module.exports = server;
