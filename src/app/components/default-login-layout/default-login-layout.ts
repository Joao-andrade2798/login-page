import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-default-login-layout',
  styleUrl: './default-login-layout.scss',
  templateUrl: './default-login-layout.html',
})
export class DefaultLoginLayout {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") OnSubmit = new EventEmitter();

  @Output("navigate") OnNavigate = new EventEmitter();

  submit() {
    this.OnSubmit.emit();
  }

  navigate() {
    this.OnNavigate.emit();
  }
}
