//Задача №1

function parseCount(value) {
	if (isNaN(Number.parseInt(value))) {
		throw new Error('Невалидное значение');
	}
	return Number.parseInt(value);
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

//Задача №2

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

	
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		let p = (this.a + this.b + this.c) / 2;
		return Number(Math.sqrt (p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return new ErrorTriangle();
	}
}

class ErrorTriangle {
	getPerimeter() {
		return 'Ошибка! Треугольник не существует';
	}
	getArea() {
		return 'Ошибка! Треугольник не существует';
	}
}