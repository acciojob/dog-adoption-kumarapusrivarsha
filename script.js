//your code here

console.log("Dog Adoption Page Loaded Successfully");


// Image click message

const images = document.querySelectorAll("img");


images.forEach(function(image){

    image.addEventListener("click", function(){

        console.log("Opening information about " + image.alt);

    });

});