function bodyHeight() {

	var w = window,
	    d = document,
	    e = d.documentElement,
	    g = d.getElementsByTagName('body')[0],
	    x = w.innerWidth || e.clientWidth || g.clientWidth,
	    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

	if ( x > 1000) {
		if (window.screenTop && window.screenY) {
		    g.style.height = 'auto';
		} else {
			g.style.height = '100%';
		}
	}
}

bodyHeight();

window.addEventListener('resize', function(event){
  bodyHeight();
});



