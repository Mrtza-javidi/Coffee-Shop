$("#footer .social-media a").hover(function(){
    // Mouseenter (hovered)
    let $imgElement = $(this).find("img"); // Select the child img element
    let nodeClass = $imgElement.attr("class"); // Get the class name
    let newImageUrl = "../assets/practice5/" + nodeClass + "-colored-min.png";
    $imgElement.attr("src", newImageUrl); // Update the image source
},
function() {
    // Mouseleave (not hovered)
    let $imgElement = $(this).find("img"); // Select the child img element
    let nodeClass = $imgElement.attr("class"); // Get the class name
    let originalImageUrl = "../assets/practice5/" + nodeClass + "-min.png"; // Assuming this is the original image URL
    $imgElement.attr("src", originalImageUrl); // Revert to the original image source
}
);
