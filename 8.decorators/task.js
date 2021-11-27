function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = args.join(',');
		let idx = cache.findIndex((item)=> item.hash === hash);
		if (idx !== -1 ) {
			console.log("Из кэша: " + cache[idx].value);
			return "Из кэша: " + cache[idx].value;
        } else {
        	let result = func(...args);
        	cache.push({hash: hash, value: result});
        	if (cache.length > 5) {
        		cache.shift();
        	}
        	console.log("Вычисляем: " + result);
        	return "Вычисляем: " + result; 
        }
	}
	return wrapper;
}


function debounceDecoratorNew(func, interval) {
	let isCalled;
	return function () {
		if (!isCalled) {
			func();
			isCalled = true;
			setTimeout(function() {
				isCalled = false;
			}, interval);
		}
	}
}

function debounceDecorator2(func, interval) {
	let isCalled;
	function wrapper() {
		if (!isCalled) {
			func();
			isCalled = true;
			setTimeout(function() {
				isCalled = false;
			}, interval);
		}
		wrapper.count ++;
	}
	wrapper.count = 0;	 
	return wrapper;
}

