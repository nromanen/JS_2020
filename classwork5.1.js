var user = {
	name: "tom"
};

function format (beginMsg, endMsg) {
	console.log (beginMsg + this.name + endMsg);

}


var tomFormat = format.bind(user);
tomFormat("<<<", ">>>");
	
	var tomFormat =( a, b ) =>{
		format.call(user, a, b);
	};
tomFormat("<<<", ">>>");



