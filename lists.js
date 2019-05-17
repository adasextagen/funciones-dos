var itemsList = [
  {text:'uno', isInitial: true},
  {text:'dos', isInitial: false},
  {text:'tres', isInitial: true},
]

var toggleItem = function(btn){
  console.log(btn.id)
  itemsList[btn.id].isInitial = !itemsList[btn.id].isInitial
  
  console.log(itemsList[btn.id].isInitial)
  printItems()
}

var deleteItem = function(btn){
  // splice elimina del array al elemento especificado por su indice.
  itemsList.splice(btn.id, 1)
  printItems()
}

var printItems = function(){
  // buscamos la lista en el DOM y guardamos el nodo en una variable
  var initialList = document.getElementById('initialList')
  // cuando llamamos a la lista limpiamos su contenido
  initialList.innerHTML = ''
  var secondList = document.getElementById('secondList')
  secondList.innerHTML = ''
  //console.log(initialList)
  itemsList.map(function(item, index){
    //console.log(item.text)
    // creo un li por cada item
    var itemLi = document.createElement('li')
    // le asigno el texto del item a cada li como su contenido
    itemLi.innerText = item.text
    //console.log(itemLi)
    // validamos a qué lista corresponde cada ITEM segun la propiedad de cada una.
    // creamos un boton para incluirlo en el li
    var toggleBtn = document.createElement('button')
    // especificamos el nombre visible del boton
    toggleBtn.innerText = 'toggle'
    toggleBtn.id = index
    // le vinculamos al btn la funcion toggle
    // this hace que la funcion reciba como parametro al boton en cuestion
    toggleBtn.onclick = function(){ toggleItem(this) }
    // sumamos el boton al li
    // creamos el boton que elimina el elemento
    var deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'delete'
    deleteBtn.id = index
    deleteBtn.onclick = function(){ deleteItem(this) }
    // sumamos el boton al li
    itemLi.appendChild(toggleBtn)
    itemLi.appendChild(deleteBtn)

    if(item.isInitial){
      initialList.appendChild(itemLi) 
    } else {
      secondList.appendChild(itemLi)
    }
  })
}