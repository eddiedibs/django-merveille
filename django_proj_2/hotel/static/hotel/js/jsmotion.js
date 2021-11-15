
//Function that shows a slidable menu for mobile devices

const navMotion = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__list');
    const lists = document.querySelectorAll('.nav__list div');

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

navMotion();










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



//function that activates all of them in one main function

function mainApp(){

navMotion();
navChangeColor();

};


mainApp();


    















