
let p=document.getElementById("pa");


document.getElementById("text").addEventListener("input",()=>{

let textBox=document.getElementById("text").value;
let quant=textBox.split("")
let c="[A-Z]"
let d="[0-9]"


for (let i = 0; i<9; i++) {
    if(quant[i].match(d)){
        p.innerHTML="certo"
        p.style.color="lime"
    }else{
        p.innerHTML="errado"
        p.style.color="red"
    }
}

if(quant[9].match(c)&&quant[10].match(c)){
    p.innerHTML="certo"
}
else{
    p.style.color="orange"
    p.innerHTML="errado usa maiusculas ou retira os números"
}


for (let i=11; i <14; i++) {
    if(quant[i].match(d)){
        p.innerHTML="certo"
        p.style.color="lime"
    } 
    else{
        p.innerHTML="errado"
        p.style.color="red"
    }
}

if(quant.length>14){
    p.innerHTML="Para de digitar são só 12 digitos";
    p.style.color="orange"
}
if(quant.length==13)cont=true;

})



document.getElementById("text").addEventListener("change",()=>{

let textBox=document.getElementById("text").value;
let quant=textBox.split("")
let c="[A-Z]"
let d="[0-9]"

let ve1=false;
let ve2=false;
let ve3=false;

    let conn=1

    for (let i = 0; i<9; i++) {
        if(quant[i].match(d)){
        conn+=1;
        }else{
        conn-=1;
        }
    }

    if(conn==10){
    v1=true;
    }else{v1=false}



    if(quant[9].match(c)&&quant[10].match(c)){
       v2=true
    }
    else{
      v2=false
    }



   let conn1=1
    for (let i=11; i <14; i++) {
        if(quant[i].match(d)){conn1+=1} 
        else{conn1-=1}
    }
      

    if(conn1==4){
        v3=true
    }else{v3=false}


    if(v1==true&&v2==true&&v3==true){
        alert("BI aceite")
    }else{
        alert("BI não aceite")
    }

if(textBox.length!==14)alert("BI invalido")

})