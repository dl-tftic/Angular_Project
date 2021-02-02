import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/models/base-component';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent extends BaseComponent<ProjectService, Project> implements OnInit
{

  projectForm: FormGroup;

  public isAddMode: boolean;
  private id: number;
  private project: Project;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private projectService: ProjectService)
  {
    super(Project.GetDisplayedColumns(), projectService);
  }

  ngOnInit(): void
  {
    // this.id = this.route.snapshot.params['id'];
    this.id = this.route.snapshot.children[0].params.id;
    this.isAddMode = !this.id;
    this.projectForm = this.formBuilder.group(
      {
        code: ['', Validators.minLength(0)],
        name: ['', Validators.required],
        description: ['', Validators.minLength(0)],
        createBy: ['', Validators.required],
        street: ['', Validators.required],
        number: ['', Validators.required],
        box: ['', Validators.minLength(0)],
        zipCode: ['', Validators.required],
        city: ['', Validators.required],
        cityId: ['', Validators.required],
        country: ['', Validators.required],
        countryId: ['', Validators.required]
      }
      );

    // tslint:disable-next-line: deprecation
    this.projectForm.valueChanges.subscribe(x => { console.log(x); console.log(this.projectForm) } );

    this.getById(this.id) .then(x => this.project = x)
                            .finally(() => { this.updateFormValue(); console.log(this.project); });
  }

  updateFormValue(): void
  {
    this.projectForm.patchValue
    (
      {
        code: this.project.code,
        name: this.project.name,
        description: this.project.description,
        createBy: this.project.createBy,
        street: this.project.address.street,
        number: this.project.address.number,
        box: this.project.address.box,
        city: this.project.address.city.city,
        zipCode: this.project.address.city.code,
        cityId: this.project.address.city.city,
        country: this.project.address.city.country.id,
        countryId: this.project.address.city.country.id,
      }
    );
  }

  onSubmit(): void
  {
    if (this.projectForm.valid)
    {
      if (this.isAddMode)
      {
        const p = new Project();
        p.code = this.projectForm.value.code;
        p.name = this.projectForm.value.name;
        p.description = this.projectForm.value.description;
        p.createBy = 1;
        p.address.street = this.projectForm.value.street;
        p.address.number = this.projectForm.value.number;
        p.address.box = this.projectForm.value.box;
        // p.address.city = this.projectForm.value.city;
        // p.address.country = this.projectForm.value.country;
        p.address.city.id = this.projectForm.value.cityId;
        p.address.city.country.id = this.projectForm.value.countryId;

        this.insert(p);
      }
    }

  }

}
