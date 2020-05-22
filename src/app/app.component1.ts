<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->
<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->
<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->
<!-- * * * * * * * to get started with your project! * * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->

<style>
    :host {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 14px;
      color: #333;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 8px 0;
    }
  
    p {
      margin: 0;
    }
  
    .spacer {
      flex: 1;
    }
  
    .toolbar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      display: flex;
      align-items: center;
      background-color: #1976d2;
      color: white;
      font-weight: 600;
    }
  
    .toolbar img {
      margin: 0 16px;
    }
  
    .toolbar #twitter-logo {
      height: 40px;
      margin: 0 16px;
    }
  
    .toolbar #twitter-logo:hover {
      opacity: 0.8;
    }
  
    .content {
      display: flex;
      margin: 82px auto 32px;
      padding: 0 16px;
      max-width: 960px;
      flex-direction: column;
      align-items: center;
    }
  
    svg.material-icons {
      height: 24px;
      width: auto;
    }
  
    svg.material-icons:not(:last-child) {
      margin-right: 8px;
    }
  
    .card svg.material-icons path {
      fill: #888;
    }
  
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 16px;
    }
  
    .card {
      border-radius: 4px;
      border: 1px solid #eee;
      background-color: #fafafa;
      height: 40px;
      width: 200px;
      margin: 0 8px 16px;
      padding: 16px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
      line-height: 24px;
    }
  
    .card-container .card:not(:last-child) {
      margin-right: 0;
    }
  
    .card.card-small {
      height: 16px;
      width: 168px;
    }
  
    .card-container .card:not(.highlight-card) {
      cursor: pointer;
    }
  
    .card-container .card:not(.highlight-card):hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
    }
  
    .card-container .card:not(.highlight-card):hover .material-icons path {
      fill: rgb(105, 103, 103);
    }
  
    .card.highlight-card {
      background-color: #1976d2;
      color: white;
      font-weight: 600;
      border: none;
      width: auto;
      min-width: 30%;
      position: relative;
    }
  
    .card.card.highlight-card span {
      margin-left: 60px;
    }
  
    svg#rocket {
      width: 80px;
      position: absolute;
      left: -10px;
      top: -24px;
    }
  
    svg#rocket-smoke {
      height: calc(100vh - 95px);
      position: absolute;
      top: 10px;
      right: 180px;
      z-index: -10;
    }
  
    a,
    a:visited,
    a:hover {
      color: #1976d2;
      text-decoration: none;
    }
  
    a:hover {
      color: #125699;
    }
  
    .terminal {
      position: relative;
      width: 80%;
      max-width: 600px;
      border-radius: 6px;
      padding-top: 45px;
      margin-top: 8px;
      overflow: hidden;
      background-color: rgb(15, 15, 16);
    }
  
    .terminal::before {
      content: "\2022 \2022 \2022";
      position: absolute;
      top: 0;
      left: 0;
      height: 4px;
      background: rgb(58, 58, 58);
      color: #c2c3c4;
      width: 100%;
      font-size: 2rem;
      line-height: 0;
      padding: 14px 0;
      text-indent: 4px;
    }
  
    .terminal pre {
      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
      color: white;
      padding: 0 1rem 1rem;
      margin: 0;
    }
  
    .circle-link {
      height: 40px;
      width: 40px;
      border-radius: 40px;
      margin: 8px;
      background-color: white;
      border: 1px solid #eeeeee;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: 1s ease-out;
    }
  
    .circle-link:hover {
      transform: translateY(-0.25rem);
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    }
  
    footer {
      margin-top: 8px;
      display: flex;
      align-items: center;
      line-height: 20px;
    }
  
    footer a {
      display: flex;
      align-items: center;
    }
  
    .github-star-badge {
      color: #24292e;
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 3px 10px;
      border: 1px solid rgba(27,31,35,.2);
      border-radius: 3px;
      background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
      margin-left: 4px;
      font-weight: 600;
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
  
    .github-star-badge:hover {
      background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);
      border-color: rgba(27,31,35,.35);
      background-position: -.5em;
    }
  
    .github-star-badge .material-icons {
      height: 16px;
      width: 16px;
      margin-right: 4px;
    }
  
    svg#clouds {
      position: fixed;
      bottom: -160px;
      left: -230px;
      z-index: -10;
      width: 1920px;
    }
  
  
    /* Responsive Styles */
    @media screen and (max-width: 767px) {
  
      .card-container > *:not(.circle-link) ,
      .terminal {
        width: 100%;
      }
  
      .card:not(.highlight-card) {
        height: 16px;
        margin: 8px 0;
      }
  
      .card.highlight-card span {
        margin-left: 72px;
      }
  
      svg#rocket-smoke {
        right: 120px;
        transform: rotate(-5deg);
      }
    }
  
    @media screen and (max-width: 575px) {
      svg#rocket-smoke {
        display: none;
        visibility: hidden;
      }
    }
  </style>
  
  <!-- Toolbar -->
  <div class="toolbar" role="banner">
    <img
      width="40"
      alt="Angular Logo"
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
    />
    <span>Welcome</span>
      <div class="spacer"></div>
      <a aria-label="Angular on twitter" target="_blank" rel="noopener" href="https://twitter.com/angular" title="Twitter">
        <svg id="twitter-logo" height="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <rect width="400" height="400" fill="none"/>
          <path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" fill="#fff"/>
        </svg>
      </a>
  </div>
  
  <div class="content" role="main">
  
    <!-- Highlight Card -->
    <div class="card highlight-card card-small">
  
      <svg id="rocket" alt="Rocket Ship" xmlns="http://www.w3.org/2000/svg" width="101.678" height="101.678" viewBox="0 0 101.678 101.678">
        <g id="Group_83" data-name="Group 83" transform="translate(-141 -696)">
          <circle id="Ellipse_8" data-name="Ellipse 8" cx="50.839" cy="50.839" r="50.839" transform="translate(141 696)" fill="#dd0031"/>
          <g id="Group_47" data-name="Group 47" transform="translate(165.185 720.185)">
            <path id="Path_33" data-name="Path 33" d="M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z" transform="translate(0.371 3.363)" fill="#fff"/>
            <path id="Path_34" data-name="Path 34" d="M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z" transform="translate(0 0.005)" fill="#fff"/>
          </g>
        </g>
      </svg>
  
      <span>{{ title }} app is running!</span>
  
      <svg id="rocket-smoke" alt="Rocket Ship Smoke" xmlns="http://www.w3.org/2000/svg" width="516.119" height="1083.632" viewBox="0 0 516.119 1083.632">
        <path id="Path_40" data-name="Path 40" d="M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z" transform="translate(-147.025 -140.939)" fill="#f5f5f5"/>
      </svg>
  
    </div>
  
    <!-- Resources -->
    <h2>Resources</h2>
    <p>Here are some links to help you get started:</p>
  
    <div class="card-container">
      <a class="card" target="_blank" rel="noopener" href="https://angular.io/tutorial">
        <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
  
        <span>Learn Angular</span>
  
        <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>    </a>
  
      <a class="card" target="_blank" rel="noopener" href="https://angular.io/cli">
        <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
  
        <span>CLI Documentation</span>
  
        <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      </a>
  
      <a class="card" target="_blank" rel="noopener" href="https://blog.angular.io/">
        <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>
  
        <span>Angular Blog</span>
  
        <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      </a>
  
    </div>
  
    <!-- Next Steps -->
    <h2>Next Steps</h2>
    <p>What do you want to do next with your app?</p>
  
    <input type="hidden" #selection>
  
    <div class="card-container">
      <div class="card card-small" (click)="selection.value = 'component'" tabindex="0">
          <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
  
        <span>New Component</span>
      </div>
  
      <div class="card card-small" (click)="selection.value = 'material'" tabindex="0">
          <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
  
        <span>Angular Material</span>
      </div>
  
      <div class="card card-small" (click)="selection.value = 'pwa'" tabindex="0">
          <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
  
        <span>Add PWA Support</span>
      </div>
  
      <div class="card card-small" (click)="selection.value = 'dependency'" tabindex="0">
        <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
  
        <span>Add Dependency</span>
      </div>
  
      <div class="card card-small" (click)="selection.value = 'test'" tabindex="0">
        <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
  
        <span>Run and Watch Tests</span>
      </div>
  
      <div class="card card-small" (click)="selection.value = 'build'" tabindex="0">
        <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
  
        <span>Build for Production</span>
      </div>
    </div>
  
    <!-- Terminal -->
    <div class="terminal" [ngSwitch]="selection.value">
        <pre *ngSwitchDefault>ng generate component xyz</pre>
        <pre *ngSwitchCase="'material'">ng add @angular/material</pre>
        <pre *ngSwitchCase="'pwa'">ng add @angular/pwa</pre>
        <pre *ngSwitchCase="'dependency'">ng add _____</pre>
        <pre *ngSwitchCase="'test'">ng test</pre>
        <pre *ngSwitchCase="'build'">ng build --prod</pre>
    </div>
  
    <!-- Links -->
    <div class="card-container">
      <a class="circle-link" title="Animations" href="https://angular.io/guide/animations" target="_blank" rel="noopener">
        <svg id="Group_20" data-name="Group 20" xmlns="http://www.w3.org/2000/svg" width="21.813" height="23.453" viewBox="0 0 21.813 23.453">
          <path id="Path_15" data-name="Path 15" d="M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z" transform="translate(-4088.702 -972.736)" fill="#ffa726"/>
          <path id="Path_16" data-name="Path 16" d="M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z" transform="translate(-4170.633 -972.736)" fill="#fb8c00"/>
          <path id="Path_17" data-name="Path 17" d="M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z" transform="translate(-4125.003 -1058.315)" fill="#ffe0b2"/>
          <path id="Path_18" data-name="Path 18" d="M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z" transform="translate(-4125.003 -1036.757)" fill="#fff3e0"/>
          <path id="Path_19" data-name="Path 19" d="M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z" transform="translate(-4125.003 -1015.199)" fill="#fff"/>
        </svg>
      </a>
  
      <a class="circle-link" title="CLI" href="https://cli.angular.io/" target="_blank" rel="noopener">
        <svg alt="Angular CLI Logo" xmlns="http://www.w3.org/2000/svg" width="21.762" height="23.447" viewBox="0 0 21.762 23.447">
          <g id="Group_21" data-name="Group 21" transform="translate(0)">
            <path id="Path_20" data-name="Path 20" d="M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z" transform="translate(-2649.48 -313.618)" fill="#37474f"/>
            <path id="Path_21" data-name="Path 21" d="M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z" transform="translate(-2731.05 -313.618)" fill="#263238"/>
            <path id="Path_22" data-name="Path 22" d="M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z" transform="translate(-2687.274 -362.17)" fill="#fff"/>
            <path id="Path_23" data-name="Path 23" d="M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z" transform="translate(-2702.289 -380.631)" fill="#fff"/>
            <rect id="Rectangle_12" data-name="Rectangle 12" width="3.517" height="0.469" transform="translate(9.709 13.744)" fill="#fff"/>
          </g>
        </svg>
      </a>
  
      <a class="circle-link" title="Augury" href="https://augury.rangle.io/" target="_blank" rel="noopener">
        <svg alt="Angular Augury Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21.81" height="23.447" viewBox="0 0 21.81 23.447">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_13" data-name="Rectangle 13" width="10.338" height="10.27" fill="none"/>
            </clipPath>
          </defs>
          <g id="Group_25" data-name="Group 25" transform="translate(0)">
            <path id="Path_24" data-name="Path 24" d="M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z" transform="translate(-3769.274 -311.417)" fill="#4a3493"/>
            <path id="Path_25" data-name="Path 25" d="M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z" transform="translate(-3851.207 -311.417)" fill="#311b92"/>
            <g id="Group_24" data-name="Group 24" transform="translate(6.194 6.73)" opacity="0.5">
              <g id="Group_23" data-name="Group 23" transform="translate(0 0)">
                <g id="Group_22" data-name="Group 22" clip-path="url(#clip-path)">
                  <path id="Path_26" data-name="Path 26" d="M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z" transform="translate(-3822.107 -368.821)" fill="#fff"/>
                </g>
              </g>
            </g>
            <path id="Path_27" data-name="Path 27" d="M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z" transform="translate(-3814.311 -359.969)" fill="#fff"/>
          </g>
        </svg>
      </a>
  
      <a class="circle-link" title="Protractor" href="https://www.protractortest.org/" target="_blank" rel="noopener">
        <svg alt="Angular Protractor Logo" xmlns="http://www.w3.org/2000/svg" width="21.81" height="23.447" viewBox="0 0 21.81 23.447">
          <g id="Group_26" data-name="Group 26" transform="translate(0)">
            <path id="Path_28" data-name="Path 28" d="M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z" transform="translate(-4609.274 -311.417)" fill="#e13439"/>
            <path id="Path_29" data-name="Path 29" d="M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z" transform="translate(-4691.207 -311.417)" fill="#b52f32"/>
            <path id="Path_30" data-name="Path 30" d="M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z" transform="translate(-4634.008 -355.852)" fill="#fff"/>
          </g>
        </svg>
      </a>
  
      <a class="circle-link" title="Find a Local Meetup" href="https://www.meetup.com/find/?keywords=angular" target="_blank" rel="noopener">
        <svg alt="Meetup Logo" xmlns="http://www.w3.org/2000/svg" width="24.607" height="23.447" viewBox="0 0 24.607 23.447">
          <path id="logo--mSwarm" d="M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z" transform="translate(0 0.123)" fill="#f64060"/>
        </svg>
      </a>
  
      <a class="circle-link" title="Join the Conversation on Gitter" href="https://gitter.im/angular/angular" target="_blank" rel="noopener">
        <svg alt="Gitter Logo" xmlns="http://www.w3.org/2000/svg" width="19.447" height="19.447" viewBox="0 0 19.447 19.447">
          <g id="Group_40" data-name="Group 40" transform="translate(-1612 -405)">
            <rect id="Rectangle_19" data-name="Rectangle 19" width="19.447" height="19.447" transform="translate(1612 405)" fill="#e60257"/>
            <g id="gitter" transform="translate(1617.795 408.636)">
              <g id="Group_33" data-name="Group 33" transform="translate(0 0)">
                <rect id="Rectangle_15" data-name="Rectangle 15" width="1.04" height="9.601" transform="translate(2.304 2.324)" fill="#fff"/>
                <rect id="Rectangle_16" data-name="Rectangle 16" width="1.04" height="9.601" transform="translate(4.607 2.324)" fill="#fff"/>
                <rect id="Rectangle_17" data-name="Rectangle 17" width="1.04" height="4.648" transform="translate(6.91 2.324)" fill="#fff"/>
                <rect id="Rectangle_18" data-name="Rectangle 18" width="1.04" height="6.971" transform="translate(0 0)" fill="#fff"/>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
  
    <!-- Footer -->
    <footer>
        Love Angular?&nbsp;
        <a href="https://github.com/angular/angular" target="_blank" rel="noopener"> Give our repo a star.
          <div class="github-star-badge">
              <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            Star
          </div>
        </a>
        <a href="https://github.com/angular/angular" target="_blank" rel="noopener">
          <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#1976d2"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </a>
    </footer>
  
    <svg id="clouds" alt="Gray Clouds Background" xmlns="http://www.w3.org/2000/svg" width="2611.084" height="485.677" viewBox="0 0 2611.084 485.677">
      <path id="Path_39" data-name="Path 39" d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z" transform="translate(142.69 -634.312)" fill="#eee"/>
    </svg>
  
  </div>
  
  <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
  <!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->
  <!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->
  <!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->
  <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
  <!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->
  <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
  
  
  
  <router-outlet></router-outlet>