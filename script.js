function subirTela(){
    window.scrollTo({
        top:0,
        left: 0,
        behavior:'smooth'
    });
}

function sumirBotao(){
    if(window.scrollY === 0){   
        document.querySelector("#voltarAoTopo").style.display="none";


    }else{
    document.querySelector("#voltarAoTopo").style.display="block"; 
    }
}
window.addEventListener('scroll', sumirBotao);
//sumirBotao()