//  fonction qui faire ajouter plus  le nombre d'un produit 
function plus(event) {
    var x=event.target.parentNode.querySelector("h1").innerHTML
    
   
var y=Number(x)+1
console.log(y)
event.target.parentNode.querySelector("h1").innerHTML=y;
somme ()
};
//  fonction qui faire Réduisez le nombre d'un produit 
function moin(event) {
    var x=event.target.parentNode.querySelector("h1").innerHTML
   
    
y=Number(x)-1
event.target.parentNode.querySelector("h1").innerHTML=y;
somme ()

};

// fonction action coeur aimer le produit
function coeur(event) {

   var a=event.target.parentNode.querySelector("#love")
console.log(a.style.color)

        if (a.style.color=='red')
    { a.style.color='rgb(49, 49, 49)'; }
    else {a.style.color='red'; }
   
}
h3=document.querySelectorAll("h3")

h1=document.querySelectorAll("h1")

prix=document.querySelectorAll("#prix")




somme()

// fonction somme  totale prix produit dans pannier  
function somme () {

   
    var s=0;
console.log(s)

for (let i = 0; i < prix.length; i++) {
   var p=Number(prix[i].innerHTML);
   console.log(p)
   var r=Number(h1[i].innerHTML);
   console.log(r)
   var z=r*p
   console.log(z)
   var s=s+z
   console.log (s)
}

h3[0].innerHTML=s


}





// fonction effacer dans pannier
function del(event){
    var t=event.target.parentNode.parentNode.remove()
    console.log(t)
    
}
