function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "elpapwil@hotmail.com" && password === "josewilder76311739") {
        // Redirigir a la página del dashboard
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').innerText = 'Usuario o contraseña incorrectos';
    }
    
}


function printPDF() {
    const pdfFrame = document.querySelector('iframe');
    
    if (pdfFrame) {
        const pdfUrl = pdfFrame.src;

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        
        window.open(pdfUrl);
        
        alert("El PDF se abrirá en una nueva pestaña para imprimir.");
    }
}

