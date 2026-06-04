const $sumbit = document.getElementById("sumbit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");

document.addEventListener("change", (e)=>{
    if (e.target === $visible)
        if ($visible.checked === false){
            $password.type = "password";
        }else $password.type = "text";
})

document.addEventListener("DOMContentLoaded", () => {
    const $form = document.getElementById("login"); 

    $form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputUser = document.getElementById("username").value;
        const inputPass = document.getElementById("password").value;

        const savedUser = localStorage.getItem("userSaved");
        const savedPass = localStorage.getItem("passSaved");

        if (inputUser === savedUser && inputPass === savedPass) {
            Swal.fire({
                title: "Binvenido/a de vuelta!",
                icon: "success",
                draggable: true
            }).then(() => {
            window.location.href = "../index.html";
        });    
            
        } else {
            Swal.fire({
                icon: "Error",
                title: "Vaya...",
                text: "Contraseña o usuarios incorrectos!"
            });
            document.getElementById("password").value = "";
            document.getElementById("password").focus();
        }
    });
});