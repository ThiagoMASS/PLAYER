
let musicas = [{titulo:'golden hour', artista:'jvke', src:'JVKE - golden hour (Legendado PT-BR) (128 kbps).mp3', img:'goldenhour.jpg'},
{titulo:'locked of haven', artista:'Bruno Mars', src:'Bruno Mars - Locked Out Of Heaven (Official Music Video) (128 kbps).mp3', img:'brunomars.jpg'},
{titulo:'yellow', artista:'cold-play', src:'Coldplay - Yellow (Official Video) (128 kbps).mp3', img:'coldplay.jpg'}]




let musica = document.querySelector('audio');
let tocarMusica = document.querySelector('.botao-play');
let indexMusica = 0;
let pausarMusica = document.querySelector('.botao-pause');
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

let duracaoMusica = document.querySelector('.fim')

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
redenrizarMusica(indexMusica);
//eventos

musica.addEventListener('timeupdate', atalizarBarra)

pausarMusica.addEventListener('click',pausar);

tocarMusica.addEventListener('click',tocar);

document.querySelector('.anterior').addEventListener('click',()=>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;

    }
    redenrizarMusica(indexMusica);
});
document.querySelector('.proxima').addEventListener('click',()=>{
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0;

    }
    redenrizarMusica(indexMusica);
})


//funções


function redenrizarMusica(index){
musica.setAttribute('src',musicas[index].src);
musica.addEventListener('loadeddata',()=>{
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
})

}


function tocar(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausar(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

}
function atalizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100)+ '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));

}
function segundosParaMinutos (segundos){
  let campoMinuto = Math.floor(segundos/60);
  let campoSegundos = segundos % 60;
  if(campoSegundos < 10){
    campoSegundos = '0'+ campoSegundos;

  }
  return campoMinuto +':'+ campoSegundos
}
