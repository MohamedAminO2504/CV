var themeExist = ["blue","dark","style2"];

function setTheme(theme){
  localStorage.setItem('theme', theme);
  document.getElementById("pageStyle").setAttribute('href', theme+'.css');
}

function changeCSS(){
  var theme =  localStorage.getItem('theme');
  if(themeExist.includes(theme)){
      document.getElementById("pageStyle").setAttribute('href', theme+'.css');
  }

}

  changeCSS();

window.addEventListener("load", function(event) {
    var exp = document.getElementById("maquette");
    var elmts = exp.getElementsByClassName("element");
    for (let index = 0; index < elmts.length; index++) {
        const element = elmts[index].getElementsByTagName('img')[0];
        element.setAttribute("onclick","diplayImg(this);");
    }
  });



  function diplayImg(elmt){
    var element  = elmt.getAttribute("src");
   var newimg =  element.replace('Mini', '');
    document.getElementById("displayImage").setAttribute("src",newimg);
    document.getElementById("displayImageDiv").style.display = "block";
    
  }

  function closeImg(){
    document.getElementById("displayImageDiv").style.display = "none";

  }

