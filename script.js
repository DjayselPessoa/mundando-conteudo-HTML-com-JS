//criando nodeLists
var boxes = document.querySelectorAll('.box');
var numes = document.querySelectorAll('.num');

//iterando e vinculando
numes.forEach(num =>{
    num.style.display = 'inline-block';
    num.style.marginLeft = '50px';
    num.style.marginTop = '50px';
    num.style.transform = 'translate(-50%, -50%)';
    
});

boxes.forEach(box =>{
    
    box.style.backgroundColor = 'black';
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.margin = '50px';
    box.style.cursor = 'pointer';
    box.style.fontSize = '30px';
    
    //evento de clique à div box
    box.addEventListener('click', function(){
        //seletor do span que está dentro da div clicada
        var numN = box.querySelector('span');
        //transformando a string em número e guardando na variável
        var cont = parseInt(numN.innerHTML);
        //alterando valor
        numN.innerHTML = ++cont;        
        //alterando cor de fundo e do texto de acordo com a cor atual
        switch(box.style.backgroundColor){
            case 'red':
                box.style.backgroundColor = 'black';
                box.style.transition = '10s';
                box.style.color = 'red';
                break;
            case 'black':
                box.style.backgroundColor = 'red';
                box.style.transition = '10s';
                box.style.color = 'black';
                break;
        }        
    });
});


