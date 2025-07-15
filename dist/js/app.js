document.addEventListener('DOMContentLoaded', function(){
    crearGaleria()
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')
    const numImagenes = 16
    for (let i= 1; i <= numImagenes; i++) {
        const imagen = document.createElement('IMG')
        imagen.src= `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'

        //Even handler
        imagen.onclick = function(){
            mostarimagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostarimagen(i){
    const imagen = document.createElement('IMG')
    imagen.src= `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galeria'


    //Genrar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    modal.appendChild(imagen)

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