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
console.log('Band: ' + aceOfSpades._band);
console.log('Album title: ' + aceOfSpades.title);
console.log('Number of tracks: ' + aceOfSpades._tracks);
aceOfSpades.toggleCheckOutStatus();
console.log('Is checked out: ' + aceOfSpades.isCheckedOut);
aceOfSpades.addRating(9);
aceOfSpades.addRating(8);
aceOfSpades.addRating(10);
console.log('Average rating: ' + aceOfSpades.getAverageRating());
console.log('----------');
console.log();

const foundation = new Book('Isaac Asimov', 'The Foundation', 255);
foundation.toggleCheckOutStatus();
console.log(foundation.isCheckedOut);
foundation.addRating(10);
foundation.addRating(10);
foundation.addRating(7);
console.log(foundation.getAverageRating());
console.log('----------');

const taxiDriver = new Movie('Martin Scorsese', 'Taxi Driver', 114);
taxiDriver.toggleCheckOutStatus();
console.log(taxiDriver.isCheckedOut);
taxiDriver.addRating(7);
taxiDriver.addRating(9);
taxiDriver.addRating(7);
console.log(taxiDriver.getAverageRating());
console.log('----------');