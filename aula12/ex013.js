//CONDICIONAL SWITCH

var agora = new Date()

var diaDaSemana = agora.getDay()
/*
    O javascript considera os dias da semana assim: 
                    ↓↓↓

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

//console.log(diaDaSemana)
switch (diaDaSemana) {
    case 0:
        console.log('Hoje é: Domingo!')
        break;
    case 1:
        console.log('Hoje é: Segunda- Feira!')
        break;
    case 2:
        console.log('Hoje é: Terça- Feira!')
        break;
    case 3:
        console.log('Hoje é: Quarta- Feira!')
        break;
    case 4:
        console.log('Hoje é: Quinta- Feira!')
        break;
    case 5:
        console.log('Hoje é: Sexta- Feira!')
        break;
    case 6:
        console.log('Hoje é: Sábado!')
        break        

    default:
        console.log('[ERRO] Dia inválido!')
        break;
}