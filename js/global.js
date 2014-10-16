// JavaScript Document
$(function(){
	//ê������
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = jQuery(this.hash);
			var $url = this.hash.slice(1);
			var $scrollTime = 3000;


			function updateUrl() {
				window.location.hash = encodeURIComponent($url);
			}
			
			$target = $target.length && $target || jQuery('[name=' + $url + ']');
			if (!$url) {
				return false;
			} else if ($target.length) {
				var targetOffset = $target.offset().top;
				jQuery('html,body').animate({
					scrollTop: targetOffset
				}, $scrollTime);
				setTimeout(updateUrl, $scrollTime + 100)
				return false;
			}
		}
	});
});