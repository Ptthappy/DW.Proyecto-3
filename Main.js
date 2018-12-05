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
				
				#btn1 {
					background-color: rgba(0, 0, 0, 0.5);
				  	border-radius: 1px;
				  	color: white;
				  	border: none;
				  	font-family: "Berlin Sans FB";
				  	
				  	position: absolute;
				  	width: 95px;
					height: 25px;
					top: 180px;
					left: 120px;
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
					left: 85px;
					font-family: "Berlin Sans FB";
					font-size: larger;
					resize: none;
					overflow: unset;
				}
				
				#txt2 {
					position: absolute;
					top: 80px;
					left: 85px;
					font-family: "Berlin Sans FB";
					font-size: larger;
					resize: none;
					overflow: unset;
				}
				
				#txt3 {
					position: absolute;
					top: 120px;
					left: 85px;
					font-family: "Berlin Sans FB";
					font-size: larger;
					resize: none;
					overflow: unset;
				}
				
				#tf1 {
					position: absolute;
					top: 45px;
					left: 10px;
					font-family: "Berlin Sans FB";
					font-size: larger;
				}
				
				#tf2 {
					position: absolute;
					top: 85px;
					left: 10px;
					font-family: "Berlin Sans FB";
					font-size: larger;
				}
				
				#tf3 {
					position: absolute;
					top: 125px;
					left: 10px;
					font-family: "Berlin Sans FB";
					font-size: larger;
				}
				
				#top {
					position: absolute;
					background-color: rgba(0, 0, 0, 0);
					width: 99%;
					height: 10px;
					top: -6px;
					left: 0.5%
				}
				
				
				#down {
					position: absolute;
					background-color: rgba(0, 0, 0, 0);
					width: 99%;
					height: 10px;
					top: 100%;
					left: 0.5%
				}
				
				#left {
					position: absolute;
					background-color: rgba(0, 0, 0, 0);
					width: 10px;
					height: 105%;
					top: -2%;
					left: -6px;
				}
				
				#right {
					position: absolute;
					background-color: rgba(0, 0, 0, 0);
					width: 10px;
					height: 105%;
					top: -2%;
					left: 99.3%;
				}
				
				
			  </style>
			  
			  	<div id="container">
			  		<div id="top-bar"></div>
			  		
			  		<div id="top"></div>
			  		<div id="down"></div>
			  		<div id="left"></div>
			  		<div id="right"></div>
					
					<button id="btn1" class="btn">Enter</button>
					<textarea id="txt1" cols="25" rows="1"></textarea>
					<textarea id="txt2" cols="25" rows="1"></textarea>
					<textarea id="txt3" cols="25" rows="1"></textarea>
					<div id="tf1">Nombre:</div>
					<div id="tf2">Apellido:</div>
					<div id="tf3">Cédula:</div>
					<table id="mt"></table>
				</div>
			  
			</style>
			`;
		let x1 = shadow.getElementById('container');
		let x2 = shadow.getElementById('top-bar');
		let x3 = shadow.getElementById('top');
		let x4 = shadow.getElementById('down');
		let x5 = shadow.getElementById('left');
		let x6 = shadow.getElementById('right');
		let isBarPress, antX, antY, overEdge;

		x3.onmousemove = evt => {
			x3.style.cursor = 'n-resize';
		};

		x3.onmousedown = evt => {
			overEdge = true;
		};

		x4.onmousemove = evt => {
			x4.style.cursor = 's-resize';
		};

		x4.onmousedown = evt => {
			overEdge = true;
		};

		x5.onmousemove = evt => {
			let i = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('top'));
			let j = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('height'));

			if (evt.clientY < i + 10 && evt.clientY > i - 10)
				x5.style.cursor = 'nw-resize';

			else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
				x5.style.cursor = 'sw-resize';

			else
				x5.style.cursor = 'w-resize';
		};

		x5.onmousedown = evt => {
			overEdge = true;
		};

		x6.onmousemove = evt => {
			let i = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('top'));
			let j = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('height'));

			if (evt.clientY < i + 10 && evt.clientY > i - 10)
				x6.style.cursor = 'ne-resize';

			else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
				x6.style.cursor = 'se-resize';

			else
				x6.style.cursor = 'e-resize';
		};

		x6.onmousedown = evt => {
			overEdge = true;
		};

		x2.onmousedown = function(evt) {
			isBarPress = true;
			antX = evt.clientX;
			antY = evt.clientY;
		};

		onmouseup = function(evt) {
			isBarPress = false;
			overEdge = false;
		};
		onmousemove = function(evt) {
			if (isBarPress) {
				let actX = evt.clientX;
				let actY = evt.clientY;
				let difX = actX - antX;
				let difY = actY - antY;
				antX = actX;
				antY = actY;

				let newDiv = x1;
				let position = getPosition(newDiv);

				newDiv.style.top = (position[0] + difY) + 'px';
				newDiv.style.left = (position[1] + difX) + 'px';

				if (position[0] + difY < 0)
					newDiv.style.top = 0 + 'px';

				else
					newDiv.style.top = (position[0] + difY) + 'px';

				if (position[1] + difX < 0)
					newDiv.style.left = 0 + 'px';

				else
					newDiv.style.left = (position[1] + difX) + 'px';
			}

			if (overEdge) {
				let actX = evt.clientX;
				let actY = evt.clientY;
				let difX = actX - antX;
				let difY = actY - antY;
				antX = actX;
				antY = actY;

				let newDiv = x1;
				let position = getPosition(newDiv);

				newDiv.style.top = (position[0] + difY) + 'px';
				newDiv.style.left = (position[1] + difX) + 'px';

				if (position[0] + difY < 0)
					newDiv.style.top = 0 + 'px';

				else
					newDiv.style.top = (position[0] + difY) + 'px';

				if (position[1] + difX < 0)
					newDiv.style.left = 0 + 'px';

				else
					newDiv.style.left = (position[1] + difX) + 'px';
			}
		};

		function getPosition(element) {
			let position = new Array(2);
			position[0] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('top'));
			position[1] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('left'));
			return position;
		}


	}

}


window.customElements.define('pg-editor', pageEditor);

let x = new pageEditor();

console.log(x);