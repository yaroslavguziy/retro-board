import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private initBoard = [
    {
      id: 1,
      title: 'To Do',
      color: '#e92c62',
      list: [
        {
          id: 1,
          text: 'Example card item 2',
          like: 1,
          comments: [{ id: 1, text: 'Some comment' }],
        },
        {
          id: 2,
          text: 'Example card item',
          like: 1,
          comments: [{ id: 1, text: 'Some comment' }],
        },
      ],
    },
    {
      id: 2,
      title: 'In progress',
      color: 'green',
      list: [
        {
          id: 2,
          text: 'Example card item',
          like: 3,
          comments: [{ id: 1, text: 'Some comment' }],
        },
      ],
    },
  ];

  private board: any[] = this.initBoard;
  private board$ = new BehaviorSubject<any[]>(this.initBoard);

  getBoard$() {
    return this.board$.asObservable();
  }

  addComment(columnId: number, cardId: number, text: string) {
    this.board = this.board.map((column) => {
      if (column.id === columnId) {
        const list = column.list.map((card: any) => {
          if (card.id === cardId) {
            const newComment = {
              id: Date.now(),
              text,
            };
            card.comments = [newComment, ...card.comments];
          }
          return card;
        });

        column.list = list;
      }
      return column;
    });

    this.board$.next([...this.board]);
  }

  deleteComment(columnId: number, itemId: number, commentId: number) {
    this.board = this.board.map((column) => {
      if (column.id === columnId) {
        const list = column.list.map((item: any) => {
          if (item.id === itemId) {
            item.comments = item.comments.filter((comment: any) => {
              return comment.id !== commentId;
            });
          }
          return item;
        });
        column.list = list;
      }
      return column;
    });
    this.board$.next([...this.board]);
  }
}
