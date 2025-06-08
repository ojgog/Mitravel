const header = document.querySelector("header");
const headerMedia = document.querySelector('.header-media');
const headerText = document.querySelector('.header-text');


window.addEventListener('scroll' ,() => {
    if(window.screenY === 0){
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }
})

if (window.scrollY === 0) {
    header.classList.add('visible');
  }

  const burgerButton = document.getElementById('burgerButton');
  const overlayMenu = document.getElementById('overlayMenu');

  burgerButton.addEventListener('click',()=> {
    burgerButton.classList.toggle('active');
    overlayMenu.classList.toggle('active');
     document.body.classList.toggle('no-scroll');

    if(overlayMenu.classList.contains('active')) {
        headerMedia.classList.add('flash');
        headerText.classList.add('flash');
        setTimeout(() => {
            headerMedia.classList.remove('flash');
            headerText.classList.remove('flash');
        }, 600)
    }
  })

  
