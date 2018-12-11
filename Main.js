//El elemento se llamará PageEditor, que editará la página para ponerle mariqueras

class PageEditor extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({mode: 'open'});

		let base = document.createElement('div');
		base.id = 'base';
		base.style.position = 'absolute';
		base.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		base.style.top = 0 + 'px';
		base.style.left = 0 + 'px';
		base.style.width = 2000 + 'px';
		base.style.height = 2000 + 'px';

		let container = document.createElement('div');
		container.id = 'container';
		container.style.position = 'absolute';
		container.style.backgroundColor = 'rgba(100, 190, 0, 0.07)';
		container.style.border = '2px solid darkslateblue';
		container.style.borderRadius = '3px';
		container.style.width = '340px';
		container.style.height = '420px';
		container.style.top = '50px';
		container.style.left = '10px';
		container.style.userSelect = 'none';
		container.style.msUserSelect = 'none';
		container.style.webkitUserSelect = 'none';

		let topbar = document.createElement('div');
		topbar.id = 'top-bar';
		topbar.style.position = 'absolute';
		topbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		topbar.style.width = '100%';
		topbar.style.height = '28px';
		topbar.style.textAlign = 'left';
		topbar.textContent = 'Editor';

		let redbtn = document.createElement('div');
		redbtn.id = 'redbtn';
		redbtn.style.position = 'absolute';
		redbtn.style.width = '28px';
		redbtn.style.height = '28px';
		redbtn.style.backgroundColor = 'rgb(190, 0, 0)';
		redbtn.style.border = 'none';
		redbtn.style.top = '0px';
		redbtn.style.right = '0px';
		redbtn.style.textAlign = 'center';
		redbtn.textContent = '✖';

		let minbtn = document.createElement('div');
		minbtn.id = 'minbtn';
		minbtn.style.position = 'absolute';
		minbtn.style.width = '28px';
		minbtn.style.height = '28px';
		minbtn.style.backgroundColor = 'rgb(200, 200, 200)';
		minbtn.style.border = 'none';
		minbtn.style.top = '0px';
		minbtn.style.right = '56px';
		minbtn.style.textAlign = 'center';
		minbtn.textContent = '➖';

		let maxbtn = document.createElement('div');
		maxbtn.id = 'maxbtn';
		maxbtn.style.position = 'absolute';
		maxbtn.style.width = '28px';
		maxbtn.style.height = '28px';
		maxbtn.style.backgroundColor = 'rgb(70, 70, 100)';
		maxbtn.style.border = 'none';
		maxbtn.style.top = '0px';
		maxbtn.style.right = '28px';
		maxbtn.style.textAlign = 'center';
		maxbtn.textContent = '💯';

		//Divs invisibles para los listeners
		let Top = document.createElement('div');
		Top.id = 'top';
		Top.style.position = 'absolute';
		Top.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		Top.style.width = '99%';
		Top.style.height = '10px';
		Top.style.top = '-6px';
		Top.style.left = '0.5%';

		let down = document.createElement('div');
		down.id = 'down';
		down.style.position = 'absolute';
		down.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		down.style.width = '99%';
		down.style.height = '10px';
		down.style.top = '100%';
		down.style.left = '0.5%';

		let Left = document.createElement('div');
		Left.id = 'left';
		Left.style.position = 'absolute';
		Left.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		Left.style.width = '10px';
		Left.style.height = '105%';
		Left.style.top = '-2%';
		Left.style.left = '-6px';

		let right = document.createElement('div');
		right.id = 'right';
		right.style.position = 'absolute';
		right.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		right.style.width = '10px';
		right.style.height = '105%';
		right.style.top = '-2%';
		right.style.left = '99.3%';

		this.shadow.appendChild(base);
		this.shadow.appendChild(container);
		container.appendChild(topbar);
		topbar.appendChild(redbtn);
		topbar.appendChild(minbtn);
		topbar.appendChild(maxbtn);
		container.appendChild(Top);
		container.appendChild(down);
		container.appendChild(Left);
		container.appendChild(right);

		this.x1 = this.shadow.getElementById('container');
		this.x2 = this.shadow.getElementById('top-bar');
		this.x3 = this.shadow.getElementById('top');
		this.x4 = this.shadow.getElementById('down');
		this.x5 = this.shadow.getElementById('left');
		this.x6 = this.shadow.getElementById('right');
		this.x7 = this.shadow.getElementById('redbtn');
		this.x8 = this.shadow.getElementById('maxbtn');
		this.x9 = this.shadow.getElementById('minbtn');

		/*console.log(this.x1, this.x2, this.x3, this.x4, this.x5, this.x6, this.x7, this.x8, this.x9);*/

		let isBarPress, antX, antY, overEdge, up, dw, lf, rg, isMax = false, isHidden = false, top, left, width, height, lastHeight;

		this.x7.onmouseover = evt => {
			this.x7.style.backgroundColor = 'rgb(255, 0, 0)';
		};

		this.x7.onmouseleave = evt => {
			this.x7.style.backgroundColor = 'rgb(190, 0, 0)';
		};

		this.x7.onclick = evt => {
			this.x1.remove();
		};

		this.x8.onmouseover = evt => {
			this.x8.style.backgroundColor = 'rgb(70, 70, 100)';
		};

		this.x8.onmouseleave = evt => {
			this.x8.style.backgroundColor = 'rgb(100, 100, 140)';
		};

		this.x8.onclick = evt => {
			if(!isMax) {
				top = this.x1.style.top;
				left = this.x1.style.left;
				width = this.x1.style.width;
				height = this.x1.style.height;
				this.x1.style.top = 0 + 'px';
				this.x1.style.left = 0 + 'px';
				this.x1.style.width = 100 + '%';
				this.x1.style.height = 100 + '%';
				isMax = true;
			}

			else {
				this.x1.style.top = top;
				this.x1.style.left = left;
				this.x1.style.width = width;
				this.x1.style.height = height;
				isMax = false;
			}
		};

		this.x9.onclick = () => {
			if (!isHidden){
				for (let elements of this.x1.children) {
					console.log(elements.id === 'top-bar');
					if (elements.id === 'top-bar')
						continue;
					elements.style.visibility = 'hidden';
				}
				lastHeight = document.defaultView.getComputedStyle(this.x1, null).getPropertyValue('height');
				this.x1.style.height = 28 + 'px';
				isHidden = true;
			}

			else{
				for (let elements of this.x1.children) {
					console.log(elements.id === 'top-bar');
					if (elements.id === 'top-bar')
						continue;
					elements.style.visibility = 'visible';
				}

				this.x1.style.height = lastHeight;
				isHidden = false;
			}

		};

		this.x9.onmouseover = evt => {
			this.x9.style.backgroundColor = 'rgb(150, 150, 150)';
		};

		this.x9.onmouseleave = evt => {
			this.x9.style.backgroundColor = 'rgb(200, 200, 200)';
		};

		this.x3.onmousemove = evt => {
			this.x3.style.cursor = 'n-resize';
		};

		this.x3.onmousedown = evt => {
			overEdge = true;
			up = true;
			antX = evt.clientX;
			antY = evt.clientY;
		};

		this.x4.onmousemove = evt => {
			this.x4.style.cursor = 's-resize';
		};

		this.x4.onmousedown = evt => {
			overEdge = true;
			dw = true;
			antX = evt.clientX;
			antY = evt.clientY;
		};

		this.x5.onmousemove = evt => {
			let i = parseInt(document.defaultView.getComputedStyle(this.x1, null).getPropertyValue('top'));
			let j = parseInt(document.defaultView.getComputedStyle(this.x1, null).getPropertyValue('height'));

			if (evt.clientY < i + 10 && evt.clientY > i - 10)
				this.x5.style.cursor = 'nw-resize';

			else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
				this.x5.style.cursor = 'sw-resize';

			else
				this.x5.style.cursor = 'w-resize';
		};

		this.x5.onmousedown = evt => {
			overEdge = true;

			let i = parseInt(document.defaultView.getComputedStyle(this.x1, null).getPropertyValue('top'));
			let j = parseInt(document.defaultView.getComputedStyle(this.x1, null).getPropertyValue('height'));

			if (evt.clientY < i + 10 && evt.clientY > i - 10)
				up = true;

			else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
				dw = true;

			rg = true;

			lf = true;
			antX = evt.clientX;
			antY = evt.clientY;
		};

		this.x6.onmousemove = evt => {
			let i = parseInt(document.defaultView.getComputedStyle(this.x1, null).getPropertyValue('top'));
			let j = parseInt(document.defaultView.getComputedStyle(this.x1, null).getPropertyValue('height'));

			if (evt.clientY < i + 10 && evt.clientY > i - 10)
				this.x6.style.cursor = 'ne-resize';

			else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
				this.x6.style.cursor = 'se-resize';

			else
				this.x6.style.cursor = 'e-resize';
		};

		this.x6.onmousedown = evt => {
			overEdge = true;
			let i = parseInt(document.defaultView.getComputedStyle(this.x1, null).getPropertyValue('top'));
			let j = parseInt(document.defaultView.getComputedStyle(this.x1, null).getPropertyValue('height'));

			if (evt.clientY < i + 10 && evt.clientY > i - 10)
				up = true;

			else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
				dw = true;

			rg = true;
			antX = evt.clientX;
			antY = evt.clientY;
		};

		this.x2.onmousedown = function(evt) {
			isBarPress = true;
			antX = evt.clientX;
			antY = evt.clientY;
		};

		this.onmouseup = function(evt) {
			isBarPress = false;
			overEdge = false;
			up = false;
			dw = false;
			lf = false;
			rg = false;
		};

		onmousemove = function(evt) {
			console.log('culo2');
		};

		this.onmousemove = function(evt) {
			console.log('culo');
			if (isBarPress) {
				let actX = evt.clientX;
				let actY = evt.clientY;
				let difX = actX - antX;
				let difY = actY - antY;
				antX = actX;
				antY = actY;

				let newDiv = this.x1;
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

				let newDiv = this.x1;

				let dimension = getDimensions(newDiv);
				let position = getPosition(newDiv);

				if (dimension[0] < 420 || dimension[1] < 340) {
					if (dimension[1] < 340) {
						newDiv.style.width = 340 + 'px';
						return;
					}

					else {
						newDiv.style.height = 420 + 'px';
						return;
					}
				}

				if (up) {
					if (lf || rg) {
						if(lf) {
							newDiv.style.width = dimension[1] - difX + 'px';
							newDiv.style.left = position[1] + difX + 'px';
						}

						else
							newDiv.style.width = dimension[1] + difX + 'px';
					}

					newDiv.style.height = dimension[0] - difY + 'px';
					newDiv.style.top = position[0] + difY + 'px';
					return;
				}

				if (dw) {
					if (lf || rg) {
						if(lf) {
							newDiv.style.width = dimension[1] - difX + 'px';
							newDiv.style.left = position[1] + difX + 'px';
						}

						else
							newDiv.style.width = dimension[1] + difX + 'px';
					}

					newDiv.style.height = dimension[0] + difY + 'px';
					return;
				}

				if(lf) {
					newDiv.style.width = dimension[1] - difX + 'px';
					newDiv.style.left = position[1] + difX + 'px';
					return;
				}

				if (rg) {
					newDiv.style.width = dimension[1] + difX + 'px';
					return;
				}
			}
		};

		function getPosition(element) {
			let position = new Array(2);
			position[0] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('top'));
			position[1] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('left'));
			return position;
		}

		function getDimensions(element) {
			let dim = new Array(2);
			dim[0] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('height'));
			dim[1] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('width'));
			return dim;
		}

	}

	connectedCallback() {
		this.x1 = this.shadow.getElementById('container');
		this.x2 = this.shadow.getElementById('top-bar');
		this.x3 = this.shadow.getElementById('top');
		this.x4 = this.shadow.getElementById('down');
		this.x5 = this.shadow.getElementById('left');
		this.x6 = this.shadow.getElementById('right');
		this.x7 = this.shadow.getElementById('redbtn');
		this.x8 = this.shadow.getElementById('maxbtn');
		this.x9 = this.shadow.getElementById('minbtn');
		let x10 = this.shadow.getElementById('container');
		console.log(x10);

		this.x1.appendChild(this.addObj({type: 'button', id: 'btn1', top: '43%', left: '35.3%',
			width: '95px', height: '25px', backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none',
			textContent: 'Enter', fontFamily: 'Berlin Sans FB', borderRadius: '2px'}));

		this.x1.appendChild(this.addObj({type: 'div', id: 'txtf1', textContent: 'Nombre: ',
			top: '45px', left: '10px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));
		this.x1.appendChild(this.addObj({type: 'div', id: 'txtf2', textContent: 'Apellido: ',
			top: '85px', left: '10px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));
		this.x1.appendChild(this.addObj({type: 'div', id: 'txtf3', textContent: 'Cédula: ',
			top: '125px', left: '10px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));

		this.x1.appendChild(this.addObj({type: 'input', id: 'field1', top: '43px', left: '85px',
			width: '200px', height: '20px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));
		this.x1.appendChild(this.addObj({type: 'input', id: 'field2', top: '83px', left: '85px',
			width: '200px', height: '20px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));
		this.x1.appendChild(this.addObj({type: 'input', id: 'field3', top: '123px', left: '85px',
			width: '200px', height: '20px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));

		this.x1.appendChild(this.addObj({type: 'table', id: 'mt', top: '52%', left: '2.4%', width: '95.5%',
			height: '46%', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '2px', border: 'none'}));

	}

	addObj(prop) {  //basicProperties (Array): typeElement, id, top, left, width, height
									   //other (Obj): backColor, border, textAlign, fontSize, fontFamily
		let element = document.createElement(prop.type);
		element.id = prop.id;
		element.textContent = prop.textContent;
		element.style.position = 'absolute';
		element.style.top = prop.top;
		element.style.left = prop.left;
		element.style.width = prop.width;
		element.style.height = prop.height;

		element.style.backgroundColor = prop.backgroundColor;
		element.style.border = prop.border;
		element.style.borderRadius = prop.borderRadius;
		element.style.textAlign = prop.textAlign;
		element.style.fontSize = prop.fontSize;
		element.style.fontFamily = prop.fontFamily;
		return element;
	}

}


window.customElements.define('pg-editor', PageEditor);

let a = new PageEditor();