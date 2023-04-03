import { Auth } from 'src/app/shared/auth';
import { Request } from 'src/app/shared/request';
import { GlobalService } from '../../shared/services/global.service';
import { Application } from './application';
export class Autoloader {

  public static COMPANIES;
  public static BRANCHES;
  public static PAYMENT_TYPES;
  public static DEPARTMENTS;
  public static CATEGORIES;
  public static SERVICES;
  public static CITIES;
  public static AREAS;
  public static COUNTRIES;
  public static EXPENSES_TYPES;
  public static STATUS;
  public static TRANS_TYPES;


  public static autoload(service: GlobalService) {
    if (!Auth.getApiToken())
      return;

    // load companies
    if (!Autoloader.COMPANIES)
    Request.addToQueue({
      observer: service.get('companies', {paging: '0'}),
      action: (res) => { Autoloader.COMPANIES = res; }
    });

    // load branches
    if (!Autoloader.BRANCHES)
    Request.addToQueue({
      observer: service.get('branches'),
      action: (res) => { Autoloader.BRANCHES = res; }
    });

    // load payment-types
    if (!Autoloader.PAYMENT_TYPES)
    Request.addToQueue({
      observer: service.get('payment-types'),
      action: (res) => { Autoloader.PAYMENT_TYPES = res; }
    });

    // load departments
    if (!Autoloader.DEPARTMENTS)
    Request.addToQueue({
      observer: service.get('departments'),
      action: (res) => { Autoloader.DEPARTMENTS = res; }
    });

    // load categories
    if (!Autoloader.CATEGORIES)
    Request.addToQueue({
      observer: service.get('awb-categories'),
      action: (res) => { Autoloader.CATEGORIES = res; }
    });

    // load services
    if (!Autoloader.SERVICES)
    Request.addToQueue({
      observer: service.get('services'),
      action: (res) => { Autoloader.SERVICES = res; }
    });

    // load cities
    if (!Autoloader.CITIES)
    Request.addToQueue({
      observer: service.get('cities'),
      action: (res) => { Autoloader.CITIES = res; }
    });

    // load areas
    if (!Autoloader.AREAS)
    Request.addToQueue({
      observer: service.get('areas'),
      action: (res) => { Autoloader.AREAS = res; }
    });

    // load countries
    if (!Autoloader.COUNTRIES)
    Request.addToQueue({
      observer: service.get('countries'),
      action: (res) => { Autoloader.COUNTRIES = res; }
    });

    // load expense-types
    if (!Autoloader.EXPENSES_TYPES)
    Request.addToQueue({
      observer: service.get('expense-types'),
      action: (res) => { Autoloader.EXPENSES_TYPES = res; }
    });

    // load load status
    if (!Autoloader.STATUS)
    Request.addToQueue({
      observer: service.get('status'),
      action: (res) => { Autoloader.STATUS = res; }
    });

    // load load TRANS_TYPES
    if (!Autoloader.TRANS_TYPES)
    Request.addToQueue({
      observer: service.get('trans-types'),
      action: (res) => { Autoloader.TRANS_TYPES = res; }
    });

    // start load the queue
    Request.fire(() =>{
      Application.endLoading();
    });
  }

  //****  setter  */
  public static setCompanies(res) {
    Autoloader.COMPANIES = res;
  }

  public static setBranches(res) {
    Autoloader.BRANCHES = res;
  }

  public static setPaymentTypes(res) {
    Autoloader.PAYMENT_TYPES = res;
  }

  public static setDepartments(res) {
    Autoloader.DEPARTMENTS = res;
  }

  public static setCategories(res) {
    Autoloader.CATEGORIES = res;
  }

  public static setServices(res) {
    Autoloader.SERVICES = res;
  }

  public static setCities(res) {
    Autoloader.CITIES = res;
  }

  public static setAreas(res) {
    Autoloader.AREAS = res;
  }

  public static setCountries(res) {
    Autoloader.COUNTRIES = res;
  }

  public static setExpenses(res) {
    Autoloader.EXPENSES_TYPES = res;
  }

  public static setStatus(res) {
    Autoloader.STATUS = res;
  }

  public static setTransTypes(res) {
    Autoloader.TRANS_TYPES = res;
  }




  /***  getters */
  public static companies() {
    return Autoloader.COMPANIES;
  }

  public static branches() {
    return Autoloader.BRANCHES;
  }

  public static paymentTypes() {
    return Autoloader.PAYMENT_TYPES;
  }

  public static departments() {
    return Autoloader.DEPARTMENTS;
  }

  public static categories() {
    return Autoloader.CATEGORIES;
  }

  public static services() {
    return Autoloader.SERVICES;
  }

  public static cities() {
    return Autoloader.CITIES;
  }

  public static areas() {
    return Autoloader.AREAS;
  }

  public static countries() {
    return Autoloader.COUNTRIES;
  }

  public static expenses() {
    return Autoloader.EXPENSES_TYPES;
  }

  public static status() {
    return Autoloader.STATUS;
  }

  public static transTypes() {
    return Autoloader.TRANS_TYPES;
  }

}
