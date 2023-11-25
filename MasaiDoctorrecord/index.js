//fill in javascript code here
let doc_arr=[];
document.querySelector("form").addEventListener("submit",data);

function data(){
    event.preventDefault();
    let doc_obj={
        doctor_Name:document.querySelector("#name").value,
        doctor_id:document.querySelector("#docID").value,
        department:document.querySelector("#dept").value,
        experience:document.querySelector("#exp").value,
        email:document.querySelector("#email").value,
        mobile:document.querySelector("#mbl").value,    
    };
    doc_arr.push(doc_obj);
    document.querySelector("tbody").innerHTML=null;
    display_table(doc_arr);
    //console.log(doc_obj);
}
function display_table(data){
data.forEach((doc_obj,i)=>{
let row=document.createElement("tr");
let td1=document.createElement("td");
td1.innerText=doc_obj.doctor_Name;
let td2=document.createElement("td");
td2.innerText=doc_obj.doctor_id;
let td3=document.createElement("td");
td3.innerText=doc_obj.department;
let td4=document.createElement("td");
td4.innerText=doc_obj.experience;
let td5=document.createElement("td");
td5.innerText=doc_obj.email;
let td6=document.createElement("td");
td6.innerText=doc_obj.email;
let td7=document.createElement("td");
td7.innerText=doc_obj.experience
if(doc_obj.experience>5){
    td7.innerText="Senior";
}else if(doc_obj.experience>=2&& doc_obj.experience<=5){
    td7.innerText="Junior";
}else if(doc_obj.experience<=1){
    td7.innerText="Trainee";
}
let td8=document.createElement("td");
td8.innerText="Delete";
td8.style.backgroundColor="red";
td8.onclick=function(){
    doc_arr.splice(i,  1);
    document.querySelector("tbody").innerHTML=null;
    display_table(doc_arr);
};

row.append(td1,td2,td3,td4,td5,td6,td7,td8);
document.querySelector("tbody").append(row);
});
}
console.log(doc_arr)