function displayAllImages() {
    var folder = "images/";

$.ajax({
    url : folder,
    cache: false,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            console.log(val)
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                console.log(val)
                var img = new Image();
                img.src = val;
                img.style.width = '80px';
                
                document.getElementById('images').appendChild(img);
            } 
        });
    }
});
};

$(function() {
    displayAllImages();   
});
