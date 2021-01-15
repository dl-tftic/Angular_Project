import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { GetProjectService } from 'src/app/services/get-project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit
{

  public response: any;
  public responseProject: Project;

  private project: Project;
  private projectString: string;

  constructor(private projectService: GetProjectService) { }

  ngOnInit(): void
  {
    this.projectService.getProject(1).subscribe(
                                          (response) =>
                                          {
                                            console.log('response received');
                                            this.responseProject = response;
                                            console.log(this.GetResponse);
                                            console.log(this.response);
                                          }
                                        );

    this.projectString = JSON.stringify(this.responseProject);
    // this.project = JSON.parse(JSON.stringify(this.response || null ));
    this.project = JSON.parse(JSON.stringify(this.projectString));
    console.log(this.project);
  }

  public GetResponse(): any
  {
    return this.response;
  }

}
