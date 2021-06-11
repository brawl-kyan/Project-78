var images = ["family.png","Dadu.PNG","Dadi.PNG","Papa.jpeg","mom.PNG","Me.jpeg"]
var names = ["My family book","Sanjev Arora","Neelam Arora","Kunal Arora","Aditi Arora","Kyan Arora"]
var i = 0;
function next(){
    i++;
var number_of_members = 5
if(i > number_of_members){
i = 0;    
}

var the_image = images[i];
var the_name = names[i];
document.getElementById("image").src = the_image;
document.getElementById("name").innerHTML = the_name;
}