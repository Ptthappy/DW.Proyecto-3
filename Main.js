//El elemento se llamará PageEditor, que editará la página para ponerle mariqueras

class pageEditor extends HTMLElement {
	constructor() {
		super();

		let shadow = this.attachShadow({mode : 'open'});
		shadow.innerHTML =
			`
			<style>
				
				#container {
					background-color: black;
					border : 5px solid black;
					
					width: 100%;
					height: 100%;
				}
				
				.btn-container {
				  border: 2px dashed #e67e22;
				  padding: 1.5em;
				  text-align: center;
				}
				
				.btn {
				  background-color: #e67e22;
				  border: 0;
				  border-radius: 5px;
				  color: white;
				  padding: 1.5em;
				  text-transform: uppercase;
				}
			  </style>
			  
			  	<div id="container">
			  		
				</div>
			  
			</style>
			`;
		let txt1 = document.createElement("div");
		let txt2 = document.createElement("div");
		let txt3 = document.createElement("div");



	}
}

window.customElements.define('pg-editor', pageEditor);

let x = new pageEditor();

console.log(x);