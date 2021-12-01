import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/column.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment?: Comment | any;
  @Output() emitComment: EventEmitter<Comment> = new EventEmitter();

  constructor(private authService: AuthService) {}

  user: any = {};

  ngOnInit(): void {
    this.authService.currentAuthStatus.subscribe((user) => {
      this.user = user;
    });
  }

  onCommentEmit(comment: Comment) {
    this.emitComment.emit(comment);
  }
}
