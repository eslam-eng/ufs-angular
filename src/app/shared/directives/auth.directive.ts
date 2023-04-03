import { Directive, ElementRef } from '@angular/core';
import { Auth } from '../auth';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {


  constructor(private el: ElementRef) {
    let type = el.nativeElement.getAttribute('appAuth');
    //console.log(!Auth.can(this.permission));
    //if (type == 'admin') {
      console.log(Auth.user().company_id, "condition", Auth.user().company_id != 1);
      if (Auth.user().company_id != 1)
        el.nativeElement.remove();
    //}
  }

}
