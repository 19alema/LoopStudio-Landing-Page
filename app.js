const navigation = document.querySelector(".navigation");




function openNav() {
 
    navigation.style.width = "100%";
}

function closeNav() {
    navigation.style.width = "0";
}

$("nav ul li a").click(function() {
     $(".navigation").hide();
});