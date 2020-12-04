var str1 = "You're catnip to a girl like me. Handsome, dazed, and to die for...";
var length = "Length: " + str1.length;
var charin = "Character number 2 is: " + str1.charAt(2);
var upper = "To uppercase " + str1.toUpperCase();
var cat = " - Catwoman";
var concat = "Concatenation in a phrase: " + str1 + cat;
var str2 = 'Batman: "I tried to save you."';
var batman = "[Batman Returns] " + str2;
var str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful."' .replace(/catwoman/ig, " ");
var str = "Just string: " + str1 + "\n" + length + "\n" + charin + "\n" + upper + "\n" + concat + "\n" + batman + "\n" + str3;

alert(str);
