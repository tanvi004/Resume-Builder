// alert("loading");

function addNewWEField(){
    //console.log("Adding new field");

 let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("weField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder", "Enter Here")

 let weOb=document.getElementById("we");
 let weAddButtonOb = document.getElementById("weAddButton");

 weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField()
{
    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("eqField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder", "Enter Here")

 let aqOb=document.getElementById("aq");
 let aqAddButtonOb = document.getElementById("aqAddButton");

 aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewKSField()
{
    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("ksField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder", "Enter Here")

 let ksOb=document.getElementById("ks");
 let ksAddButtonOb = document.getElementById("ksAddButton");

 ksOb.insertBefore(newNode,ksAddButtonOb);
}

//generating cv
function generateCV(){
  //  console.log("generating CV");

  let nameField=document.getElementById('nameField').value;

  let nameT1=document.getElementById('nameT1');

  nameT1.innerHTML=nameField;

  //direct
  document.getElementById("nameT2").innerHTML=nameField;

  //contact
  document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

  //address
  document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

  //emailID
  document.getElementById("emailT").innerHTML=document.getElementById("emField").value;

  //facebookID
  document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

  //instagramID
  document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

  //linkedInID
  document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;


  //objective
  document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

   //work experience
  let wes=document.getElementsByClassName("weField");

  let str="";

  for(let e of wes){
   str  = `${str}<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML=str;

    //academic qualifications  
    let aqs=document.getElementsByClassName('eqField')

    let str1="";

    for(let e of aqs){
        str1  = `${str1}<li> ${e.value} </li>`;
       }
     document.getElementById("aqT").innerHTML=str1;

   //key skills
   let kss=document.getElementsByClassName('ksField')

   let str2="";

   for(let e of kss){
       str2  = `${str2}<li> ${e.value} </li>`;
      }
    document.getElementById("ksT").innerHTML=str2;

    //code for setting photo
    let file=document.getElementById('imgField').files[0];

    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);


    //set the image to template

    reader.onloadend=function()
    {
        document.getElementById('imgTemplate').src=reader.result;
    }

    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}

//print cv
function printCV()
{
    window.print();
}