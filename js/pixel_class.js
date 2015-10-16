/**
 * Pixel représente un pixel dans le cadre de dessin
 * @param {number} x     positionnement horizontal
 * @param {number} y     positionnement vertical
 * @param {number} size  largeur & hauteur du pixel
 * @param {string} color couleur du pixel
 */
function Pixel(x, y, size, color){

	this.$el = $('<div class="pixel"></div>');

	this.set_color(color || '#ff0000');
	this.set_size(size);
	this.set_position(x,y);

	pixelStudio.$draw.append(this.$el);
}

Pixel.prototype = {
	/**
	 * Permet de changer la position du pixel
	 * @param {string} x positionnement horizontal
	 * @param {string} y positionnement vertical
	 */
	set_position: function(x,y){
		this.x = x;
		this.y = y;
		this.$el.css({
			left	: (this.x -1) * this.size + 'px',
			top		: (this.y -1) * this.size + 'px',
		});
	},
	/**
	 * Permet de changer la taille du pixel
	 * @param {string} size taille du pixel en hauteur et largeur
	 */
	set_size: function(size){
		this.size = size || 10;
		this.$el.css({
			width		: this.size,
			height		: this.size,
		});
	},
	/**
	 * Permet de changer la couleur du pixel
	 * @param {string} color couleur du pixel
	 */
	set_color: function(color){
		this.color = color || '#ff0000';
		this.$el.css('backgroundColor', this.color);
	}
}