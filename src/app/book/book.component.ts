import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BooksService} from "../services/books.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent {
  @Input() titleBook: string;
  @Output() bookClicked = new EventEmitter();

  constructor(private  bookService: BooksService) {
  }

  onClicked() {
    this.bookService.deleteBook(this.titleBook);
  }
}
