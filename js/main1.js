var style=document.querySelector('div#style style.onest');
window.addEventListener('resize', resizewindow);

function resizewindow(){
    let panel=document.querySelector('div');
    panel.style.height=(window.innerHeight-40);
}
resizewindow();