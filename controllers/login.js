let user = document.getElementById('user');
let password = document.getElementById('password');

let url = 'http://localhost:8000/api/auth/login';

document.getElementById('logueo').addEventListener( "click", () => {

    let data = { nickname: user.value, password: password.value };
    
    const resp = logueo(url, data)
        .then(resp => {
            console.log(resp);
            if(resp.ok){
                localStorage.getItem('token', token);
                loginView.outerHTML = "";
                
            }else{
                Swal.fire(
                    'Error en el logueo',
                    resp.msg,
                    'error'
                )
            }
        });
    console.log(resp);
});

async function logueo( url = '', data = {}) {

    const response = await fetch( url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });

    return response.json();
}
