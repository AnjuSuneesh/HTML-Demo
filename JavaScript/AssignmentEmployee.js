class Employee{
   #name;#designation;#hours;
   #Employee_id;#joining_date;
   #salary;
constructor(name,designation,hours){
   this.#name=name;
   
  
   this.#hours = hours;
   this.#designation = designation;
  
}

get name() {​

return this.#name;​

}​

set name(name) {​
   this.#name=name;



}​   
get hours() {​

return this.#hours;​

}​

set hours(hours) {​
   this.#hours=hours;



}​   
get designation() {​

return this.#designation;​

}​

set designation(designation) {​
   this.#designation=designation;



}​   



}

 function getSalary(){
     const employee1=new Employee(document.getElementById("name").value,
     document.getElementById("hours").value,document.getElementById("designation").value);
if(designation=="Manager"){

   salary =hours*90;

}
else if(designation=="Consultant"){

   salary = hours*70;

}
else if(designation=="Trainee"){

   salary = hours*45;
}

alert(salary);


message = name + " who is a " + "'"+ designation +"'"+" will get "+" $ "+ salary;


 localStorage.setItem("TotalSalary",message);
return false;
 }