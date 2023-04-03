import { Component, OnInit, ViewChild } from '@angular/core';
import { HashTable } from '../../../../../../node_modules/angular-hashtable';
import { RoleService } from '../../../services/role.service';
import { AppModule } from '../../../../app.module';
import { Router } from '../../../../../../node_modules/@angular/router';
import { Helper } from '../../../../shared/helper';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-role-index',
  templateUrl: './role-index.component.html',
  styleUrls: ['./role-index.component.scss']
})
export class RoleIndexComponent implements OnInit {

  public doc: any = AppModule.doc;

  // Resources list
  public resources: any[] = null;
  public updateMode = false;

  // init breadcrum
  public breadcrumbList = [];
  public breadcrumbList2 = [];

  // remove options
  public showRemoveButton = false;
  public showRemoveModal = false;
  public trashList = new HashTable<any, any>();
  public removed = [];

  // update
  public updateItem: any = {};
  public permissionItem: any = {};
  public updateResources: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(this.resources);
  displayedColumns: string[];

  public searchKey: any;

  constructor(private roleService: RoleService, private router: Router) {
    // init breadcrum
    this.initBreadcrumb();
    this.initDisplayColumns();
    this.initMatDatatable();

    this.updateResources = () => {
      this.loadResources();
    };
  }

  initMatDatatable() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  initBreadcrumb() {
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: 'roles'}
    ];
  }

  initDisplayColumns() {
    this.displayedColumns = [
       'name', 'action'
    ];
  }

  refreshDataSource(data: any[]) {
    this.resources = data;
    this.dataSource.data = data;
  }

  destroy(id) {
    this.doc.swal.confirm(Helper.trans('are you sure'), () => {
      this.roleService.destroy(id).subscribe((res: any) => {
        if (res.status == 1) {
          Message.success(res.message);
          this.loadResources();
        }
        else
          Message.error(res.message);
      });
    });
  }

  loadResources() {
    this.roleService.get().subscribe( (res: any) => {
      this.resources = res;
      this.dataSource.data = res;
      //
      this.refreshDataSource(res);
    });
  }

  edit(item) {
    this.updateItem = item;
    this.doc.jquery('#updateModal').modal('show');
  }


  ngOnInit() {
    this.loadResources();
    this.searchKey = "";
  }

  showUpdateModal(item) {
    this.updateItem = item;
  }

  search(filterValue: string) {
    if (this.dataSource)
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  permission(item) {
    this.breadcrumbList2 = [
      {name: 'home', url: '/'},
      {name: 'roles', url: '/users/role'},
      {name: item.name}
    ];
    this.updateMode = true;
    this.permissionItem = item;
    this.doc.jquery('#permissionModal').modal('show');
  }
}
