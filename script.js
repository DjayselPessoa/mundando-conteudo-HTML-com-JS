//criando nodeLists
var boxes = document.querySelectorAll('.box');
var numes = document.querySelectorAll('.num');
var boxresto = document.querySelector('.boxRes');
var numresto = document.querySelector('.numRes');
var a = 0;
var b = 0;
var valorFinal = 0;

//updates - functions -



//iterando e vinculando


boxresto.style.width = '100px';
boxresto.style.height = '100px';
boxresto.style.margin = '50px';
boxresto.style.backgroundColor = 'purple';
boxresto.style.fontSize = '30px';
boxresto.style.margin = '50px';
numresto.style.display = 'inline-block';
numresto.style.marginLeft = '50px';
numresto.style.marginTop = '50px';
numresto.style.transform = 'translate(-50%, -50%)';

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
        switch(cont){
            case 10:
                alert('10 cliques!');
                break;
            case 15:
                alert('15 cliques!');
                break;
        }        
        //alterando cor de fundo e do texto de acordo com a cor atual
        switch(box.style.backgroundColor){
            case 'red':
                box.style.backgroundColor = 'black';
                box.style.transition = '0.5s';
                box.style.color = 'red';
                break;
            case 'black':
                box.style.backgroundColor = 'red';
                box.style.transition = '0.5s';
                box.style.color = 'black';
                break;
        }
        if(cont){
            var i = 0;
            while( i <= boxes.length){
                if(i == 0){
                    a = parseInt(boxes[i].innerText);
                }else if(i == 1){
                    b = parseInt(boxes[i].innerText);
                    valorFinal = a + b;
                    numresto.innerHTML = valorFinal;
                    function gift (valorFinal, boxresto){
                        let valorFinal2 = this.valorFinal;
                        let boxresto2 = this.boxresto;
                        switch(parseInt(valorFinal2)){
                            case 7:
                                boxresto2.style.backgroundColor = 'gold';
                                break;
                            case 9:
                                boxresto2.style.backgroundColor = 'blue';
                        }
                    };                 
                    gift(valorFinal, boxresto);
                }                
                i = i + 1;
            }
        };  
    });

});

