
var boxes = document.querySelectorAll('.box');
var numes = document.querySelectorAll('.num');

numes.forEach(num =>{
    num.style.display = 'inline-block';
    num.style.marginLeft = '50px';
    num.style.marginTop = '50px';
    num.style.transform = 'translate(-50%, -50%)';
})

var cont = 0;

boxes.forEach(box =>{
    
    box.style.backgroundColor = 'black';
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.margin = '50px';
    box.style.cursor = 'pointer';
    box.style.fontSize = '30px';
    
    
    box.addEventListener('click', function(){
        var numN = box.querySelector('span');
        var cont = parseInt(numN.innerHTML);
        cont = cont + 1;
        numN.innerHTML = cont;        

        switch(box.style.backgroundColor){
            case 'red':
                box.style.backgroundColor = 'black';
                box.style.transition = '10s';
                break;
            case 'black':
                box.style.backgroundColor = 'red';
                box.style.transition = '10s';
                break;
        }

        
        
    });
});


