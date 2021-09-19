(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var name in names) {
    var c = names[name][0];
    if (c == 'j' || c == 'J') {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }
}
)();




