class Header extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bottom-border">
            <div class="container-fluid">
              <a href="index.html">
                <span class="navbar-brand mb-0 h1 logo">Nobik</span>
              </a>
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
customElements.define('header-component', Header);

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
customElements.define('footer-component', Footer);

class GetStartedButton extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {

        this.innerHTML = `
        <a href="./getting-started.html">
            <div class="button">Dowiedz się więcej</div>
        </a>
        `
    }
}
customElements.define('get-started-button', GetStartedButton);

