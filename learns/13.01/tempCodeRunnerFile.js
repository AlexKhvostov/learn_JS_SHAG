s = "   Hello     World,    oh oh   oh ! ! !   ! ";
while (s.indexOf("  ") != -1) {
  s.replaceAll("  ", " ");
}
