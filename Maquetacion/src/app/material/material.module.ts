import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatSidenavModule, MatListModule, MatDividerModule, MatExpansionModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatExpansionModule
]

@NgModule({
  declarations: [],
  imports:[MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
