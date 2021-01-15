import { Component, OnInit } from '@angular/core';
import { GetProjectService } from 'src/app/services/get-project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit
{

  public response: any;

  constructor(private project: GetProjectService) { }

  ngOnInit(): void
  {
    this.project.getProject(1).subscribe(
                                          (response) =>
                                          {
                                            console.log('response received');
                                            this.response = response;
                                          }
                                        );
  }

}
