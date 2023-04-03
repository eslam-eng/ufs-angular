import { Directive, ElementRef, Input } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Auth } from '../auth';

@Directive({
  selector: '[permission]'
})
export class PermissionDirective {


  constructor(private el: ElementRef) {
    let permission = el.nativeElement.getAttribute('permission');
    //console.log(!Auth.can(this.permission));
    if (!Auth.can(permission))
      el.nativeElement.remove();
  }

}
