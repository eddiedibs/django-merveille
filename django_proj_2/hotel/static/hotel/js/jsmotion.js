/*
==================================================================================


                          Table of Contents



1. navMotion: Function that shows a slidable menu for PC.

2. navChangeColor: Function that turns navBar visible when scrolled (PC).

3. arrowMotion: Function that allows arrows in main page to slide among images (PC).

4. arrowMotion2: Function that allows arrows in about page to slide among images MADE WITH JQUERY

5. serviceActive: Function that allows service section to disappear typography and to show logo MADE WITH JQUERY

6. mainApp: Function that activates all of them in one main function.


=================================================================================
*/


/*
===============================================================
                        2. navMotion

          Function that shows a slidable menu for PC


===============================================================
*/


const navMotion = () => {
    const nav = document.querySelector('.nav');
    const nav2 = document.querySelector('.nav2');
    const blueBtn = document.querySelector('.btn-list-1')
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav__list2');
    const lists = document.querySelectorAll('.nav__list2 a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active2')
        navList.classList.toggle('nav-active');
        nav2.classList.toggle('nav2TotalWidth');
        lists.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''

            }
            else {
                link.style.animation = `navFadeLists 0.5s ease forwards ${index / 4.5}s`;
                console.log(index);
            }
            
        });

        burger.classList.toggle('toggle');

        

        
    });
    

    

};




/*
===============================================================
                        4. navChangeColor 

    Function that turns navBar visible when scrolled (PC)


===============================================================
*/


function navChangeColor(){
    const navBar = document.querySelector('.nav');
    const body = document.querySelector('body');
    const burger = document.querySelector('.burger');


    window.addEventListener('scroll', () => {
        let contentPosition = body.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
    
        if (contentPosition < -41){
            navBar.classList.add('nav-background-active')


        }
        else {
            navBar.classList.remove('nav-background-active')



        }


    })

    
}






/*
===============================================================
                        5. arrowMotion 

    Function that allows arrows in main page to slide among images


===============================================================
*/


function arrowMotion(){
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');
    const slides = document.querySelector('.slides')
    const slidesImg = document.querySelectorAll('.slides__img')

    /*
           [DEPRECATED]

        NOTE: slidesImg is not used in this version

        slidesImg[0] = 0
        slidesImg[1] = 100%
        slidesImg[2] = 200%
        


    */

    // For slide Arrows
    let currentSlide = [0, 100, 200, 300];

    rightArrow.addEventListener('click', ()=> {
        goToSlide(currentSlide[1]);
            rightArrow.addEventListener('click', ()=> {
                goToSlide(currentSlide[2]);
                rightArrow.addEventListener('click', ()=> {
                    goToSlide(currentSlide[2]);
                    
                })
            })
            leftArrow.addEventListener('click', () => {
                goToSlide(currentSlide[1]);
                leftArrow.addEventListener('click', () => {
                    goToSlide(currentSlide[0]);
                    rightArrow.addEventListener('click', ()=> {
                        goToSlide(currentSlide[1]);
                    })
                    
                })
            
            })
    })

    function goToSlide(slideNumber){
        slides.style.marginLeft = "-" + slideNumber + "%";
    }


  



}


/*
=====================================================================
                        6. arrowMotion2 

    Function that allows arrows in about page to slide among images
                        MADE WITH JQUERY


=====================================================================
*/
function arrowMotion2(){
    const firstImg = $('[firstImg]');
    const lastImg = $('[lastImg]')

    $('.right-arrow-beige').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length != 0){
            currentImg.removeClass('active').css('z-index', -1);
            nextImg.addClass('active').css('z-index', 1);
        }

        else{
            currentImg.removeClass('active').css('z-index', -1);
            firstImg.addClass('active').css('z-index', 1);
        }




    })

    $('.left-arrow-beige').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        console.log(prevImg.length)

        if(prevImg.length != 0){
            currentImg.removeClass('active').css('z-index', -1);
            prevImg.addClass('active').css('z-index', 1);
        }

        else{
            currentImg.removeClass('active').css('z-index', -1);
            lastImg.addClass('active').css('z-index', 1);
        }


    })  



}


/*
=====================================================================
                        7. serviceActive 

    Function that allows service section to disappear typography and
                    to show logo MADE WITH JQUERY


=====================================================================
*/

function serviceActive(){
    const serviceHeader = document.querySelectorAll('.services-header');
    const serviceLogo = document.querySelectorAll('.service-icon')
    const serviceParagraph = document.querySelectorAll('.services-image-container p');


    $(".services-image-container__div").eq(0).hover( () => {
        //activates header opacity to 0
        serviceHeader[0].classList.add('services-header--active');
        //activates logo opacity to 1
        serviceLogo[0].classList.add('service-icon--active');
        //activates text opacity to 0
        serviceParagraph[0].classList.add('service-paragraph--active');},
        () => {
        //deactivates text opacity to 1
        serviceHeader[0].classList.remove('services-header--active');
        //deactivates logo opacity to 0
        serviceLogo[0].classList.remove('service-icon--active');
        //deactivates text opacity to 1
        serviceParagraph[0].classList.remove('service-paragraph--active');}
    )
    $(".services-image-container__div").eq(1).hover( () => {
        serviceHeader[1].classList.add('services-header--active');
        serviceLogo[1].classList.add('service-icon--active');
        serviceParagraph[1].classList.add('service-paragraph--active');},
        () => {
        serviceHeader[1].classList.remove('services-header--active');
        serviceLogo[1].classList.remove('service-icon--active');
        serviceParagraph[1].classList.remove('service-paragraph--active');}
    )
    $(".services-image-container__div").eq(2).hover( () => {
        serviceHeader[2].classList.add('services-header--active');
        serviceLogo[2].classList.add('service-icon--active');
        serviceParagraph[2].classList.add('service-paragraph--active');},
        () => {
        serviceHeader[2].classList.remove('services-header--active');
        serviceLogo[2].classList.remove('service-icon--active');
        serviceParagraph[2].classList.remove('service-paragraph--active');}
    )










}













/*
===============================================================
                        8. mainApp 

    Function that activates all of them in one main function


===============================================================
*/
function mainApp(){
            

    
    //Rest of functions
    navMotion();
    navChangeColor();
    arrowMotion();
    arrowMotion2();
    serviceActive();


}
mainApp();


    












