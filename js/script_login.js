jQuery(document).ready(function() {
	jQuery("#showlogin").click(function() {
        jQuery("#loginpanel").slideToggle('slow', function() {
            jQuery("#triangle_down").toggle(); 
            jQuery("#triangle_up").toggle();
	  });
	});
 });