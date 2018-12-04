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
					
					width: 340px;
					height: 420px;
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
				  	border-radius: 1px;
				  	color: white;
				  	border: none;
				  	font-family: "Berlin Sans FB";
				  	
				  	position: absolute;
				  	width: 95px;
					height: 25px;
					top: 180px;
					left: 150px;
				}
				
				#btn1 {
					
				}
				
				#mt {
					background-color: rgba(0, 0, 0, 0.3);
				  	border-radius: 1px;
				  	border: none;
				  	
				  	position: absolute;
				  	width: 320px;
					height: 190px;
					top: 220px;
					left: 10px;
				}
				
				#txt1 {
					position: absolute;
					top: 40px;
					left: 100px;
				}
				
				#txt2 {
					position: absolute;
					top: 80px;
					left: 100px;
				}
				
				#txt3 {
					position: absolute;
					top: 120px;
					left: 100px;
				}
				
				#tf1 {
					position: absolute;
					top: 50px;
					left: 10px;
					font-family: "Berlin Sans FB";
					font-size: larger;
				}
				
				#tf2 {
					position: absolute;
					top: 90px;
					left: 10px;
					font-family: "Berlin Sans FB";
					font-size: larger;
				}
				
				#tf3 {
					position: absolute;
					top: 130px;
					left: 10px;
					font-family: "Berlin Sans FB";
					font-size: larger;
				}
				
			  </style>
			  
			  	<div id="container">
			  		<div id="top-bar">
			  		
					</div>
					
					<button id="btn1" class="btn">Submit</button>
					<textarea id="txt1" cols="30" rows="2"></textarea>
					<textarea id="txt2" cols="30" rows="2"></textarea>
					<textarea id="txt3" cols="30" rows="2"></textarea>
					<div id="tf1">Nombre:</div>
					<div id="tf2">Apellido:</div>
					<div id="tf3">Cédula:</div>
					<table id="mt"></table>
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