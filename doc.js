function mudarmodo(){
    const html= document.documentElement


html.classList.toggle('light') 

const img= document.querySelector('#profile img')
if(html.classList.contains('light')){
    img.setAttribute('src','./imagens/Douglas-light.png')
}else{
    img.setAttribute('src','./imagens/Douglas-black.png')
}



}

/*o html.classList.toogle('light')
adiciona e tira automaticamente uma função.
*/


    /*if( html.classList.contains('light')){
        html.classList.remove('light')
    }else{
        html.classList.add('light')
      
    }*/