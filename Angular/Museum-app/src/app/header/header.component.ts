import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div style="padding-top: 50px;">
  <div class="navbar is-dark is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../assets/img/museum-logo.png">
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" routerLink="/">Home</a>
        <a class="navbar-item" routerLink="/artifacts">Artifacts</a>
        <a class="navbar-item" routerLink="/artists">Artists</a>
        <a class="navbar-item" routerLink="/curators">Curators</a>
        <a class="navbar-item" routerLink="/categories">Categories</a>
        <a class="navbar-item" routerLink="/exhibitions">Exhibitions</a>
        <a class="navbar-item" routerLink="/artifact-exhibition">Artifact Exhibition</a>
        <a class="navbar-item" routerLink="/category-summary">Summary</a>
      </div>
    </div>
  </div>
</div>
  `,
  styles: ``
})
export class HeaderComponent {

}
