/*
==================================================================================


                          Table of Contents


1. navMotion: Function that shows a slidable menu for mobile devices.

2. navMotion2: Function that shows a slidable menu for PC.

3. navChangeColor: Function that turns navBar visible when scrolled.

4. arrowMotion: Function that allows arrows in main page to slide among images.

5. mainApp: Function that activates all of them in one main function.


=================================================================================
*/


/*
===============================================================
                        1. navMotion 

    Function that shows a slidable menu for mobile devices


===============================================================
*/


const navMotion = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__list');
    const lists = document.querySelectorAll('.nav__list a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        lists.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            }
            else {
                link.style.animation = `navFadeLists 1.5s ease forwards ${index / 2.5}s`;
                console.log(index);
            }
            
        });

        burger.classList.toggle('toggle');

    });
    

    

};

/*
===============================================================
                        2. navMotion2

          Function that shows a slidable menu for PC


===============================================================
*/


const navMotion2 = () => {
    const nav2 = document.querySelector('.nav')
    const blueBtn = document.querySelector('.btn-list-1')
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__list2');
    const lists = document.querySelectorAll('.nav__list2 a');

    burger.addEventListener('click', () => {
        nav2.classList.toggle('nav-active2')
        nav.classList.toggle('nav-active');
        lists.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''

            }
            else {
                link.style.animation = `navFadeLists 1.5s ease forwards ${index / 2.5}s`;
                console.log(index);
            }
            
        });

        burger.classList.toggle('toggle');

        

        
    });
    

    

};




/*
===============================================================
                        3. navChangeColor 

    Function that turns navBar visible when scrolled (Mobile Devices)


===============================================================
*/


function navChangeColor(){
    const navBar = document.querySelector('.nav');
    const body = document.querySelector('body');

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
                        4. arrowMotion 

    Function that allows arrows in main page to slide among images


===============================================================
*/


function arrowMotion(){
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');
    const slides = document.querySelector('.slides')
    const slidesImg = document.querySelectorAll('.slides__img')

    /*
        slidesImg[0] = 0
        slidesImg[1] = 100%
        slidesImg[2] = 200%
        

        NOTE: slidesImg is not used in this version

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
===============================================================
                        5. mainApp 

    Function that activates all of them in one main function


===============================================================
*/
function mainApp(){

    /*Function that checks if the screen is bigger or smaller than 700px.
    And if it is bigger, it will activate the navMotion function for PC, and if it's not
    it will activate specific functions for Mobile Devices */

    function navSelector(x) {
        if (x.matches) { // If media query matches
            navMotion();
            navChangeColor();
        } 
        else {
            navMotion2();

        }
    }
  
    var x = window.matchMedia("(max-width: 700px)")
    navSelector(x) // Call listener function at run time
    x.addListener(navSelector) // Attach listener function on state changes 


    
    //Rest of functions
    arrowMotion();


}
mainApp();


    












