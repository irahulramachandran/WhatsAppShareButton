(function($) {
	$.fn.whatsappsharebutton = function( options ) {

		// Default settings
		var settings = $.extend({
	        buttonText					: "Share",
	        size						: 1, //1-> sm, 2-> xs
	        message 					: "",
	        showCustomMessagePopup		: false
	    }, options);

	    return this.each( function() {
	    	$(this).addClass("btn-whatsapp");
	    	if ( settings.size == 1)
    		{
    			$(this).addClass("btn-whatsapp-sm");
    		}
    		else{
    			$(this).addClass("btn-whatsapp-xs");
    		}
    		$(this).addClass("whatsappbtn-hidden");
    		$(this).html("<span class='whatsappicon'></span>");
    		$(this).append(settings.buttonText);
    		if(settings.buttonText == ""){
    			$(this).find(".whatsappicon").css({"margin": "0px"});
    		}
    		$(this).click(function(event){
    			event.stopPropagation();
    		});
	    });
		return this;
    }
}(jQuery));