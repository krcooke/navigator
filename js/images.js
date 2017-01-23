function displayAllImages() {
    var folder = "images/";

    // Reads the json 
    var myItems;
    $.getJSON('/ajax/v1-diagramdata.php', function(data) {
        myItems = data;

        $.each(data, function(key, val) {
            var img = new Image();
            img.src = val.venderlogoURL;
            img.title = val.vendordesc;
            img.style.margin = '5px 5px';
            img.style.width = '40px';
            console.log(val.venderlogoURL);
            var type = val.sgid;
            document.getElementById(type).appendChild(img);
        })

        console.log(myItems);
    });
};

$(function() {
    displayAllImages();   
});

