import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatSidenavModule, MatListModule, MatDividerModule, MatExpansionModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports:[MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
