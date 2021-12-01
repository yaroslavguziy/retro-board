import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public boardService: BoardService,
    private authService: AuthService,
    private router: Router
  ) {}

  user: any = {};

  ngOnInit(): void {
    this.authService.authStatusListener();
    this.authService.currentAuthStatus.subscribe((user) => {
      this.user = user;
    });
  }

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
