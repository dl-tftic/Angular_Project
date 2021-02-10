import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { returnType } from 'src/app/enum/return-type.enum';
import { Account } from 'src/app/models/account';
import { Address } from 'src/app/models/address';
import { BaseComponent } from 'src/app/models/base-component';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { Roles } from 'src/app/models/roles';
import { AccountService } from 'src/app/services/account.service';
import { CitiesService } from 'src/app/services/cities.service';
import { CountryService } from 'src/app/services/country.service';
import { RolesService } from 'src/app/services/roles.service';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent extends BaseComponent<AccountService, Account> implements OnInit
{

  public account: Account;

  public accountForm: FormGroup;

  private roleId: number;
  private addressId: number;
  private cityId: number;
  private countryId: number;

  public roles: Roles[];
  private countries: Country[];
  public selectedCountries: Country[];
  private cities: City[];
  public selectedCities: City[];
  public selectedZipCode: string[];
  public selectedCityName: string[];

  public countryType: returnType;
  public cityZipCode: returnType;
  public cityName: returnType;

  constructor(  private builder: FormBuilder,
                private roleService: RolesService,
                private accountService: AccountService,
                private cityService: CitiesService,
                private countryService: CountryService
                )
  {
    super(Account.GetDisplayedColumns(), accountService);

    this.roleId = -1;
    this.addressId = -1;
    this.cityId = -1;
    this.countryId = -1;

  }

  ngOnInit(): void
  {
    this.accountForm = this.builder.group(
      {
        login:      this.builder.control('', [  Validators.required,
                                                Validators.maxLength(Account.GetMaxLength('login'))]),
        firstName:  this.builder.control('', [  Validators.required,
                                                Validators.maxLength(Account.GetMaxLength('firstName')) ]),
        lastName:   this.builder.control('', [  Validators.required,
                                                Validators.maxLength(Account.GetMaxLength('lastName')) ]),
        activate:   this.builder.control('', [  Validators.required ]),
        role:       this.builder.control('', [  Validators.required ]),
        street:     this.builder.control('', [  Validators.required ]),
        number:     this.builder.control('', [  Validators.required ]),
        box:        this.builder.control('', [   ]),
        zipCode:    this.builder.control('', [  Validators.required ]),
        city:       this.builder.control('', [  Validators.required ]),
        country:    this.builder.control('', [  Validators.required ]),
      }
    );

    this.getById(1).then(x => this.account = x)
                      .finally(
                                () => (
                                        this.roleId = this.account.role.id,
                                        this.addressId = this.account.address.id,
                                        this.countryId = this.account.address.city.country.id,
                                        this.cityId = this.account.address.city.id,
                                        this.accountForm.get('role').setValue(this.roleId)
                                      )
                              );

    // tslint:disable-next-line: deprecation
    this.roleService.getAll<Roles>().subscribe(x => this.roles = x);

    // tslint:disable-next-line: deprecation
    this.countryService.getAll<Country>().subscribe(x => this.countries = x);

    // tslint:disable-next-line: deprecation
    this.cityService.getAll<City>().subscribe(x => this.cities = x);

    this.selectedCountries = this.countries;

    this.countryType = returnType.Country;
    this.cityZipCode = returnType.CityZipCode;
    this.cityName = returnType.CityName;
    this.selectedCities = this.cities;

    // this.roleId = this.account.role.id;
    // this.addressId = this.account.address.id;
    // this.countryId = this.account.address.city.country.id;
    // this.cityId = this.account.address.city.id;

    console.log(this.roles);


  }

  public setRoleId(id: number): void
  {
    this.roleId = id;
    console.log(id);
  }

  public setCountryId(id: number): void
  {
    this.countryId = id;
    console.log(id);
  }

  public setCityId(id: number): void
  {
    this.cityId = id;
  }

  // tslint:disable-next-line: typedef
  onKey(value: string, type: returnType)
  {
    console.log(value);

    switch (type)
    {
      case (returnType.Country): this.selectedCountries = this.search(value, type); break;
      case (returnType.CityName): this.selectedCities = this.search(value, type); break;
      case (returnType.CityZipCode): this.selectedCities = this.search(value, type); break;
      default: return null;
    }
  }

  // Filter the states list and send back to populate the selectedStates**
  search(value: string, type: returnType): any[]
  {
    const filter = value.toLowerCase();

    switch (type)
    {
      case (returnType.Country): return this.countries.filter(option => option.name.toLowerCase().startsWith(filter)); break;
      case (returnType.CityName): return this.cities.filter(option => option.city.toLowerCase().startsWith(filter)); break;
      case (returnType.CityZipCode): return this.cities.filter(option => option.code.toLowerCase().startsWith(filter)); break;
      default: return null;
    }
  }

  onSubmit(): void
  {

  }

  changeSelectValue(msg: string): void
  {
    this.accountForm.get('role').setValue(msg);
  }
}
