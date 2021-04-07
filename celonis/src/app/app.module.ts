import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { ListComponent } from './list/list.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { TaskService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
