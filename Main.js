//El elemento se llamará PageEditor, que editará la página para ponerle mariqueras

class pageEditor extends HTMLElement {
	constructor() {
		super();
	}
}

customElements.define('pg-editor', pageEditor);

let x = new pageEditor();

console.log(x);