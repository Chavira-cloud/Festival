document.addEventListener('DOMContentLoaded', function(){
    navegacionFija() 
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})

function navegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival') 
 
    document.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')
    const numImagenes = 16
    for (let i= 1; i <= numImagenes; i++) {
        const imagen = document.createElement('PICTURE')
        imagen.innerHTML = `
            <source srcset="dist/img/gallery/thumb/${i}.avif" type="image/avif">
            <source srcset="dist/img/gallery/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="dist/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
        `;

        //Even handler
        imagen.onclick = function(){
            mostarimagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostarimagen(i){
     const imagen = document.createElement('PICTURE')
        imagen.innerHTML = `
            <source srcset="dist/img/gallery/full/${i}.avif" type="image/avif">
            <source srcset="dist/img/gallery/full/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="dist/img/gallery/full/${i}.jpg" alt="imagen galeria">
        `;

    //Genrar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //botón cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    //agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden');
    body.appendChild(modal)
}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(()=>{
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden');
    },500);
}

function resaltarEnlace(){
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')
   
        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ){
                 actual = section.id
            }
        })

        navLinks.forEach( link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active')
            }
        })
    })
}

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach (link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior:'smooth'})
        })
    })
}