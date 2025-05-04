
function message () {
  alert("Збереженно")
}
function globalCheck() {
    const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const data = document.getElementById("data").value.trim();
       const phoneNumber = document.getElementById("phoneNumber").value;
       const email = document.getElementById("email").value.trim();
       const errorElement = document.getElementById("error");
       let error=""
       
  if(firstName===""||lastName===""||data===""||phoneNumber==="" || email===""){
    error = "Ви не заповнили табло повністю...🤷"
     }
     else if (firstName.length<3) {
     error =  "ім'я занадто мале...🤷"
     }
     else if (lastName.length<3) {
        error = "прізвище занадто мале...🤷"
     }
     else if (data.langht<10 || !data.includes("/") ) {
       error = "Дата народження не вірна стандартам ...🤷"
     }
     else if (phoneNumber.length<13 || phoneNumber.lenght>13 || isNaN(phoneNumber)){
       error = "номер телефону неправидьний ...🤷"
     }
     
     
     else if (!email.includes("@")) {
    error="E-mail немає: @ ...🤷";
    }
     if(error!==""){
    errorElement.textContent=error;
    
    return;
     }
     errorElement.textContent="";
  message();
 window.location="https://svitkavy.com/uk/"
};
