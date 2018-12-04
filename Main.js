//El elemento se llamará PageEditor, que editará la página para ponerle mariqueras

class pageEditor extends HTMLElement {
	constructor() {
		super();

		let shadow = this.attachShadow({mode : 'open'});
		shadow.innerHTML =
			`
			<style>
				
				#container {
					position: absolute;
					background-color: rgba(100, 190, 0, 0.07);
					border : 2px solid darkslateblue;
					border-radius: 3px;
					
					width: 550px;
					height: 320px;
					top: 50px;
					left: 10px;
				}
				
				#top-bar {
					position: absolute;
					width: 100%;
					height: 28px;
					background-color: rgba(0, 0, 0, 0.5);
				}
				
				.btn {
					background-color: rgba(0, 0, 0, 0.5);
				  	border-radius: 2px;
				  	color: white;
				  	
				  	position: absolute;
				  	width: 95px;
					height: 25px;
					top: 60px;
					left: 300px;
				}
				
				#btn1 {
									
				}
				
			  </style>
			  
			  	<div id="container">
			  		<div id="top-bar">
			  		
					</div>
					
					<button id="btn1" class="btn">Submit</button>
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