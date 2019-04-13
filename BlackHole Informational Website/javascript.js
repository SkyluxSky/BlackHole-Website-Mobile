window.onload = function() {
   var allImage = document.getElementsByTagName("img");
   for (i = 0; i < allImage.length;i++){

allImage[i].setAttribute("onclick","zoomIn(this)");
   }
    alert("Tap To Zoom in/Zoom Out");
}
function zoomIn(th){
  th.style.position="fixed";
  th.style.width="100vw";
  th.style.zIndex="9999";
  th.style.top="0";
  th.style.left="0";
  th.style.height="100vh";

th.setAttribute("onclick","zoomOut(this)");
}

function zoomOut(th){
  th.style.position="relative";
  th.style.width="80%";
  th.style.zIndex="3";
  th.style.top="auto";
  th.style.left="auto";
  th.style.height="auto";

th.setAttribute("onclick","zoomIn(this)");
}
