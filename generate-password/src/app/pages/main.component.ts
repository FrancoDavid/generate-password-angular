import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'main-page',
    template: `
        <main>
            <h1>Password Generator</h1>
            <password-viewer
                [value]="passwordValue">
            </password-viewer>
            <params-form
                (eventGenerated)="onGeneratePassword($event)">
            </params-form>
        </main>
    `,
    styleUrls: ['./main.component.css'],
})
export class MainComponent {

    public passwordValue: string;

    constructor() {
        this.passwordValue = '';
    }

    public onGeneratePassword(event: string): void {
        this.passwordValue = event;
    }

}
