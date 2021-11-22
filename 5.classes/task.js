//Задача №1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		}
		if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}

}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

//Задача №2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
				}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let book = this.books[i];
				this.books.splice(i, 1);
				return book;
				}
		}
		return null;
	}
}

//Задача №3

class Student {
	constructor(name) {
		this.name = name;
		this.marks =[];
	}
	addMark(mark, subject) {
		if (mark > 0 && mark < 6) {
			this.marks.push(new Mark(mark, subject));
		}
		else {
			console.log('Ошибка, оценка должна быть числом от 1 до 5');
			}	
	}

	getAverageBySubject(subject) {
		let sum = 0;
		let count = 0;
		for (let i = 0; i < this.marks.length; i++) {
			if (this.marks[i].subject === subject) {
				sum += this.marks[i].mark;
				count++;
			}
		}
		if (count != 0) {
			return sum/count;
		}
		else {
			return 0;
		}		
	}

	getAverage() {
		let sum = 0;
		for (let i = 0; i < this.marks.length; i++) {
			sum += this.marks[i].mark;
		}
		if (this.marks.length != 0) {
			return sum/this.marks.length;
		}
		else {
			return 0;
		}		
	}
}

class Mark {
	constructor(mark, subject) {
		this.mark = mark;
		this.subject = subject;
	}
}

