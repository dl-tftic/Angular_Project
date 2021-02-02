import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/models/base-component';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent extends BaseComponent<ProjectService, Project> implements OnInit
{

  public dataSource: Project[];
  // displayedColumns: string[];

  public response: any;
  public responseProject: Project;

  private project: Project;
  private projectString: string;

  constructor(private projectService: ProjectService, private router: Router)
  {
    super(Project.GetDisplayedColumns(), projectService);
  }

  ngOnInit(): void
  {
    this.getAll();
  }

  // public getAll(): void
  // {
  //   this.projectService.getAll<Project>().subscribe(x => this.dataSource = x);
  // }

  navigateTo(url: string): void
  {
    this.router.navigateByUrl(url);
  }

}
