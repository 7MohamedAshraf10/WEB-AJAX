function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {

 if (document.getElementById("but").innerHTML == "Learn more") {
    if (this.readyState == 4 && this.status == 200) {
     
    document.getElementById("target").innerHTML = this.responseText;
    document.getElementById("but").innerHTML = "Hide text";

    }
  }
  else
  {
    if (this.readyState == 4 && this.status == 200){
     document.getElementById("target").innerHTML = "";
     document.getElementById("but").innerHTML = "Learn more";
  }
}

  };
  xhttp.open("GET", "AJAX.txt", true);
  xhttp.send();
}

