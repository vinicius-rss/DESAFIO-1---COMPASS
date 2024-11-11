document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("subscribeForm");
    const emailInput = document.getElementById("emailInput");
    const messageDiv = document.getElementById("message");
  
    form.addEventListener("submit", function(event) {
 
      event.preventDefault();
  
      const emailValue = emailInput.value.trim();
  
      if (validateEmail(emailValue)) {
        
        messageDiv.style.display = "block";
        messageDiv.style.color = "green";
        messageDiv.textContent = "Obrigado pela inscrição!";
        emailInput.value = "";  
      } else {
        
        messageDiv.style.display = "block";
        messageDiv.style.color = "red";
        messageDiv.textContent = "Por favor, digite um endereço de email válido.";
      }
    });
  
     
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  });
  