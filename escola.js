let materia = ""
let professor = ""
let diaEscolhido = ""

diaEscolhido = "segunda"
materia = "história"
if (diaEscolhido === "segunda" || materia === "matemática") {
    professora = "janete"
    materia = "português"

    console.log(`hoje é ${diaEscolhido} vou ter ${materia} com a professora ${professor}`)

}
else if (diaEscolhido === "terça") {
    professora = "ivaldete" 
    materia = "matemática"

    console.log(`hoje é ${diaEscolhido} vou ter ${materia} com a professora ${professor}`)
}
else if (diaEscolhido === "quarta") {
    professor = "lucas"
    materia = "educação fisíca"

    console.log(`hoje é ${diaEscolhido} vou ter ${materia} com a professor ${professor}`)
}
else if (diaEscolhido === "quinta") {
    professor = "jane"
    materia = "inglês"

    console.log(`hoje é ${diaEscolhido} vou ter ${materia} com a professora ${professor}`)
}
else {
    console.log("hoje é sexta-feira e não tem aula ")
}
