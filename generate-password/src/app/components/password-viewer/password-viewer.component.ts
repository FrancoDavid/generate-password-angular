import { CopyToClipboardDirective } from './../../directives/copyToClipboard.directive';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
    selector: 'password-viewer',
    standalone: true,
    imports: [
        CommonModule,
        CopyToClipboardDirective
    ],
    template: `
        <section class="generator-container">
            <p>{{value}}</p>
            
            <aside [copyToClipboard]="value" (click)="onClickCopy()">
                <img src="./../../assets/icons/copy-svgrepo-com.svg" alt="Copyboard">
                <p *ngIf="isShowMessageClicked">Copied!</p>
            </aside>
        </section>
    `,
    styleUrls: ['./password-viewer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordViewerComponent {
    @Input() value: string;

    public isShowMessageClicked: boolean;

    constructor(private _changeRef: ChangeDetectorRef) {
        this.value = '';
        this.isShowMessageClicked = false;
    }

    public onClickCopy(): void {
        this.isShowMessageClicked = true;

        setTimeout(() => {
            this.isShowMessageClicked = false;
            this._changeRef.markForCheck();
        }, 500);
    }
}
