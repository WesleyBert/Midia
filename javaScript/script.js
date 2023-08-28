function tocSound(idElementSound){
   const elemento = document.querySelector(idElementSound)
    
    if(elemento && elemento.localName === 'Audio'){
        elemento.play();
    }else {
         console.log('Elemento ou seletor não encontrado!');

    }

const listaSounds = document.querySelectorAll('.tecla');

    for (let contador = 0 ; contador < listaSounds.length; contador++){
        const lista = listaSounds[contador];
        const instrumento = lista.classList[1];
        const idAudio = `#som_${instrumento}`
        
        lista.onclick = () => {
            tocSound(idAudio);

        };
        lista.onkeydown = (e) => {
            if(e.code === "Enter" || e.code === "Space"){
                lista.classList.add('ative');
            }
        lista.onkeyup = () =>{
            lista.classList.remove('ativa');
        }
        }

    }