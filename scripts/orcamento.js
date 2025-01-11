// Formatação do WhatsApp
document.getElementById('whatsapp').addEventListener('input', function (event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito
  
    if (value.length > 0) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}${value.length > 7 ? '-' : ''}${value.slice(7, 11)}`;
    }
  
    input.value = value; // Atualiza o campo com o valor formatado
  });
  
  // Pré-visualização da imagem
  document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('preview').src = e.target.result; // Mostra a pré-visualização
      };
      reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
  });
  
  // Upload do formulário
  document.getElementById('uploadButton').addEventListener('click', async () => {
    const name = document.getElementById('name').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
  
    const whatsappPattern = /^\(\d{2}\) \d{5}-\d{4}$/; // Formato (DDD) 99999-9999
  
    if (!name || !whatsapp || !file) {
      const statusElement = document.getElementById('status');
      statusElement.textContent = 'Por favor, preencha todos os campos.';
      statusElement.style.color = 'red'; // Alerta em vermelho
      return;
    }
  
    if (!whatsappPattern.test(whatsapp)) {
      const statusElement = document.getElementById('status');
      statusElement.textContent = 'O WhatsApp deve estar no formato (DDD) 99999-9999.';
      statusElement.style.color = 'red'; // Alerta em vermelho
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'vizz_preset');
    formData.append('context', `name=${name}|whatsapp=${whatsapp}`);
  
    const response = await fetch('https://api.cloudinary.com/v1_1/dlqjfujss/image/upload', {
      method: 'POST',
      body: formData,
    });
  
    const data = await response.json();
    const statusElement = document.getElementById('status');
    if (data.secure_url) {
      statusElement.textContent = 'Upload realizado com sucesso!';
      statusElement.style.color = '#59eb1b'; // Verde personalizado
      console.log('URL da imagem:', data.secure_url);
    } else {
      statusElement.textContent = 'Erro no upload.';
      statusElement.style.color = 'red'; // Alerta em vermelho
    }
  });
  