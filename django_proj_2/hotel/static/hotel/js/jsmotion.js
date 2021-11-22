
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
    const img = document.querySelector('.div__img');

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


function arrowMotion(){
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');
    const pauseBtn = document.querySelector('.pause-btn');
    const slides = document.querySelector('.slides')
    const slidesImg = document.querySelectorAll('.slides img')

    var counter = 1;

    if (counter <= 1 ){
        rightArrow.addEventListener('click', () => {
            slides.classList.add('active-right-arrow');
        })
        counter++;

    }

    else if (counter == ){}

    
    leftArrow.addEventListener('click', () => {
        slides.classList.remove('active-right-arrow');
    })

}




//function that activates all of them in one main function

function mainApp(){

navMotion();
navChangeColor();
arrowMotion()
};


mainApp();


    















