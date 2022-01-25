class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
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

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(band, title, tracks) {
    super(title);
    this._band = band;
    this._tracks = tracks;
  }

  get band() {
    return this._band;
  }

  get tracks() {
    return this._tracks;
  }
}

const aceOfSpades = new CD('Motorhead', 'Ace Of Spades', 12);
console.log()
console.log('Band: ' + aceOfSpades.band);
console.log('Album title: ' + aceOfSpades.title);
console.log('Number of tracks: ' + aceOfSpades.tracks);
aceOfSpades.toggleCheckOutStatus();
console.log('Is checked out: ' + aceOfSpades.isCheckedOut);
aceOfSpades.addRating(9);
aceOfSpades.addRating(8);
aceOfSpades.addRating(10);
console.log('Average rating: ' + aceOfSpades.getAverageRating());
console.log();
console.log('----------');


const foundation = new Book('Isaac Asimov', 'The Foundation', 255);
console.log()
console.log('Author: ' + foundation.author);
console.log('Book title: ' + foundation.title);
console.log('Number of pages: ' + foundation.pages);
foundation.toggleCheckOutStatus();
console.log('Is checked out: ' + foundation.isCheckedOut);
foundation.addRating(9);
foundation.addRating(8);
foundation.addRating(10);
console.log('Average rating: ' + foundation.getAverageRating());
console.log();
console.log('----------');

const taxiDriver = new Movie('Martin Scorsese', 'Taxi Driver', 114);
console.log()
console.log('Director: ' + taxiDriver.director);
console.log('Movie title: ' + taxiDriver.title);
console.log('Run time: ' + taxiDriver.runTime);
taxiDriver.toggleCheckOutStatus();
console.log('Is checked out: ' + taxiDriver.isCheckedOut);
taxiDriver.addRating(9);
taxiDriver.addRating(8);
taxiDriver.addRating(10);
console.log('Average rating: ' + taxiDriver.getAverageRating());
console.log();
console.log('----------');
