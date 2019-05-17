var itemsList = [
    {text:'uno', isInitial: true},
    {text:'dos', isInitial: true},
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
   var setNode = function(nodeName){
       var nodeName = document.getElementById(nodeName)
       nodeName.innerHTML = ''
       return nodeName
   }

  var createItem = function(text, index){
    var li = document.createElement('li')
    li.innerText = text
    li.appendChild(createBtn('toggle', index, toggleItem))
    li.appendChild(createBtn('delete', index, deleteItem))
    return li
  }

  var printItems = function(){
    // llamamos a la funcion que setea los nodos que necesitamos
    var initialList = setNode('initialList')
    var secondList = setNode('secondList')
    itemsList.map(function(item, index){
      if(item.isInitial){
        initialList.appendChild(createItem(item.text, index)) 
      } else {
        secondList.appendChild(createItem(item.text, index))
      }
    })
  }

