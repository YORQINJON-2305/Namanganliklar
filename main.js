var elOpenBtn = document.querySelector(".js-open-btn");
var elModal = document.querySelector(".modal");
var elCloseModal = document.querySelector(".js-close-modal");

elOpenBtn.addEventListener("click", function(){
    elModal.classList.add("open-modal")
})

elCloseModal.addEventListener("click", function(){
    elModal.classList.remove("open-modal")
})
