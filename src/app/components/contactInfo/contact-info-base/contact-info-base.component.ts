import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactInfo } from 'src/app/models/contact-info';

@Component({
  selector: 'app-contact-info-base',
  templateUrl: './contact-info-base.component.html',
  styleUrls: ['./contact-info-base.component.scss']
})
export class ContactInfoBaseComponent implements OnInit
{

  @Input() contactInfos: ContactInfo[];

  @Input() parentForm: FormGroup;

  constructor()
  {
    this.contactInfos = [];

    // this.contactInfos.push({id: 0, contactType: 'telephone', contactInformation: '064/87-95-29', description: ''  });
  }

  ngOnInit(): void
  {

  }

  get visibility(): boolean
  {
    return this.contactInfos.length > 0 ? true : false;
  }

  add(): void
  {
    this.contactInfos.push({id: 0, contactType: '', contactInformation: '', description: ''  });
  }

}
