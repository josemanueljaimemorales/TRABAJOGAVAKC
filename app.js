let dataApp=[];

fetch('data.json')
.then(res=>res.json())
.then(data=>{dataApp=data;});

function showGroups(){
 let groups=[...new Set(dataApp.map(a=>a.grupo))];
 let html="";
 groups.forEach(g=>{
   html+=`<button onclick="showGroup('${g}')">${g}</button>`;
 });
 document.getElementById("content").innerHTML=html;
}

function showGroup(g){
 let aparatos=["piso","arzon","anillos","salto","paralelas","fija"];
 let html="";
 aparatos.forEach(a=>{
   html+=`<button onclick="showGroupAparato('${g}','${a}')">${a}</button>`;
 });
 document.getElementById("content").innerHTML=html;
}

function showGroupAparato(g,a){
 let atletas=dataApp.filter(x=>x.grupo==g);
 let set=new Set();
 atletas.forEach(at=>{
   at.aparatos[a].forEach(e=>set.add(e.nombre));
 });
 let html="<div class='list'>";
 set.forEach(e=>{
   html+=`<div><input type='checkbox'> ${e}</div>`;
 });
 html+="</div>";
 document.getElementById("content").innerHTML=html;
}

function showAthletes(){
 let html="";
 dataApp.forEach((a,i)=>{
   html+=`<button onclick="showAthlete(${i})">${a.nombre}</button>`;
 });
 document.getElementById("content").innerHTML=html;
}

function showAthlete(i){
 let a=dataApp[i];
 let aparatos=["piso","arzon","anillos","salto","paralelas","fija"];
 let html="";
 aparatos.forEach(ap=>{
   html+=`<button onclick="showAthleteAparato(${i},'${ap}')">${ap}</button>`;
 });
 document.getElementById("content").innerHTML=html;
}

function showAthleteAparato(i,ap){
 let lista=dataApp[i].aparatos[ap];
 let html="<div class='list'>";
 lista.forEach(e=>{
   html+=`<div><input type='checkbox'> ${e.nombre}</div>`;
 });
 html+="</div>";
 document.getElementById("content").innerHTML=html;
}
