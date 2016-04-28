function iterate(array,behavior) {

  for(x = 0; x <= array.length - 1; x++){
    behavior(array[x])
  }
}
