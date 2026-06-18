let amigos=[]

function adicionarAmigos(){
    let input = document.getElementById("NomeAmigo");
    let nome = input.Value.trim();

    if(nome===""){
        alert("por favor,digite um nome");
        return;

    }

    amigos.push(nome);
    let lista=document.getElementById("lista de amigos");
    lista.innerHTML="";

    for(let i=0;i<amigos.length;i++){
        lista.innerHTML+= <li> ${amigos[i]}</li>
    }
 campo.Value="";

 function sortearamigo(){
     if(amigos.length=== 0){
        alert("nenhum amigo adicionado!");
         return;
     }
     let indice=Math.floor(Math.random()*amigos.length);
     let sorteado=amigos[indice];
     document.getElementById("resultado"),textConternt="Amigo Sorteado:"+sorteado;

 }
}