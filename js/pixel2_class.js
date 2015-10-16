/**
 * Pixel représente un pixel dans le cadre de dessin
 * @param {number} positionX position horizontale
 * @param {number} positionY position verticale
 * @param {string} color     couleur du pixel
 * @param {number} size      largeur & hauteur du pixel
 */
function Pixel(positionX,positionY,color,size){
 this.$el = $('<div class="pixel"></div>');
 this.$el.css({
  width  : this.size+'px',
  height : this.size+'px',
 });

 this.set_color(color || "red");
 this.set_position(positionX,positionY);
 this.set_size(size || 10);

 pixelStudio.$pixel_tab.append(this.$el);
}

Pixel.prototype = {
 /**
  * Permet de changer la position
  * @param {number} positionX position horizontale
  * @param {number} positionY position verticale
  */
 set_position : function(positionX,positionY){
  this.positionX = positionX;
  this.positionY = positionY;
  this.$el.css({
   top  :(this.positionY-1) * this.size +'px',
   left :(this.positionX-1) * this.size +'px',
  });
 },

 /**
  * Permet de changer la couleur du pixel
  * @param {string} color couleur du pixel
  */
 set_color : function(color){
  this.color = color;
  this.$el.css('background-color', this.color);
 },

 /**
  * Permet de changer la taille du pixel
  * @param {number} size largeur & hauteur du pixel
  */
 set_size : function(size){
  this.size = size;
  this.$el.css({
   height: this.size,
   width: this.size,
  });
 },
}