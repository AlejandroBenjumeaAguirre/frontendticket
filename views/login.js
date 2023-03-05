(() => {

    let token = "";
    let loginView = document.getElementById('login');
    token = localStorage.setItem('token', token);

    if(!token){
            
        loginView.innerHTML = `
                    <div class="col-md-6 mx-auto animate__animated animate__fadeIn">
                        <div class="card">
                            <h2 class="text-center" style="margin: 10px 10px 10px 10px;">Login</h2>
                            <div class="card-body">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="user" name="user" placeholder="Usuario">
                                    <label for="floatingInput">Usuario</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="password" name="password" placeholder="Password">
                                    <label for="floatingPassword">Contraseña</label>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-outline-primary" id="logueo" type="button">Ingresar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }else {

    }

})();

