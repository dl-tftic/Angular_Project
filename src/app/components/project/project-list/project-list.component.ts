import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/models/base-component';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent extends BaseComponent<ProjectService, Project> implements OnInit {

  public dataSource: Project[];

  public response: any;
  public responseProject: Project;

  private project: Project;
  private projectString: string;

  constructor(private projectService: ProjectService)
  {
    super(Project.GetDisplayedColumns(), projectService);
  }

  ngOnInit(): void
  {
    this.getAll();
  }

}
