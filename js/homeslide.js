/*var slide=document.querySelector('div#slideshow');

consoleif.log(s_image);

var slidedata=[];

//<div class="swiper"></div>
slidedata.push([]);
slidedata[0][0]=document.createElement('div');
slidedata[0][0].classList.add('swiper');
slide.appendChild(slidedata[0][0]);
slidedata[0][1]=document.querySelector('div.swiper');

//<div class="swiper-wrapper></div>"
slidedata.push([]);
slidedata[1][0]=document.createElement('div');
slidedata[1][0].classList.add('swiper-wrapper');
slidedata[0][1].appendChild(slidedata[1][0]);
slidedata[1][1]=document.querySelector('div.swiper-wrapper');

//スライドの作成
slidedata.push([]);
s_image.forEach(function(value,index){
    slidedata[2].push([]);
    consoleif.log(value);
    consoleif.log(index);
    slidedata[2][index].push([]);
    slidedata[2][index][0][0]=document.createElement('div');
    slidedata[2][index][0][0].classList.add('swiper-slide');
    slidedata[2][index][0][0].classList.add(abc[index]);
    slidedata[1][1].appendChild(slidedata[2][index][0][0]);
    slidedata[2][index][0][1]=document.querySelector(`div.swiper-slide.${abc[index]}`);

    slidedata[2][index][1]=document.createElement('img');
    slidedata[2][index][1].src=`/image/${value}`;
    slidedata[2][index][0][1].appendChild(slidedata[2][index][1]);

});

slidedata.push([]);
slidedata[3]=document.createElement('div');
slidedata[3].classList.add('swiper-pagination');
slidedata[0][1].appendChild(slidedata[3]);

slidedata.push([]);
slidedata[4]=document.createElement('div');
slidedata[4].classList.add('swiper-button-prev');
slidedata[0][1].appendChild(slidedata[4]);

slidedata.push([]);
slidedata[5]=document.createElement('div');
slidedata[5].classList.add('swiper-button-next');
slidedata[0][1].appendChild(slidedata[5]);



const swiper = new Swiper(".swiper", {
    pagination:{
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 10000
    }
});*/