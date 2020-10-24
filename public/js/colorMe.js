
  function update(color){
    var R=color.channel('R')/255;
    var G=color.channel('G')/255;
    var B=color.channel('B')/255;
    var elDiv= document.getElementById("out");
    elDiv.innerHTML="R: "+R+"<br>G: "+G+"<br>B: "+B;
    document.body.style.backgroundColor=color;

  }
