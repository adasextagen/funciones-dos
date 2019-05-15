var count = 50;
// funcion que suma
var addToCount = function(){
  count ++
  //console.log(count) probamos que se incremente el valor de count
  printCount()
}

// función que resta
var substractToCount = function(){
  // validamos que se cumpla la condicion de que count sea mayor a 0 para restarle
  if( count > 0) count -- // if resumido. sólo si tiene una sola linea de ejecución
  printCount()
}

// función que reinicia
var resetCount = function(){
  count = 0
  printCount()
}

// función que imprime el resulado
var printCount = function(){
  var container = document.getElementById('count')
  // console.log(container) validamos que encontremos el elemento
  container.innerText = count
}
