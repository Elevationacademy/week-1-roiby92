
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]


const genes2 = [...genes]

const indexRlf = genes2.indexOf("RLF")
const indexCryz = genes2.indexOf("CRYZ")

genes2.splice(indexRlf,1,"CRYZ")
genes2.splice(indexCryz,1,"RLF")

const indexAzi = genes2.indexOf("AZIN2")
genes2.splice(indexAzi,1)
genes2.push("AZIN2","AZIN2")
genes2.unshift("FXT")

console.log(genes2)