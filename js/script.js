// get them values
var sections = document.getElementsByTagName("section");
var cycleButtons = document.getElementsByClassName("cycle");
var confirmButton = document.getElementById("confirm");
var output = document.getElementById("output");

// array to store the values in the beginning
var currentIndex = [0, 0, 0, 0, 0];


// highlight the first items
for (var i = 0; i < sections.length; i++) {
  var items = sections[i].getElementsByClassName("item");
  
  for (var j = 0; j < items.length; j++) {
    if (j === currentIndex[i]) {
      items[j].style.backgroundColor = "lightblue"; // for selected items
    } else {
      items[j].style.backgroundColor = "lightgray"; // for items not selected
    }
  }
}

// loop through each button n click 
for (var b = 0; b < cycleButtons.length; b++) {
    
    cycleButtons[b].addEventListener("click", function() { //couldnt think of a way to do this without functions()
    var index = parseInt(this.getAttribute("data-index"));
    var items = sections[index].getElementsByClassName("item");
    currentIndex[index] = (currentIndex[index] + 1) % items.length;
    
    // since I can't use functions yet I had to repeat the code block here again

    for (var i = 0; i < sections.length; i++) {
        var items = sections[i].getElementsByClassName("item");
  
        for (var j = 0; j < items.length; j++) {
            if (j === currentIndex[i]) {
            items[j].style.backgroundColor = "lightblue"; // for selected items
            } 
            else {
            items[j].style.backgroundColor = "lightgray"; // for items not selected
            }
        } 
    }


  });
}

// when the green button is clicked, make a sentence from the selected items
confirmButton.addEventListener("click", function() {
  var sentence = "";
  
  for (var i = 0; i < sections.length; i++) {
    var items = sections[i].getElementsByClassName("item");
    sentence += items[currentIndex[i]].textContent + " ";
  }
  output.textContent = sentence.trim();
});

