import { Component, ElementRef, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SidebarComponent implements OnInit {

  public role: string;
  public user: any = {};
  public isSuperAdmin: boolean = true;
  $: any= $;
  website: any = environment.website;

  constructor(private refElement: ElementRef) {
    if (Auth.user())
      this.user = Auth.user();
  }

  ngOnInit() {
    this.role = localStorage.getItem('AdminRole');
    if (this.role != 'super_admin')
      this.isSuperAdmin = false;

    var self = this;
    setTimeout(() => {
      self.$('.sidebar').slimScroll({ height: (window.innerHeight - 60)+"px" });
      self.$('ul').tree({});
    }, 500);
  }

  menuClicked(el: HTMLElement) {
    const others = this.refElement.nativeElement.querySelectorAll('#sidebar .nav-item .dropdown-menu.show');
    if (others != null && others.length > 0) {
      others.forEach(element => {
        element.classList.remove('show');
      });
    }
    document.getElementById(el.getAttributeNode('aria-controls').value).classList.toggle('show');
  }

  get name() {
    return localStorage.getItem('AdminName');
  }

  can(arr) {
    return Auth.canOr(arr);
  }

  // get role() {
  //   return localStorage.getItem('AdminRole');
  // }
}
