function modifyInto() {
  document.getElementById("gamer").innerHTML = "wow, changed";

}
function valueCheck(){
  var value = document.getElementById("value").value;
  if(10 <= value && value <= 15){
    document.getElementById("confirmation").innerHTML = "input OK";
  }
  else{
    document.getElementById("confirmation").innerHTML = "input is out of range, not valid";
  }
}
