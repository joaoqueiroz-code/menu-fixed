window.onload= () => {
    $("#menuIcon").toggleClass("fa-solid fa-bars");
}

$("#btnMenu").click(() => {
    $("#menuSlide").slideToggle().toggleClass("d-none");
    $("#menuIcon").toggleClass("fa-solid fa-minus");
    $("#menuIcon").toggleClass("fa-solid fa-bars");
})
$("#noticia-item-lista").click(() => {
    $(".sub-item").slideToggle().toggleClass("d-none");
    
})