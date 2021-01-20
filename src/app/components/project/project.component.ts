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

  public dataSource: Project[];
  displayedColumns: string[];

  public response: any;
  public responseProject: Project;

  private project: Project;
  private projectString: string;

  constructor(private projectService: GetProjectService) { }

  ngOnInit(): void
  {
    this.displayedColumns = Project.GetDisplayedColumns();
    this.displayedColumns.push('Button');
    this.getAll();
  }

  public getAll(): void
  {
    this.projectService.getAll().subscribe(x => this.dataSource = x);
  }

}
