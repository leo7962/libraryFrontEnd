import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksSubject = new Subject();
  private books = ['Book of Leo', '100 años de soledad', 'El gráfico revista'];

  addBook(nameBook: string) {
    this.books.push(nameBook);
    //this.booksSubject.next(console.log('New Book added'));
  }

  deleteBook(bookName: string) {
    this.books = this.books.filter((x => x !== bookName))
    //this.booksSubject.next(console.log('Book was deleted'));
  }

  obtainBooks() {
    return [...this.books];
  }

  constructor() {
  }
}
