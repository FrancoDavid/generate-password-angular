import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ForceMeterComponent } from "../force-meter/force-meter.component";
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'params-form',
    standalone: true,
    template: `
        <section class="generator-container">
            <form [formGroup]="generatorForm">
                <aside class="params-description">
                    <p>Character Length</p>
                    <p>{{controls['characterLength'].value}}</p>
                </aside>
                
                <aside class="params-slider">
                    <input
                        type="range"
                        min="0"
                        max="50"
                        step="5"
                        formControlName="characterLength">
                </aside>
                
                <aside class="params-checkbox">
                    <div>
                        <input type="checkbox" formControlName="includedUppercase">
                        <label>
                            Include Uppercase Letters
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" formControlName="includedLowercase">
                        <label>
                            Include Lowercase Letters
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" formControlName="includedNumber">
                        <label>
                            Include Number
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" formControlName="includedSymbols">
                        <label>
                            Include Symbols
                        </label>
                    </div>
                </aside>

                <force-meter
                    [params]="values">
                </force-meter>

                <aside class="params-footer">
                    <button>
                        GENERATE 
                        <img
                            src="./../../../assets/icons/arrow-right-svgrepo-com.svg"
                            alt="Generate">
                    </button>
                </aside>
            </form>
        </section>
    `,
    styleUrls: ['./params-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ForceMeterComponent
    ]
})
export class ParamsFormComponent implements OnInit {

    public generatorForm: FormGroup;
    public values: {
        characterLength: number;
        includedUppercase: boolean;
        includedLowercase: boolean;
        includedNumber: boolean;
        includedSymbols: boolean;
    };

    constructor(private _formBuilder: FormBuilder) {
        this.generatorForm = this._formBuilder.group({
            characterLength: [0],
            includedUppercase: [false],
            includedLowercase: [false],
            includedNumber: [false],
            includedSymbols: [false]
        });
        this.values = {
            characterLength: 0,
            includedUppercase: false,
            includedLowercase: false,
            includedNumber: false,
            includedSymbols: false
        };
    }

    public get controls(): { [key: string]: AbstractControl} {
        return this.generatorForm.controls;
    }

    ngOnInit(): void {
        this.generatorForm.valueChanges.subscribe((value) => {
            this.values = {...value};
        });
    }

}
