var itemsList = [
    {text:'uno', isInitial: true},
    {text:'dos', isInitial: false},
    {text:'tres', isInitial: true},
  ]
  
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

  var createBtn = function(text, itemId, btnFuction){
    var btn = document.createElement('button')
    btn.innerText = text
    btn.id = itemId
    btn.onclick = function(){ btnFuction(this) }
    return btn
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
      // sumamos el boton al li
      itemLi.appendChild(createBtn('toggle', index, toggleItem))
      itemLi.appendChild(createBtn('delete', index, deleteItem))
  
      if(item.isInitial){
        initialList.appendChild(itemLi) 
      } else {
        secondList.appendChild(itemLi)
      }
    })
  }