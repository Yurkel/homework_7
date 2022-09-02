"use strict";

const books = [
  {
    name: "The Shining",
    autor: "Stephen King",
    genre: "horror",
    year: 1977,
  },
  {
    name: "Pet Sematary",
    autor: "Stephen King",
    genre: "horror",
    year: 1983,
  },
  {
    name: "Misery",
    autor: "Stephen King",
    genre: "horror",
    year: 1987,
  },
  {
    name: "Something wicked this way comes",
    autor: "Ray Bradbury",
    genre: "horror",
    year: 1962,
  },
  {
    name: "Interview with the Vampire",
    autor: "Anne Rice",
    genre: "horror",
    year: 1976,
  },
  {
    name: "Redshirts",
    autor: "John Scalzi",
    genre: "science",
    year: 2012,
  },
  {
    name: "Rainbows End",
    autor: "Vernor Vinge",
    genre: "science",
    year: 2007,
  },
  {
    name: "The Martian",
    autor: "Andy Weir",
    genre: "science",
    year: 2011,
  },
  {
    name: "The Slithering Shadow",
    autor: "Robert Howard",
    genre: "fantasy",
    year: 1933,
  },
  {
    name: "The Sword in the Stone",
    autor: "Terence White",
    genre: "fantasy",
    year: 1938,
  },
];

const mostGenre = [
  console.log(
    books
      .filter((mostCount) => {
        return mostCount.genre === "horror";
      })
      .map((bookId) => {
        return bookId.name.toUpperCase();
      })
  ),
];

const xxCentury = [
  console.log(
    books
      .filter((centCount) => {
        return centCount.year >= 1900 && centCount.year < 2000;
      })
      .map((bookId) => {
        return bookId.name;
      })
  ),
];

const xiCentury = [
  console.log(
    books
      .filter((centCount) => {
        return centCount.year >= 2000;
      })
      .map((bookId) => {
        return bookId.name;
      })
  ),
];
