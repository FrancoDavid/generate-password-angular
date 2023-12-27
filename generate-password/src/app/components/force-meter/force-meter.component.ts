import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

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
                <p *ngIf="level != 'NONE'">{{level}}</p>
                <div class="force-params" [ngClass]="{'force-filled': level !== 'NONE'}"></div>
                <div class="force-params" [ngClass]="{'force-filled': level !== 'NONE' && level !== 'WEAK'}"></div>
                <div class="force-params" [ngClass]="{'force-filled': level === 'STRONG' || level === 'EXTREME'}"></div>
                <div class="force-params" [ngClass]="{'force-filled': level === 'EXTREME'}"></div>
            </div>
        </aside>
    `,
    styleUrls: ['./force-meter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForceMeterComponent implements OnChanges {
    
    @Input() params: {
        characterLength: number;
        includedUppercase: boolean;
        includedLowercase: boolean;
        includedNumber: boolean;
        includedSymbols: boolean;
    };

    public level: 'NONE' | 'WEAK' | 'MEDIUM' | 'STRONG' | 'EXTREME';

    constructor() {
        this.level = 'NONE';
        this.params = {
            characterLength: 1,
            includedUppercase: true,
            includedLowercase: false,
            includedNumber: false,
            includedSymbols: false
        };
    }

    ngOnChanges(): void {
        this._setLevel();
    }

    private _setLevel(): void {

        const countParamsActive = this._countersParams();

        if ((this.params.characterLength < 6)) {
            this.level = (countParamsActive <= 1) ? 'WEAK': 'MEDIUM';

        } else if ((this.params.characterLength > 6 && this.params.characterLength <= 15)) {
            this.level = (countParamsActive <= 2) ? 'MEDIUM': 'STRONG';

        } else if ((this.params.characterLength > 15 && this.params.characterLength <= 25)) {
            this.level = (countParamsActive <= 3) ? 'STRONG' : 'EXTREME';
            
        } else if (this.params.characterLength > 25) {            
            this.level = "EXTREME";

        } else {
            this.level = 'NONE';

        }
    }

    private _countersParams(): number {
        return Object.keys(this.params).filter((key) => {
        
            if (key !== 'characterLength') {
                return (this.params[key as keyof {
                    characterLength: number;
                    includedUppercase: boolean;
                    includedLowercase: boolean;
                    includedNumber: boolean;
                    includedSymbols: boolean;
                }]);
            }

            return false;
        
        }).length;
    }
    
}
