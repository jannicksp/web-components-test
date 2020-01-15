"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StandardJSWebComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(attr, oldValue, newValue) { }
    connectedCallback() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
      <body style="text-align:center;">
      <div style="
      display: flex;
      justify-content: center;
      ">
    <h1 style="color:green;">Check dit operativsystem</h1>
    </div>
    <div style="display: flex;
    justify-content: center;
    ">
    <button>
        Retuner styresystem
    </button>
    </div>

</body>
        `;
//editable Javascript for
        const buttonElement = this.shadowRoot.querySelector("button");
        this.initClickListener(buttonElement);

    }


    initClickListener(buttonElement) {
        buttonElement.addEventListener("click", function version() {
            //Edit javascript for button
            var os = navigator.appVersion;

            let newPtag = document.createElement("p" );
            newPtag.style.cssText = "display: flex;justify-content: center;";

            newPtag.innerHTML = os;
            document.body.appendChild(newPtag);
            // ^^ --
        });
        console.log(buttonElement);
    }


    disconnectedCallback() { }
    adoptedCallback() { }
}
exports.default = StandardJSWebComponent;

//setTimeout(() => {
//
  //  const buttonElement = this.shadowRoot.querySelector("button");
    //console.log(buttonElement);
   // buttonElement.style.backgroundColor = "green";
   // buttonElement.addEventListener("click", function(){
     //    var os = navigator.appVersion;
       // document.getElementById("OS").innerHTML = os;
   // });
// }, 200);
