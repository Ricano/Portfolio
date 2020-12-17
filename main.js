


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var trigger = document.getElementById("trigger");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
trigger.onclick = function(){
  modal.style.display = "block";
  modalImg.src = myImg.src;
  captionText.innerHTML = myImg.alt;
  modalImg.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}







const buttons = document.getElementsByClassName("btn");

for (const button of buttons) {
  button.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}








function check(){
    
    const form          = getElementById("form");
    const email         = getElementById("email").value;
    const message       = getElementById("message");

    const emailPattern  = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    
    if(email.match(emailPattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
    }
}

const submitButton = getElementById("submit-button");

submitButton.onclick = check();