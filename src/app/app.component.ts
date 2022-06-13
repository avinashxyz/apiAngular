import { Component } from '@angular/core';
import { FreeApiService } from './free-api.service';
import { comments } from './classes/comments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fetchRemoteJson';

  lstComments: comments[] = [];

  /* injecting free api service */

  constructor(private freeApiService: FreeApiService) {}

  ngOnInit() {
    this.freeApiService.getcomments().subscribe((data) => {
      this.lstComments = data;
    });
  }
}
