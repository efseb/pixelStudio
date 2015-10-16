
var pixelStudio = {

	pixel_dimension: 20,
	$draw: null,

	pixels: [],

	init: function(){
		var self =this;

		this.init_draw();
		this.$draw.on('mousedown', function(e){
			console.log(e);

			var x = Math.floor(e.offsetX/self.pixel_dimension)+1;
			var y = Math.floor(e.offsetY/self.pixel_dimension)+1;

			var p = new Pixel(x,y,self.pixel_dimension,'#ff0000');
		});
	},

	init_draw: function(){
		this.$draw = $('<div id="draw"></div>');
		$('body').append(this.$draw);

		var w 	= window.innerWidth/this.pixel_dimension;
		w 		= Math.floor(w - (w/6));
		var h 	= Math.floor(window.innerHeight/this.pixel_dimension);

		console.log(w,h);

		this.$draw.css({
			width 	: (w*this.pixel_dimension) + 'px',
			height 	: (h*this.pixel_dimension) + 'px',
			right: 0
		})
	}
};