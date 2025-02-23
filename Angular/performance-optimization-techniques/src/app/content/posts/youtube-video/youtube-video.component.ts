import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export default class YoutubeVideoComponent {
  @Input() videoId!: string;
  isPlaying = false;
  safeVideoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  get thumbnailUrl(): string {
    return `https://img.youtube.com/vi/${this.videoId}/hqdefault.jpg`;
  }

  private get videoUrl(): string {
    return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&rel=0`;
  }

  playVideo() {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    this.isPlaying = true;
  }
}
