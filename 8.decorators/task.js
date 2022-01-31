function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = args.join(',');
		let idx = cache.findIndex((item)=> item.hash === hash);
		if (idx !== -1 ) {
			console.log("Из кэша: " + cache[idx].value);
			return "Из кэша: " + cache[idx].value;
		}
		let result = func(...args);
		cache.push({hash, value: result});
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result; 
	}
	return wrapper;
}


function debounceDecoratorNew(func, interval) {
	let isCalled;
	let timeout;
	return function (...args) {
		clearTimeout(timeout);

		timeout = setTimeout(function() {
			func(...args);
			isCalled = false;
		}, interval);

		if (!isCalled) {
			func();
			isCalled = true;
		}
	}
}

function debounceDecorator2(func, interval) {
	let isCalled;
	let timeout;

	function wrapper(...args) {
		clearTimeout(timeout);

		timeout = setTimeout(function() {
			func(...args);
			isCalled = false;
			wrapper.count++;
		}, interval);

		if (!isCalled) {
			func(...args);
			wrapper.count++;
			isCalled = true;
		}
	}
	wrapper.count = 0;
	return wrapper;
}

