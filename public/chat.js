const socket = io();


const urlSearch = new URLSearchParams(window.location.search)
//const username = urlSearch.get("username"); 
const username = urlSearch.get("nome"); 
const telefone_contato = Number(urlSearch.get("telefone")); 

const meuTelefone =Number(urlSearch.get("meutelefone")); ;
 
const lista = document.getElementById("lista"); 
var room;
 

if(telefone_contato > meuTelefone){
 room = telefone_contato.toString() + meuTelefone.toString()
 }else{
room = meuTelefone.toString()+ telefone_contato.toString();
 }

 

socket.emit("select_room",{
username,
room

})


document.getElementById("message_input").addEventListener("keypress", (event)=>{
    
if(event.key === 'Enter'){
const message = event.target.value;
console.log(message);
event.target.value =""


const data ={
    username,
    room,
    message

    

}


socket.emit("message", data)
}}
    )

    


socket.on("message", (data)=>{
   
const li = document.createElement("li");
 





for (let n = 0; n < data.length; n++) {
if (data[n].username != username ) {
    console.log("eu sou")
    li.classList.add("conversa2");
    

    li.innerHTML =`nome: 
    <b>${data[n].username} </b><br>
    mensagem: ${data[n].text} </p>` ;
    var divLista = document.querySelector('#lista');
   // divLista.scrollTop = 110;
   
   
}else{


    li.classList.add("conversa1");
    
    li.innerHTML =`nome: 
    <b>${data[n].username} </b><br>
    mensagem: ${data[n].text} </p>` ;
    var divLista = document.querySelector('#lista');
    divLista.scrollTop = 30;



}

    
}









lista.scrollTop = lista.scrollHeight;



lista.appendChild(li)


})