document.getElementById("openBtn").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

document.getElementById("goBackBtn").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});