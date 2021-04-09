class Head extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback() {
        this.innerHTML = `
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
            <link href="assets/css/style.css" rel="stylesheet">
            <link href="assets/css/style-sm.css" rel="stylesheet">
            <link href="assets/css/style-md.css" rel="stylesheet">
            <script src="assets/js/main.js"></script>
            <script src="components/components.js"></script>
            
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Emblema+One&display=swap" rel="stylesheet">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet">
            <title>Nobik - scentralizowana kontrola aplikacji</title>
            <!-- Hotjar Tracking Code for www.nobik.pl -->
            <script>
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:2288547,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            </script>
        </head>
        
        `
    }
}

class Header extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bottom-border">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1 logo">Nobik</span>
              <button 
                class="navbar-toggler toggle-button" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
              </button>
              <div class="collapse navbar-collapse dropdown" id="navbarSupportedContent">                
                <!-- <button class="button-nav outline">Zaloguj</button>
                <button class="button-nav">Zarejestruj</button> -->
                <a href="./error.html">Zaloguj się</a>
                <br>
                <a href="./error.html">Zarejestruj się</a>
              </div>
            </div>
        </nav>
        `
    }
}

class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback(){
        this.innerHTML = `
        <div class="footer row align-items-center justify-content-center">
          <div class="col-sm-9">
            <p>Copyright&copy Krzysztof Kruk</p>
          </div>
        </div>
        `
    }
}

class GetStartedButton extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {

        this.innerHTML = `
        <a href="./error.html">
            <div class="button">Zacznij</div>
        </a>
        `
    }
}
  
customElements.define('header-component', Header);
customElements.define('head-component', Head);
customElements.define('footer-component', Footer);
customElements.define('get-started-button', GetStartedButton);

