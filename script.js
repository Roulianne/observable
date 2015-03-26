
/*****************************************
******************************************/

var Model = function( name){
	this.name = name;
	this.init();
}

Model.prototype.init = function(){
	Observable.init( this);// add Observable action
}


Model.prototype.move = function(){
	this.trigger( 'moveEvent');
}

Model.prototype.read = function( string){
	if( string.length > 3){
		this.trigger( 'tooBigEvent', [ string.length, string]);
	}
}

Model.prototype.on = function( string){
	console.log( 'on intern');
}


/*****************************************
******************************************/
var oModelDupond = new Model( 'dupond');
var oModelMarcel = new Model( 'marcel');

oModelMarcel.on( 'moveEvent', function(){
	console.log( this.name+' ( move )');
});

oModelDupond.on( 'moveEvent', function(){
	console.log( this.name + ' (move)');
});

oModelMarcel.on( 'tooBigEvent', function( num, string){
	this.move();
	console.log( string, num);
});

oModelDupond.on( 'tooBigEvent', function(){
	console.log( 'it\'s too big');
});


oModelMarcel.read('string');