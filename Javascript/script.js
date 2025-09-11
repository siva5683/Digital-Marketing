window.onload = function digital_fn(){
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");
    toggle.addEventListener('click',function(event){
       collapse.classList.toggle('active')
    });
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");
    let msnry = new Masonry(grid,{
        itemSelector:'.flex-item',
        gutter: 100,
        fitWidth:true
    });
}
var rellax = new Rellax('.rellax',{
    center:true
});