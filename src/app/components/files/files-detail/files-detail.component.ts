import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as EventEmitter from 'events';
import { catchError, map } from 'rxjs/operators';
import { BaseComponent } from 'src/app/models/base-component';
import { File as myFile } from 'src/app/models/file';
import { FilesService } from 'src/app/services/files.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-files-detail',
  templateUrl: './files-detail.component.html',
  styleUrls: ['./files-detail.component.scss']
})
export class FilesDetailComponent extends BaseComponent<FilesService, myFile> implements OnInit
{

  public message: string;
  public progress: number;

  public filesForm: FormGroup;

  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  files = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() public onUploadFinished = new EventEmitter();

  // tslint:disable-next-line: variable-name
  constructor(private http: HttpClient, private _builder: FormBuilder, private fileService: FilesService)
  {
    super(myFile.GetDisplayedColumns(), fileService);
  }

  ngOnInit(): void
  {
    this.filesForm = this._builder.group
        (
          {
            name: this._builder.control('', [ Validators.required,
                                            Validators.maxLength(myFile.GetMaxLength('name'))]),
            description: this._builder.control('', [ Validators.maxLength(myFile.GetMaxLength('description')) ]),
            fileByte: this._builder.control('', [ Validators.required ])
          }
        );
  }

  public async insertFromData(arg: FormData): Promise<number>
  {
      let rtn;
      // let data = await this.service.insertFormData(arg).toPromise().then(x => rtn = x);
      let data = await this.service.insertFormData(arg)
        .pipe(map(event =>
                          {
                            switch (event.type)
                            {
                              case HttpEventType.UploadProgress:
                                  // file
                                  break;
                              case HttpEventType.Response:
                                  return event;
                            }
                          }
                  ),
                  catchError(
                              (error: HttpErrorResponse) => {
                                                              // file.inProgress = false;
                                                              return of('upload failed');
                                                            }
                            )
              )
        .subscribe(
                    (event: any) => {
                                      if (typeof (event === 'object')) { console.log(event.body); }
                                    }
                  );
      return rtn;
  }

  onSubmit(files): void
  {
    if (files.length === 0) { return; }

    if (this.filesForm.valid)
    {
      const formData = new FormData();
      formData.append('name', this.filesForm.get('name').value);
      formData.append('description', this.filesForm.get('description').value);
      formData.append('fileByte', <File>files[0], files[0].name);
      formData.append('createBy', '1');

      // let file: myFile = {
      //                   name: this.filesForm.get('name').value,
      //                   description: this.filesForm.get('description').value,
      //                   fileByte: text,
      //                   createBy: 1
      //                   };
      // console.log(file);

      // this.insertFromData(formData);
      this.http.post(environment.baseUrl + '/files/insert', formData, { reportProgress: true, observe: 'events'})
      .subscribe(event => {
                            if (event.type === HttpEventType.UploadProgress)
                            {
                              this.progress = Math.round(100 * event.loaded / event.total);
                            }
                            else if (event.type === HttpEventType.Response)
                            {
                              this.message = 'upload success';
                              this.onUploadFinished.emit(event.body.toString());
                            }
                          });
    }
  }

  public uploadFile = (files) =>
  {
    if (files.length === 0) { return; }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(environment.baseUrl + '/files/upload', formData, { reportProgress: true, observe: 'events'})
      .subscribe(event => {
                            if (event.type === HttpEventType.UploadProgress)
                            {
                              this.progress = Math.round(100 * event.loaded / event.total);
                            }
                            else if (event.type === HttpEventType.Response)
                            {
                              this.message = 'upload success';
                              this.onUploadFinished.emit(event.body.toString());
                            }
                          });
  }

}
function of(arg0: string): any {
  throw new Error('Function not implemented.');
}

