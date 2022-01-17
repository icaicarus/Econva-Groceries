let drop = document.getElementsByClassName("dropdown");
let i;

for (i = 0; i < drop.length; i++) {
  drop[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.maxHeight) {
      dropdownContent.style.maxHeight = null;
    } else {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    } 
  });
}