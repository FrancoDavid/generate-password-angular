import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'force-meter',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
        <aside class="force-container">
            <p>STRENGTH</p>
            <div>
                <p>MEDIUM</p>
                <div class="force-params force-filled"></div>
                <div class="force-params"></div>
                <div class="force-params"></div>
                <div class="force-params"></div>
            </div>
        </aside>
    `,
    styleUrls: ['./force-meter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForceMeterComponent { }
