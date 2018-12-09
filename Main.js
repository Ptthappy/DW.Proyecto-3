//El elemento se llamará PageEditor, que editará la página para ponerle mariqueras

class pageEditor extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({mode: 'open'});

		this.x1 = null;
		this.x2 = null;
		this.x3 = null;
		this.x4 = null;
		this.x5 = null;
		this.x6 = null;
		this.x7 = null;
		this.x8 = null;
		this.x9 = null;

		let isBarPress, antX, antY, overEdge, up, dw, lf, rg, isMax = false, isHidden = false,
			top, left, width, height, lastHeight;

	}

	connectedCallback() {
		this.initializeWindow();
		this.addObj([]);
	}

	initializeWindow() {
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
		let top = document.createElement('div');
		top.id = 'top';
		top.style.position = 'absolute';
		top.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		top.style.width = '99%';
		top.style.height = '10px';
		top.style.top = '-6px';
		top.style.left = '0.5%';

		let down = document.createElement('div');
		down.id = 'down';
		down.style.position = 'absolute';
		down.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		down.style.width = '99%';
		down.style.height = '10px';
		down.style.top = '100%';
		down.style.left = '0.5%';

		let left = document.createElement('div');
		left.id = 'left';
		left.style.position = 'absolute';
		left.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		left.style.width = '10px';
		left.style.height = '105%';
		left.style.top = '-2%';
		left.style.left = '-6px';

		let right = document.createElement('div');
		right.id = 'right';
		right.style.position = 'absolute';
		right.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		right.style.width = '99%';
		right.style.height = '10px';
		right.style.top = '100%';
		right.style.left = '0.5%';

		this.shadow.appendChild(container);
		container.appendChild(topbar);
		topbar.appendChild(redbtn);
		topbar.appendChild(minbtn);
		topbar.appendChild(maxbtn);
		container.appendChild(top);
		container.appendChild(down);
		container.appendChild(left);
		container.appendChild(right);

		container.appendChild(this.addObj({type: 'button', id: 'btn1', top: '43%', left: '35.3%',
			width: '95px', height: '25px', backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none',
			textContent: 'Enter', fontFamily: 'Berlin Sans FB', borderRadius: '2px'}));

		container.appendChild(this.addObj({type: 'div', id: 'txtf1', textContent: 'Nombre: ',
			top: '45px', left: '10px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));
		container.appendChild(this.addObj({type: 'div', id: 'txtf2', textContent: 'Apellido: ',
			top: '85px', left: '10px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));
		container.appendChild(this.addObj({type: 'div', id: 'txtf3', textContent: 'Cédula: ',
			top: '125px', left: '10px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));

		container.appendChild(this.addObj({type: 'input', id: 'field1', top: '43px', left: '85px',
			width: '200px', height: '20px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));
		container.appendChild(this.addObj({type: 'input', id: 'field2', top: '83px', left: '85px',
			width: '200px', height: '20px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));
		container.appendChild(this.addObj({type: 'input', id: 'field3', top: '123px', left: '85px',
			width: '200px', height: '20px', fontSize: 'larger', fontFamily: 'Berlin Sans FB'}));

		container.appendChild(this.addObj({type: 'table', id: 'mt', top: '52%', left: '2.4%', width: '95.5%',
			height: '46%', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '2px', border: 'none'}));

		this.x1 = this.shadow.getElementById('container');
		this.x2 = this.shadow.getElementById('top-bar');
		this.x3 = this.shadow.getElementById('top');
		this.x4 = this.shadow.getElementById('down');
		this.x5 = this.shadow.getElementById('left');
		this.x6 = this.shadow.getElementById('right');
		this.x7 = this.shadow.getElementById('redbtn');
		this.x8 = this.shadow.getElementById('maxbtn');
		this.x9 = this.shadow.getElementById('minbtn');

		addEventListener('onmousemove', this.move);
		addEventListener('onmouseup', this.up);
		this.x2.addEventListener('onmousedown', this.x2down);
		this.x3.addEventListener('onmousemove', this.x3move);
		this.x3.addEventListener('onmousedown', this.x3down);
		this.x4.addEventListener('onmousemove', this.x4move);
		this.x4.addEventListener('onmousedown', this.x4down);
		this.x5.addEventListener('onmousemove', this.x5move);
		this.x5.addEventListener('onmousedown', this.x5down);
		this.x6.addEventListener('onmousemove', this.x6move);
		this.x6.addEventListener('onmousedown', this.x6down);
		this.x7.addEventListener('onmouseover', this.x7over);
		this.x7.addEventListener('onmouseleave', this.x7leave);
		this.x7.addEventListener('onclick', this.x7click);
		this.x8.addEventListener('onmouseover', this.x8over);
		this.x8.addEventListener('onmouseleave', this.x8leave);
		this.x8.addEventListener('onclick', this.x8click);
		this.x9.addEventListener('onmouseover', this.x9over);
		this.x9.addEventListener('onmouseleave', this.x9leave);
		this.x9.addEventListener('onclick', this.x9click);
	}

	addObj(prop) {  //basicProperties (Array): typeElement, id, top, left, width, height
									   //other (Obj): backColor, border, textAlign, fontSize, fontFamily
		let element = document.createElement(prop.type);
		element.id = prop.id;
		element.textContent = prop.textContent
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

	x7over(evt) {
		this.x7.style.backgroundColor = 'rgb(255, 0, 0)';
	};

	x7leave(evt) {
		this.x7.style.backgroundColor = 'rgb(190, 0, 0)';
	};

	x7click(evt) {
		this.x1.remove();
	};

	x8over(evt) {
		this.x8.style.backgroundColor = 'rgb(70, 70, 100)';
	};

	x8leave(evt) {
		this.x8.style.backgroundColor = 'rgb(100, 100, 140)';
	};

	x8click(evt) {
		if(!isMax) {
			top = x1.style.top;
			left = x1.style.left;
			width = x1.style.width;
			height = x1.style.height;
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

	x9click(evt) {
		if (!isHidden){
			for (let elements of x1.children) {
				if (elements.id === 'top-bar')
					continue;
				elements.style.visibility = 'hidden';
			}
			lastHeight = document.defaultView.getComputedStyle(x1, null).getPropertyValue('height');
			this.x1.style.height = 28 + 'px';
			isHidden = true;
		}

		else{
			for (let elements of x1.children) {
				if (elements.id === 'top-bar')
					continue;
				elements.style.visibility = 'visible';
			}

			this.x1.style.height = lastHeight;
			isHidden = false;
		}

	};

	x9over(evt) {
		this.x9.style.backgroundColor = 'rgb(150, 150, 150)';
	};

	x9leave(evt) {
		this.x9.style.backgroundColor = 'rgb(200, 200, 200)';
	};

	x3move(evt) {
		this.x3.style.cursor = 'n-resize';
	};

	x3down(evt) {
		overEdge = true;
		up = true;
		antX = evt.clientX;
		antY = evt.clientY;
	};

	x4move(evt) {
		this.x4.style.cursor = 's-resize';
	};

	x4down(evt) {
		overEdge = true;
		dw = true;
		antX = evt.clientX;
		antY = evt.clientY;
	};

	x5move(evt) {
		let i = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('top'));
		let j = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('height'));

		if (evt.clientY < i + 10 && evt.clientY > i - 10)
			this.x5.style.cursor = 'nw-resize';

		else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
			this.x5.style.cursor = 'sw-resize';

		else
			this.x5.style.cursor = 'w-resize';
	};

	x5down(evt) {
		overEdge = true;

		let i = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('top'));
		let j = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('height'));

		if (evt.clientY < i + 10 && evt.clientY > i - 10)
			up = true;

		else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
			dw = true;

		rg = true;

		lf = true;
		antX = evt.clientX;
		antY = evt.clientY;
	};

	x6move(evt) {
		let i = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('top'));
		let j = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('height'));

		if (evt.clientY < i + 10 && evt.clientY > i - 10)
			this.x6.style.cursor = 'ne-resize';

		else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
			this.x6.style.cursor = 'se-resize';

		else
			this.x6.style.cursor = 'e-resize';
	};

	x6down(evt) {
		overEdge = true;
		let i = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('top'));
		let j = parseInt(document.defaultView.getComputedStyle(x1, null).getPropertyValue('height'));

		if (evt.clientY < i + 10 && evt.clientY > i - 10)
			up = true;

		else if (evt.clientY > i + j - 20 && evt.clientY < i + j + 20)
			dw = true;

		rg = true;
		antX = evt.clientX;
		antY = evt.clientY;
	};

	x2down(evt) {
		isBarPress = true;
		antX = evt.clientX;
		antY = evt.clientY;
	};

	up(evt) {
		isBarPress = false;
		overEdge = false;
		up = false;
		dw = false;
		lf = false;
		rg = false;
	};

	move(evt) {
		if (isBarPress) {
			let actX = evt.clientX;
			let actY = evt.clientY;
			let difX = actX - antX;
			let difY = actY - antY;
			antX = actX;
			antY = actY;

			let newDiv = this.x1;
			let position = this.getPosition(newDiv);

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

			let dimension = this.getDimensions(newDiv);
			let position = this.getPosition(newDiv);

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

	getPosition(element) {
		let position = new Array(2);
		position[0] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('top'));
		position[1] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('left'));
		return position;
	}

	getDimensions(element) {
		let dim = new Array(2);
		dim[0] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('height'));
		dim[1] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue('width'));
		return dim;
	}

}


window.customElements.define('pg-editor', pageEditor);

let a = new pageEditor();