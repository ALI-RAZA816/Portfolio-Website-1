document.addEventListener('DOMContentLoaded',()=>{
    // menu bar
    const bars = document.querySelector('.fa-bars');
    const xmark = document.querySelector('.fa-xmark');
    const nav = document.querySelector('#nav');
    function BarOpen(){
        bars.style.display = 'none';
        xmark.style.display = 'block';
        nav.classList.add('active');
    }
    bars.addEventListener('click',BarOpen);

    function barsClose(){
        bars.style.display = 'block';
        xmark.style.display = 'none';
        nav.classList.remove('active');
    }
    xmark.addEventListener('click',barsClose);

    // sticky header
    const header = document.querySelector('.header');
    function stickyHeader (){
        let offset = pageYOffset; // pageYoffset = 500 you can use custom offset
        if(offset >= 500){
            header.classList.add('active');
        }
        else{
            header.classList.remove('active');
        }
    }
    window.addEventListener('scroll',stickyHeader);
    

    // const wrapper_container = document.querySelector('.wrapper-container');
    // window.addEventListener('scroll',()=>{
    //     wrapper_container.style.height = 100 - pageYOffset/10 + 'vh';
    //     // console.log(100 - pageYOffset/10 + 'vh');
    // })
});
    