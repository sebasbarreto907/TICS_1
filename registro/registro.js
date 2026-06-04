const $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible"),
    $repetir_contraseña = document.getElementById("repetir_contraseña"),
    $form = document.getElementById("Resgistro");

document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        if ($visible.checked === false) {
            $password.type = "password";
            $repetir_contraseña.type = "password";
        } else {
            $password.type = "text";
            $repetir_contraseña.type = "text";
        }
    }
});


$form.addEventListener("submit", (e) => {
    e.preventDefault();

    const primer_intento = $password.value;
    const segundo_intento = $repetir_contraseña.value;
    const usuario_registrado = $username.value;

    if (primer_intento === segundo_intento) {
        localStorage.setItem("userSaved", usuario_registrado);
        localStorage.setItem("passSaved", primer_intento);
        Swal.fire({
            title: "Resgistro con exito!",
            icon: "success",
            draggable: true
        }).then(() => {
            window.location.href = "/login/login.html";
        });    
    }else {
        Swal.fire({
            icon: "Error",
            title: "Vaya...",
            text: "Las contraseñas no coinciden!"
        });
        $repetir_contraseña.value = "";
        $repetir_contraseña.focus();
    }
});