
//Function that shows a slidable menu for mobile devices

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





//Function that turns navBar visible when scrolled

function navChangeColor(){
    const navBar = document.querySelector('.nav');
    const img = document.querySelector('.slides');

    window.addEventListener('scroll', () => {
        let contentPosition = img.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        
        if (contentPosition < -41){
            navBar.classList.add('nav-background-active')

        }
        else {
            navBar.classList.remove('nav-background-active')


        }


    })

    
}

// Function that allows arrows in main page to slide among images
function arrowMotion(){
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');
    const slides = document.querySelector('.slides')
    const slidesImg = document.querySelectorAll('.slides__img')

    /*
        slidesImg[0] = 0
        slidesImg[1] = 100%
        slidesImg[2] = 200%
        

    */

    // For slide Arrows
    let currentSlide = [0, 100, 200, 300];

    slidesImg[0].classList.add('active');
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




//function that activates all of them in one main function

function mainApp(){

navMotion();
navChangeColor();
arrowMotion();

}
mainApp();


    















