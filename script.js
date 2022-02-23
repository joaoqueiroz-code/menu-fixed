window.onload= () => {
    $("#menuIcon").toggleClass("fa-solid fa-bars");
    $(".icon-dropdown").toggleClass("fa-solid fa-chevron-down");
}

$("#btnMenu").on("click", () => {
    $("#menuSlide").slideToggle().toggleClass("d-none");
    $("#menuIcon").toggleClass("fa-solid fa-minus");
    $("#menuIcon").toggleClass("fa-solid fa-bars");
})

const criaSubMenu = (idItemMenu, idItemSubmenu) => {
    
    $(idItemMenu).click(() => {
        $(idItemSubmenu).slideToggle().toggleClass("d-none");
        $(".icon-dropdown").toggleClass("fa-solid fa-chevron-down");
        $(".icon-dropdown").toggleClass("fa-solid fa-chevron-up");
    
        
    })
}

criaSubMenu("#noticia-item-lista", "#sub-item"); // noticia
