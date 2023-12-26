import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ForceMeterComponent } from "../force-meter/force-meter.component";

@Component({
    selector: 'params-form',
    standalone: true,
    template: `
        <section class="generator-container">
            <aside class="params-description">
                <p>Character Length</p>
                <p>10</p>
            </aside>
            
            <aside class="params-slider">
                <input type="range" min="0" max="100" value="50">
            </aside>
            
            <aside class="params-checkbox">
                <div>
                    <input type="checkbox">
                    <label>
                        Include Uppercase Letters
                    </label>
                </div>
               
                <div>
                    <input type="checkbox">
                    <label>
                        Include Lowercase Letters
                    </label>
                </div>

                <div>
                    <input type="checkbox">
                    <label>
                        Include Number
                    </label>
                </div>
               
                <div>
                    <input type="checkbox">
                    <label>
                        Include Symbols
                    </label>
                </div>
            </aside>

            <force-meter></force-meter>

            <aside class="params-footer">
                <button>
                    GENERATE <img src="./../../../assets/icons/arrow-right-svgrepo-com.svg" alt="Generate">
                </button>
            </aside>
        </section>
    `,
    styleUrls: ['./params-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ForceMeterComponent
    ]
})
export class ParamsFormComponent { }
