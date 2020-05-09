
(function (){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(i=0; i< names.length;i++){
  var firstLetter = names[i].charAt(0)
  if (firstLetter.toLowerCase() == "j") {
    byeSpeaker.name = names[i]
    byeSpeaker.speak()
  } else {
    helloSpeaker.name = names[i]
    helloSpeaker.speak()
  }
}
}
)()