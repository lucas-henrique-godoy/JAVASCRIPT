var agora = new Date() //Pega a hora atual do computador onde oscript esta sendo executado
var hora = agora.getHours() //Pega a hora atual do computador e coloca na variavel hora para ser utilizado no programa
console.log(`Agora são exatamente ${hora} horas.`)

if (hora <= 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

