

function sayIt(query, language) {
  var q = new SpeechSynthesisUtterance(query);
  q.lang = language;
  q.rate = 1.2;
  speechSynthesis.speak(q);
}

function attach(elementId, event, functionName) {
  var element = document.getElementById(elementId);
  if (element.addEventListener) {
    element.addEventListener(event, functionName, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + event, functionName);
  } else {
    element['on' + event] = functionName;
  }
}

function interpret() {
  sayIt(document.getElementById('typer').value, 'en-US');
}

sayIt('Hello! I can say anything you want. Type in the textbox and click the button to try. This is coded by Alexander Lin', 'en-US');
attach('activate', 'click', interpret);
       