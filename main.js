class Media {
	constructor(title) {
		this._title = title;
		this._isCheckedOut = false;
		this._ratings = 0;
	}

	get title() {
		return this._title;
	}

	get isCheckedOut() {
		return this._isCheckedOut;
	}

	get ratings() {
		return this._ratings;
	}

	set checkout(condition) {
		this._isCheckedOut = condition;
	}

	toggleCheckOutStatus() {
		this._isCheckedOut = !this._isCheckedOut;
	}

	getAverageRating() {
		let ratingsSum = this._ratings.reduce((accumulator, rating) => accumulator + rating);
		return ratingsSum / this._ratings.length;
	}

	addRating(rating) {
		this._ratings.push(rating);
	}
}


class Book extends Media {
	constructor(author, title, pages) {
		super(title);
		this._author = author;
		this.pages = pages;
	}

	get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

}
