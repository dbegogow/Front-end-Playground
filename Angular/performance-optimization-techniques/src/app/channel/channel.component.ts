import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'app-channel',
    template: `<p>Channel "{{name}}"</p>`,
    styleUrls: ['./channel.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelComponent {
    @Input() name = '';
}