// Datos iniciales de los elementos
var itemsList = [
  // cada elemento a listar tiene las propiedades text y isInitial que define su ubicación
  {text:'uno', isInitial: true},
  {text:'dos', isInitial: true},
  {text:'tres', isInitial: true},
]

// printItems añade en pantalla a los elementos según lo indiquen sus propiedades
var printItems = function(){
  // llamamos a la funcion que setea los contenedores de cada lista
  var initialList = setNode('initialList')
  var secondList = setNode('secondList')
  // recorremos la lista de elemenntos para crear un <li> por cada uno
  itemsList.map(function(item, index){
  // del .map() tomamos al elemento en cuestion y su indice
    // según la propiedad .isInitial de cada elemento lo ubicamos en el contenedor correspondiente
    if(item.isInitial){
      // con .appendChild() incluimos a cada elemento una vez que la función createItem() nos lo retorna debidamente creado. 
      initialList.appendChild(createItem(item.text, index)) 
    } else {
      secondList.appendChild(createItem(item.text, index))
    }
  })
}

// tomando el ID del contenedor como parámetro, buscamos en el DOM y limpiamos cualquier contennido HTML que tenga
var setNode = function(nodeName){
  var nodeName = document.getElementById(nodeName)
  nodeName.innerHTML = ''
  return nodeName
}

// tomando como parametros el texto de un elemento y su indice, creamos un <li> y le sumamos los botones necesarios
var createItem = function(text, index){
  var li = document.createElement('li')
  // seteamos le parametro text como contenido del <li>
  li.innerText = text
  // incluimos en su innterior los botones con las función createBtn
  li.appendChild(createBtn('toggle', index, toggleItem))
  li.appendChild(createBtn('delete', index, deleteItem))
  return li
}

// tomando como parametro el texto del botón, el id que va a tener y la función que debe ejecutar, creamos botones y los retornamos en donde fue llamada la fución
var createBtn = function(text, itemId, btnFuction){
  var btn = document.createElement('button')
  btn.innerText = text
  btn.id = itemId
  btn.onclick = function(){ btnFuction(this) }
  return btn
}

var toggleItem = function(btn){
  console.log(btn.id)
  itemsList[btn.id].isInitial = !itemsList[btn.id].isInitial
  printItems()
}

var deleteItem = function(btn){
  // splice elimina del array al elemento especificado por su indice.
  itemsList.splice(btn.id, 1)
  printItems()
}