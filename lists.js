var itemsList = [
  {text:'uno', isInitial: true},
  {text:'dos', isInitial: false},
  {text:'tres', isInitial: true},
]

var printItems = function(){
  // buscamos la lista en el DOM y guardamos el nodo en una variable
  var initialList = document.getElementById('initialList')
  var secondList = document.getElementById('secondList')
  //console.log(initialList)
  itemsList.map(function(item){
    //console.log(item.text)
    // creo un li por cada item
    var itemLi = document.createElement('li')
    // le asigno el texto del item a cada li como su contenido
    itemLi.innerText = item.text
    //console.log(itemLi)
    // validamos a qué lista corresponde cada ITEM segun la propiedad de cada una.
    if(item.isInitial){
      initialList.appendChild(itemLi) 
    } else {
      secondList.appendChild(itemLi)
    }
  })
}