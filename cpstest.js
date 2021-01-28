{
	var started, resetTimeoutHandle, resetTimeout = 1000,
	container = document.getElementById('container'),
	counter = document.getElementById('counter'),
	zone = document.getElementById('zone'),
	clicks = 0;
	
	zone.onselect = zone.onselectstart = function() {
		return false;
	};
	
	function clicksPerSecond(started, clicks) {
		var numClicks = clicks / ((new Date()) - started) * 1000;
		return Math.round(numClicks * 10) / 10;
	}
	
	function count() {
		clearTimeout(resetTimeoutHandle);
		clicks++;
		counter.innerText = clicksPerSecond(started, clicks);
		resetTimeoutHandle = setTimeout(reset, resetTimeout);
		return false;
	}
	
	function start() {
		started = new Date();
		clicks = 0;
		counter.style.opacity = 1;
		this.onmousedown = count;
		this.onmousedown();
		return false;
	}
	
	function reset() {
		zone.onmousedown = start;
		counter.style.opacity = 0.3;
	}
	
	reset();
	
	document.getElementById('confirmInfo').onclick = ()=> {
		document.getElementById('confirmInfo').classList.add('hidden');
		document.getElementById('infoDipslay').classList.add('hidden');
		document.body.style.height = '300px';
	};
	}