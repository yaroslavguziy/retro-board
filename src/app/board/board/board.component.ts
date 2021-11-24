import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { BoardService } from './../../services/board.service';
import { Card, Comment } from 'src/app/models/column.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(public BoardService: BoardService) {}

  ngOnInit(): void {}

  onColorChange(color: string, columnId: number) {
    this.BoardService.changeColumnColor(color, columnId);
  }

  onDeleteColumn(columnId: number) {
    this.BoardService.deleteColumn(columnId);
  }

  onAddCard(text: string, columnId: number) {
    if (text) {
      this.BoardService.addCard(text, columnId);
    }
  }

  onDeleteCard(cardId: number, columnId: number) {
    this.BoardService.deleteCard(cardId, columnId);
  }

  onAddComment(event: { id: number; text: string }, columnId: number) {
    this.BoardService.addComment(columnId, event.id, event.text);
  }

  onDeleteComment(comment: Comment, columnId: number, item: any) {
    this.BoardService.deleteComment(columnId, item.id, comment.id);
  }

  onChangeLike(event: { card: Card; increase: boolean }, columnId: number) {
    const {
      card: { id },
      increase,
    } = event;
    this.BoardService.changeLike(id, columnId, increase);
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
