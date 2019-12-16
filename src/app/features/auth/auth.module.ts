import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './effects/login.effects';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    HttpClientModule,
    EffectsModule.forFeature([LoginEffects])
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
