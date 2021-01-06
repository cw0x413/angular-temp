import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './home/welcome.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { ProductDetailComponent } from './products/product-detail/product-detail.component'
import { NgParticlesModule } from 'ng-particles';
import { ProductDetailGuard } from './products/product-detail/product-detail.guard'
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    NgParticlesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
