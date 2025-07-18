document.addEventListener('DOMContentLoaded',()=>{
    const loader = document.querySelector('.loader');
    const bodyEl = document.querySelector('body');
    // pre-loader
    window.onload = () =>{
        setTimeout(() => {
            loader.classList.add('active');
            bodyEl.classList.add('active');
        },500);
    }
    // managing dots event
    const hero_wrapper = document.querySelectorAll('.hero-wrapper .box');
    for( var i = 0; i < hero_wrapper.length; i++){
        let dots = document.createElement('div');
        const dots_btn = document.querySelector('.dots-btn');
        dots.className = 'dot';
        dots_btn.appendChild(dots);
    }
    const dot_btn = document.querySelectorAll('.dot');
    dot_btn.forEach((dot,index)=>{
        dot.addEventListener('click',()=>{
            dot_btn.forEach((item,index)=>{
                item.classList.remove('active');
                hero_wrapper[index].classList.remove('active');
            });
            dot.classList.add('active');
            hero_wrapper[index].classList.add('active');
        });
    });
    dot_btn[0].click();
    //autoslider
    let index = 0;
    function showSlides() {
        let i;
        const slides = document.querySelectorAll(".hero-wrapper .box");
        const dots= document.querySelectorAll('.dot');
        for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');  
        }
        index++;
        if (index > slides.length) {index = 1}    
        for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
        }
        slides[index-1].classList.add('active');  
        dots[index-1].classList.add('active');
        setTimeout(showSlides, 5000); // Change image every 2 seconds
    }
    showSlides();
    // menu bar
    const bars = document.querySelector('.fa-bars');
    const xmark = document.querySelector('.fa-xmark');
    const nav = document.querySelector('#nav');
    function BarOpen(){
        bars.style.display = 'none';
        xmark.style.display = 'block';
        nav.classList.add('active');
        bodyEl.style.overflow = 'hidden';
        bodyEl.classList.add('active');
    }
    bars.addEventListener('click',BarOpen);
    function barsClose(){
        bars.style.display = 'block';
        xmark.style.display = 'none';
        nav.classList.remove('active');
        bodyEl.style.overflowY = 'auto';
    }
    xmark.addEventListener('click',barsClose);
    const links = document.querySelectorAll('#links');
    links.forEach(e=>{
        e.addEventListener('click',barsClose);
    })
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

    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('#links');
    window.addEventListener('scroll',()=>{
        sections.forEach((section,index)=>{
            let top = window.scrollY;
            let offset = section.offsetTop - 1400;
            let height = section.offsetHeight;
            if(top >= offset && top <= offset + height){
                    navlinks.forEach(nav=>{
                        nav.classList.remove('active');
                    })
                    navlinks[index].classList.add('active');
            }
        })
    });

});