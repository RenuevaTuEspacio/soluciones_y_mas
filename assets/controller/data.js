  
  async function sendMessageToTelegram(message) {
    const botToken = '7518463533:AAFmqAmL2vjhK7XpaTCXld_McSu6kKO_m0U'; 
    const chatId = '5415238794'; 
  
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }
  
    //   console.log('Mensaje enviado correctamente');
    } catch (error) {
    //   console.error('Error al enviar el mensaje:', error);
    }
  }