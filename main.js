function addRedBorder(id)
{
    element = document.querySelector("#" + id)
    element.style.border = "5px solid red";
}

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}