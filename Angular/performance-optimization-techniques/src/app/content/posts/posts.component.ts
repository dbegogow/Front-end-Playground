import { Component } from '@angular/core';
import YoutubeVideoComponent from './youtube-video/youtube-video.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [YoutubeVideoComponent],
})
export default class PostsComponent {}
