import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[copyToClipboard]',
  standalone: true,
})
export class CopyToClipboardDirective {

  @Input('copyToClipboard') textToCopy: string = '';
  
  @HostListener('click') onClick() {
    this._copyToClipboard();
  }

  private _copyToClipboard(): void {
    const textAreaElement = document.createElement('textarea');

    textAreaElement.value = this.textToCopy;
    document.body.appendChild(textAreaElement);
    textAreaElement.select();
    
    document.execCommand('copy');
    document.body.removeChild(textAreaElement);
  }
}
