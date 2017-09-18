import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard.routing';
import { Router, RouterModule } from '@angular/router';

import { CompatibilityCompareComponent } from './compatibility.compare/compatibility.compare.component';
import { CompatibilityMatrixComponent } from './compatibility.matrix/compatibility.matrix.component';
import { PostsService } from '../shared/services/httpservices';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    dashboardRouting

  ],
  declarations: [
    DashboardComponent,
    CompatibilityCompareComponent,
    CompatibilityMatrixComponent
  ],
  providers: [
    PostsService
    // UserService
  ]
})
export class DashboardModule {}
