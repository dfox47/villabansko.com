var $ = jQuery;

$( document ).ready(function(){
	if( 'devicePixelRatio' in window && window.devicePixelRatio == 2 ){
		var img_to_replace = jQuery( 'img.retina' ).get();

		for (var i=0,l=img_to_replace.length; i<l; i++) {
			var src = img_to_replace[i].src;

			src = src.replace(/\.(png|jpg|gif)+$/i, '_retina.$1');

			img_to_replace[i].src = src;
		}
	}
});