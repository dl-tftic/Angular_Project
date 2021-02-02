import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { returnType } from 'src/app/enum/return-type.enum';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { CitiesService } from 'src/app/services/cities.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-address-base',
  templateUrl: './address-base.component.html',
  styleUrls: ['./address-base.component.scss']
})
export class AddressBaseComponent implements OnInit
{

  @Input() parentForm: FormGroup;

  private _cityId: number;
  private _countryId: number;

  get cityId(): number
  {
    return this._cityId;
  }

  get countryId(): number
  {
    return this._countryId;
  }

  private countries: Country[];
  public selectedCountries: Country[];
  private cities: City[];
  public selectedCities: City[];
  public selectedZipCode: string[];
  public selectedCityName: string[];

  public countryType: returnType;
  public cityZipCode: returnType;
  public cityName: returnType;

  constructor(
              private cityService: CitiesService,
              private countryService: CountryService)
  {

  }

  ngOnInit(): void
  {
    this.countryService.getAll<Country>().subscribe(x => this.countries = x);

    this.cityService.getAll<City>().subscribe(x => this.cities = x);

    this.selectedCountries = this.countries;

    this.countryType = returnType.Country;
    this.cityZipCode = returnType.CityZipCode;
    this.cityName = returnType.CityName;
    this.selectedCities = this.cities;
  }

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

  setCityId(id: number): void
  {
    this._cityId = id;
    console.log(this.cityId);
  }

  setCountryId(id: number): void
  {
    this._countryId = id;
    console.log(this.countryId);
  }


}
