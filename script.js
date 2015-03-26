
/*****************************************
******************************************/

var Model = function( name){
	this.name = name;
	this.init();
}

Model.prototype.init = function(){
	Observable.init( this);// add Observable action
	this.trigger('jour');
}


Model.prototype.move = function(){
	this.trigger('moveEvent');
}

Model.prototype.read = function( string){
	if( string.length > 3){
		this.trigger('toBig', [ string.length, 'test']);
	}
}

Model.prototype.on = function( string){
	console.log( 'on intern');
}


/*****************************************
******************************************/
var oModel1 = new Model( 'hello');
var oModel2 = new Model( 'word');

oModel2.on( 'moveEvent read', function(){
	console.log( this.name+' ( move or read)');
});

oModel1.on( 'moveEvent', function(){
	console.log( this.name + ' (move)');
});

oModel2.on( 'toBig', function( num, string){
	this.move();
	console.log( num);
	console.log( string);
});

oModel1.on( 'toBig', function(){
	console.log( 'it\'s too big');
});


oModel2.read('string');