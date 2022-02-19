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
                        1. navMotion

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
                        2. navChangeColor 

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
                        3. arrowMotion 

    Function that allows arrows in main page to slide among images


===============================================================
*/


function arrowMotion(){

   // Banner slide function
    window.onload = function () {
        const helpers = (function () {
          function getDOMElements(DOMSelectors) {
            let DOMElements = {};
            for (let selector in DOMSelectors) {
              if (DOMSelectors.hasOwnProperty(selector)) {
                DOMElements[selector] = document.querySelector(
                  DOMSelectors[selector]
                );
              }
            }
            return DOMElements;
          }
          return {
            getDOMElements
          };
        })();
      
        const modal = (function () {
          const state = {
            counter: 0,
            intervalID: 0
          };
          let CONSTANTS = {
            ACTIVE_CLASS_NAME: "active",
            TIMER: 5000,
            TRANSITION: "all .6s ease-out"
          };
          function addConstant(key, value) {
            CONSTANTS[key] = value;
          }
      
          return {
            state,
            CONSTANTS,
            addConstant
          };
        })();
      
        const view = (function (helpers) {
          const DOMSelectors = {
            carouselInnerSlider: ".slides",
            slide: "#slide",
            prevButton: ".left-arrow",
            nextButton: ".right-arrow",
            carouselImages: ".slides-img-container > img",
          };
          const DOMElements = helpers.getDOMElements(DOMSelectors);
          const CAROUSEL_IMAGES = [
            ...document.querySelectorAll(DOMSelectors.carouselImages)
          ];
          function moveSliderToIndex(IMAGE_SIZE, index) {
            DOMElements.carouselInnerSlider.style.transform = `translateX(-${
              IMAGE_SIZE * index
            }px)`;
          }
          function addClassToIndex(className, index) {
            CAROUSEL_IMAGES[index].classList.add(className);
          }
          function removeClassToIndex(className, index) {
            CAROUSEL_IMAGES[index].classList.remove(className);
          }
       
       
          function setTransition(element, transition) {
            element.style.transition = `${transition}`;
          }
          return {
            DOMSelectors,
            moveSliderToIndex,
            addClassToIndex,
            removeClassToIndex,
            setTransition
          };
        })(helpers);
      
        const controller = (function (modal, view, helpers) {
          const DOMSelectors = view.DOMSelectors;
          const DOMElements = helpers.getDOMElements(DOMSelectors);
          
          function initApp() {
            const imageSize = DOMElements.carouselInnerSlider.clientWidth;
            // DOMElements.carouselImages.style.margin = `${1.1 + 6}`;
            const imagesCount =
              [...document.querySelectorAll(DOMSelectors.carouselImages)].length - 1;
            modal.addConstant("IMAGE_SIZE", imageSize);
            modal.addConstant("TOTAL_IMAGES", imagesCount);
            view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
            handleAdding();
            DOMElements.nextButton.addEventListener("click", handleNextImage);
            DOMElements.prevButton.addEventListener("click", handlePrevImage);
          }
          function removeEventListeners() {
            DOMElements.nextButton.removeEventListener("click", handleNextImage);
            DOMElements.prevButton.removeEventListener("click", handlePrevImage);
          }
          function handleNextImage() {
            handleRemove();
            if (modal.state.counter === modal.CONSTANTS.TOTAL_IMAGES) {
              modal.state.counter = -1;
            }
            modal.state.counter += 1;
            handleAdding();
            view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
          }
          function handlePrevImage() {
            handleRemove();
            if (modal.state.counter === 0) {
              modal.state.counter = modal.CONSTANTS.TOTAL_IMAGES + 1;
            }
            modal.state.counter -= 1;
            handleAdding();
            view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
          }
         
          function handleSlide() {
            const isChecked = true;
            if (isChecked) {
              modal.state.intervalID = setInterval(() => {
                handleNextImage();
              }, modal.CONSTANTS.TIMER);
            } else {
              clearInterval(modal.state.intervalID);
              modal.state.intervalID = null;
            }

            
          }
          handleSlide();

          function handleRemove() {
            view.removeClassToIndex(
              modal.CONSTANTS.ACTIVE_CLASS_NAME,
              modal.state.counter
            );
          }
          function handleAdding() {
            view.addClassToIndex(
              modal.CONSTANTS.ACTIVE_CLASS_NAME,
              modal.state.counter
            );
          }
          DOMElements.carouselInnerSlider.addEventListener(
            "transitionstart",
            removeEventListeners
          );
          DOMElements.carouselInnerSlider.addEventListener("transitionend", initApp);
          view.setTransition(
            DOMElements.carouselInnerSlider,
            modal.CONSTANTS.TRANSITION
          );
          return {
            initApp,
            removeEventListeners
          };
        })(modal, view, helpers);
      
        controller.initApp();
      
        window.addEventListener("resize", () => {
          controller.removeEventListeners();
          controller.initApp();
        });
      };



}


/*
=====================================================================
                        4. arrowMotion2 

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
                        5. serviceActive 

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
                        6. mainApp 

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


    












