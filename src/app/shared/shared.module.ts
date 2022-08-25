import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';

/**
 * Tous les éléments d'un module qui sont privés
 * pour les autres modules
 * donc on utilise : exports : [] dans @NgModule
 * pour que ce soit public
 */

@NgModule({
  declarations: [
    LikeHateComponent
  ],
  imports: [
    CommonModule
  ],
  export : [LikeHateComponent]
})
export class SharedModule { }
