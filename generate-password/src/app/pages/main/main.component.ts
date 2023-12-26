import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'main-page',
    template: `
        <main>
            <h1>Password Generator</h1>
            <password-viewer></password-viewer>
            <params-form></params-form>
        </main>
    `,
    styleUrls: ['./main.component.css'],
})
export class MainComponent { }
