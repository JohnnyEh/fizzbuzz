var fbtotal = 1
while (fbtotal <=100) {
  if (fbtotal%5 === 0 && fbtotal%3 === 0) {
    $("p").append(" fizzbuzz");
}
  else if (fbtotal%5 === 0) {
    $("p").append(" buzz");
}
  else if (fbtotal%3 === 0) {
    $("p").append(" fizz");
}
  else { 
    $("p").append(" " + fbtotal);
}
  fbtotal++;
}
