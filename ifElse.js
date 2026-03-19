let materias = ["português","matemática","artes","fisica","geografia"]
let diaEscolhido = ""
let materiaEscolhida = []
let diaSemana = ["feriado", "imenda", "morreu a diretora", "sem aula", ]

if (diaSemana[0] === "segunda") {
    diaEscolhido = diaSemana[0]
    materiaEscolhida = materias[0]
}

else if (diaSemana[1] === "terça") {
    diaEscolhido = diaSemana[1]
    materiaEscolhida =materias[1]
}

else if (diaSemana[2] === "quarta") {
    diaEscolhido = diaSemana[2]
    materiaEscolhida =materias[2]
}

else if (diaSemana[3] === "quinta") {
    diaEscolhido = diaSemana[3]
    materiaEscolhida =materias[3]
}
else {
    diaEscolhido="nada"
}
console.log("-----------------------------------------------------")


