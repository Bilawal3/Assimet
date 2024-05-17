var preview = document.getElementById('previewImg');
var allboxes = document.getElementsByClassName('box');

for(var i = 0; i < allboxes.length; i++){
    allboxes[i].addEventListener('click', function() {
        preview.style.backgroundColor = this,
        style.backgroundColor
    })
    allboxes[i].addEventListener('mouseover', function() {
        this.style.border = '2px solid purple'
    })
    allboxes[i].addEventListener('mouseover', function() {
        this.style.border = '2px solid transparent'
    })
}

var selected = 0
preview.style.backgroundColor = allboxes[selected].style.backgroundColor = allboxes[selected].style.border = '2px solid purple';

var time = setInterval(() => {
    allboxes[selected++].style.border = '2px solid transparent'
    if(selected == 5) selected = 0
    preview.style.backgroundColor = allboxes[selected].style.backgroundColor
    allboxes[selected].style.border = '2px solid purple'
}, 1500);