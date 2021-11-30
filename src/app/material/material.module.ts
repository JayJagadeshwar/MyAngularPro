import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCardModule],
  exports: [MatButtonModule, MatCardModule],
})
export class MaterialModule {}
