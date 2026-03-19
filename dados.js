function capturarDado() {
    let diaEscolhido = document.getElementById("diaEscolhido").value
    let materiaEscolhida = document.getElementById("materiaEscolhida").value



    if (diaEscolhido === "segunda" && materiaEscolhida === "portugues") {
        alert("matéria escolhida foi português")
        alert(`meu dia escolhido foi ${diaEscolhido} e a matéria é ${materiaEscolhida}`)
    }
    else if (diaEscolhido === "segunda" && materiaEscolhida === "matematica") {
        alert("matéria escolhida foi matemática")
        alert(`meu dia escolhido foi ${diaEscolhido} e a matéria é ${materiaEscolhida}`)
    }
    else if (diaEscolhido === "terça") {

        alert(`meu dia escolhido foi ${diaEscolhido} e a matéria é ${materiaEscolhida}`)
    }

    else if (diaEscolhido === "quarta") {

        alert(`meu dia escolhido foi ${diaEscolhido} e a matéria é ${materiaEscolhida}`)
    }

    else if (diaEscolhido === "quinta") {

        alert(`meu dia escolhido foi ${diaEscolhido} e a matéria é ${materiaEscolhida}`)
    }
    else {
        alert(`meu dia escolhido foi ${diaEscolhido} e a matéria é ${materiaEscolhida}`)
    }

}