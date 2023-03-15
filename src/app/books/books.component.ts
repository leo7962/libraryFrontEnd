import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from "../services/books.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit, OnDestroy {
  books = [];
  private bookSubscription: Subscription;

  constructor(private bookService: BooksService) {

  }

  deleteBook(book) {

  }

  saveBook(f) {
    if (f.valid) {
      this.bookService.addBook(f.value.nameBook);
    }
  }

  ngOnInit() {
    this.books = this.bookService.obtainBooks();
    this.bookSubscription = this.bookService.booksSubject.subscribe(() => {
      this.books = this.bookService.obtainBooks();
    });
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }
}
