import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ForceMeterComponent } from "../force-meter/force-meter.component";
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
                        max="30"
                        formControlName="characterLength">
                    <small *ngIf="isSubmitted && controls['characterLength'].errors">
                        the length of the characters is required.
                    </small>
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

                    <small *ngIf="isSubmitted && generatorForm.errors">
                        at least one option must be selected
                    </small>
                </aside>

                <force-meter
                    [params]="values">
                </force-meter>

                <aside class="params-footer">
                    <button (click)="onGenerate()">
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

    @Output() eventGenerated: EventEmitter<string>;

    public generatorForm: FormGroup;
    public values: {
        characterLength: number;
        includedUppercase: boolean;
        includedLowercase: boolean;
        includedNumber: boolean;
        includedSymbols: boolean;
    };
    public isSubmitted: boolean;

    constructor(private _formBuilder: FormBuilder) {
        this.generatorForm = this._formBuilder.group({
            characterLength: [0, Validators.min(1)],
            includedUppercase: [true],
            includedLowercase: [false],
            includedNumber: [false],
            includedSymbols: [false]
        }, {
            validator: this._validationAtLeastOneSelected
        });
        this.values = {
            characterLength: 1,
            includedUppercase: true,
            includedLowercase: false,
            includedNumber: false,
            includedSymbols: false
        };
        this.isSubmitted = false;

        this.eventGenerated = new EventEmitter();
    }

    public get controls(): { [key: string]: AbstractControl} {
        return this.generatorForm.controls;
    }

    ngOnInit(): void {
        this.generatorForm.valueChanges.subscribe((value) => {
            this.values = {...value};
        });
    }

    public onGenerate(): void {

        this.isSubmitted = true;

        if (this.generatorForm.invalid) {
            return;
        }
        
        const charactersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const charactersLowercase = "abcdefghijklmnopqrstuvwxyz";
        const charactersNumber = "0123456789";
        const charactersSymbols = "!@#$%^&*()_-+=<>?";
        
        const length = this.controls['characterLength'].value;
        const checkUppercase = this.controls['includedUppercase'].value;
        const checkLowercase = this.controls['includedLowercase'].value;
        const checkNumber = this.controls['includedNumber'].value;
        const checkSymbols = this.controls['includedSymbols'].value;    
        
        let characterFinal = "";
        let password = '';


        if (checkUppercase) {
            characterFinal += charactersUppercase;
        }

        if (checkLowercase) {
            characterFinal += charactersLowercase;
        }

        if (checkNumber) {
            characterFinal += charactersNumber;
        }

        if (checkSymbols) {
            characterFinal += charactersSymbols;
        }

        
        for (let i = 0; i < length; i++) {
            const indexRandom = Math.floor(Math.random() * characterFinal.length);
            password += characterFinal.charAt(indexRandom);
        }

        console.log(password);
        this.eventGenerated.emit(password);
    }

    private _validationAtLeastOneSelected(formGroup: FormGroup): { atLeastOneSelected: boolean } | null {
        
        const checkUppercase = formGroup.get('includedUppercase')?.value;
        const checkLowercase = formGroup.get('includedLowercase')?.value;
        const checkNumber = formGroup.get('includedNumber')?.value;
        const checkSymbols = formGroup.get('includedSymbols')?.value;
        
        if (!checkUppercase && !checkLowercase && !checkNumber && !checkSymbols) {
            return { atLeastOneSelected: true };
        }

        return null;
    }

}
