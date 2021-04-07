import {ExtraOptions, Routes, PreloadAllModules} from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}
