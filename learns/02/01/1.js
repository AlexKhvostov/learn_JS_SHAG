'use strict';

const homeLibrary = {
  books: [],

  bookSearch: function (author = '', name = '', year = '') {
    let lib = [];
    if (author !== '') {
      lib = this.books.filter((e) => e.author == author);
    }
    if (name !== '') {
      lib = this.books.filter((e) => e.name == name);
    }
    if (year !== '') {
      lib = this.books.filter((e) => e.year == year);
    }
    return lib;
  },

  delite: function (year) {
    let i = this.books.findIndex((e) => e.year == year);
    this.books.splice(i, 1);
  },

  sortForAuthor: function () {
    this.books.sort((e1, e2) => (e1.author < e2.author ? -1 : 1));
  },

  sortForCountPage: function () {
    this.books.sort((e1, e2) => e1.countPage - e2.countPage);
  },
};

function Book(author, name, year, countPage) {
  this.author = author;
  this.name = name;
  this.year = year;
  this.countPage = countPage;

  if (new.target) {
    homeLibrary.books.push(this);
  }
}

let book1 = new Book('Лукъяненко', 'Лабиринт отражений', '1993', '202');
let book2 = new Book('Лукъяненко', 'Черновик', '2017', '402');
let book3 = new Book('Тургеньев', 'му-му', '1963', '34');
let book4 = new Book('Коэлье', 'Алхимик', '2002', '299');

console.log(homeLibrary.books);

console.log(homeLibrary.bookSearch(false, false, 2017));

homeLibrary.delite(1993);
console.log(homeLibrary.books);
homeLibrary.sortForAuthor();
// homeLibrary.sortForCountPage();

console.log(homeLibrary.books);
