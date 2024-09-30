function mudarCor(cor){
    let body = document.body;

    switch(cor){
        case 'vermelho': body.style.backgroundColor = 'red'; break;
        case 'azul': body.style.backgroundColor = 'lightBlue'; break;
        case 'verde': body.style.backgroundColor = 'lightGreen'; break;
        case 'amarelo': body.style.backgroundColor = 'yellow'; break;
        case 'roxo': body.style.backgroundColor = 'purple'; break;
        case 'laranja': body.style.backgroundColor = 'orange'; break;
        case 'rosa': body.style.backgroundColor = 'lightPink'; break;
        default: body.style.backgroundColor = 'black';

    }
}