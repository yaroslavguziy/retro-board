import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/column.model';
@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment?: Comment | any;
  @Output() emitComment: EventEmitter<Comment> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCommentEmit(comment: Comment) {
    this.emitComment.emit(comment);
  }
}
