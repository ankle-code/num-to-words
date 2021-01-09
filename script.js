const singleName = ["Zero","Um","Dois","Três","Quatro","Cinco","Seis","Sete","Oito","Nove"];

const tenName = ["", "Dez", "Vinte", "Trinta", "Quarenta", "Cinquenta",
"Sessenta", "Setenta", "Oitenta", "Noventa"];

const tenFive = ["Onze","Doze","Treze","Quatorze","Quinze","Dezesseis","Dezessete","Dezoito","Dezenove"];

const hundredName = ["Cem","Cento","Duzentos","Trezentos","Quatrocentos","Quinhentos", 
"Seiscentos","Setecentos","Oitocentos","Novecentos"];

const numbersToWords = (numStr) => {

    numStr = numStr.toString();

    if(numStr.length <= 1){
        return singleName[numStr]
    };
    
    if(numStr.length <= 2){
        let ten = Number(numStr[0]);
        let single = Number(numStr[1]);

        if(single === 0){
            return tenName[ten];
        };

        if(ten === 1 && single <= 9 ){
            return tenFive[single - 1];
        };

        return tenName[ten] + " e " + singleName[single];
    };

    if(numStr.length <= 3){
        let hundred = Number(numStr[0])
        let ten = Number(numStr[1]);
        let single = Number(numStr[2]);

        if(ten === 0 && single === 0){
            return hundredName[hundred]
        }

        if(single === 0){
            return hundredName[hundred] + " e " + tenName[ten];
        };

        if(ten === 1 && single <= 9 ){
            return hundredName[hundred] + " e " + tenFive[single - 1];
        };

        if(ten >= 1){
            return hundredName[hundred] + " e " +  tenName[ten] + " e " + singleName[single];
        }

        return hundredName[hundred] + " e " + singleName[single];
    }

    if(numStr === "1000"){
        return "Mil";
    }
};

const body = document.body;
const numbersBox = document.createElement('div');

for(let i = 0; i <= 1000; i++){
    let boxLine = document.createElement('p');
    const numberWord = numbersToWords(i);
    boxLine.innerHTML = `<span class="Number">${i}</span>` +  " por escrito se torna: " + `<span class="Words">${numberWord}</span>`;
    numbersBox.appendChild(boxLine);
}

body.appendChild(numbersBox);