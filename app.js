var wModal = function(obj){
	
	/*
		Obtenemos el objeto
	*/
	// Titulo de la cabezera
	var titulo = obj.titulo || 'Alerta';
	// Texto de la ventana
	var cuerpo = obj.cuerpo || 'Sin contexto';
	// Callback
	var callback = obj.callback || function(){}
	// Seleccionamos el body
	var body = document.querySelector('body');
	
	/*
		Creamos los elementos
	*/
	// Cremos el h2 de la cabezera
	var h2 = document.createElement('h2');
	// Cremoa el "a" de la cabezera
	var enlace = document.createElement('a');
	// Cremos la etiqueta "p" del cuerpo
	var p = document.createElement('p');
	// Cremos boton de aceptar
	var btn0 = crearButton('btn btn-primary','Aceptar');
	// Cremos boton de Cancelar
	var btn1 = crearButton('btn btn-danger','Cancelar');

	
	
	/*
		Creamos los nodos de texto
	*/
	// Cocamos el atributo
	enlace.setAttribute('href','#');
	// Creamos el texto
	var txt = document.createTextNode(titulo);
	// Cremos la x 
	var x = document.createTextNode('X');
	// Creamos el texto para p
	var pTexto = document.createTextNode(cuerpo);

	
	
	/*
		Agregamos los contenedores al texto
	*/
	// Agregamos el texto al h2
	h2.appendChild(txt);
	// Agregamos la X al enlace
	enlace.appendChild(x);
	// Agregamos el texto a p
	p.appendChild(pTexto);

	// Agregar un evento al btn aceptar
	btn0.addEventListener('click',function(){
		body.removeChild(wmBlock);
		body.removeAttribute('class');
		callback(1);
	});
	// Agregar un evento al btn Cancelar
	btn1.addEventListener('click',function(){
		body.removeChild(wmBlock);
		body.removeAttribute('class');
		callback(0);
	});
	// Agregar un evento cerrar
	enlace.addEventListener('click',function(){
		body.removeChild(wmBlock);
		body.removeAttribute('class');
		callback(2);
	});

	/*Funcion para crear un div*/
	function crearDiv(clase){
		var div = document.createElement('div');
		div.setAttribute('class',clase);
		return div;
	}
	/* Funcion para crear botones */
	function crearButton(clase,txt){
		var button = document.createElement('button');
		var txt = document.createTextNode(txt);
		button.setAttribute('class',clase);
		button.appendChild(txt);
		return button;
	}
	
	/*
		Creamos los div principales
	*/
	// Colocamos la clase
	body.setAttribute('class','escena');
	// Cremos la estructura de WM
	var wmBlock = crearDiv('wm-block');
	// Creamos la cabezera
	var wmHead = crearDiv('wm-head');
	// Creamos el body
	var wmBody = crearDiv('wm-body');
	// Creamos el cont de los contorlls
	var wmCont = crearDiv('wm-controls');
	/*
		Insertamos las estructuras
	*/
	wmHead.appendChild(h2);
	wmHead.appendChild(enlace);
	wmBlock.appendChild(wmHead);
	wmBody.appendChild(p);
	wmBlock.appendChild(wmBody);
	wmCont.appendChild(btn0);
	wmCont.appendChild(btn1);
	wmBody.appendChild(wmCont);
	body.appendChild(wmBlock);

}

document.querySelector('button').addEventListener('click',function(){
	var repuesta = wModal({
		'titulo': 'Hola mundo',
		'cuerpo' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis eaque impedit, ullam animi saepe harum, numquam, explicabo vero similique enim accusantium aliquam. Commodi aut libero, excepturi repellat exercitationem enim',
		'callback': function(respuesta){
			//alert(respuesta);
			/* Aqui va el codigo que ejecute 
			
			*/
		}
	});

})