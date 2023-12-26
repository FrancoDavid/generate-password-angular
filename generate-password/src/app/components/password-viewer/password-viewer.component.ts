import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'password-viewer',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
        <section class="generator-container">
            <p>CHUPALO</p>
            
            <aside>
                <img src="./../../assets/icons/copy-svgrepo-com.svg" alt="Copyboard">
            </aside>
        </section>
    `,
    styleUrls: ['./password-viewer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordViewerComponent { }
