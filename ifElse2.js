

function roteiroAteOTrabalho(hrDormir, hrDoAlarme, hrAcordar, hrSaidaDeCasa, hrDeChegadaTrabalho) {
    if (hrDormir === "23:30" && hrDoAlarme === "5:30") {
        console.log(`fui dormir as ${hrDormir} horas e o  despertador tocou as ${hrDoAlarme}`)
        console.log("-------------------------------------------------------------------------")
    }
    else {
        console.log("se dormir tarde vai perder o horário do despertador ")
    }
    if (hrAcordar === "5:30") {
        console.log(`acordei ás ${hrAcordar} horas`)
        console.log("--------------------------------------------")
    }
    if (hrSaidaDeCasa === "6:40") {
        console.log(`hoje sai de casa ás ${hrSaidaDeCasa} horas `)
        console.log("-----------------------------------------------")
        
    }
    hrDeChegadaTrabalho= "8:00"
        if (hrDeChegadaTrabalho === "8:00") {
            console.log(`chego no trabalho ás ${hrDeChegadaTrabalho} horas`)
            console.log("-----------------------------------------------")

        }

        else {
            console.log("cheguei atrasado no trabalho porque sai tarde de casa")
        }

    
}

roteiroAteOTrabalho("23:30", "5:30", "5:30","6:40","8:00")


