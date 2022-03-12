const endpoint=  "https://viajes02.herokuapp.com/usuarios"
const $form_login= document.getElementById('Login')
const $form_register= document.getElementById('Register')
const enviar = document.getElementById("submit1")
const en_login= document.getElementById("submit")
     
    enviar.addEventListener('click', async (e) => {
     e.preventDefault()
    
     const $name= document.getElementById("name").value;
     const $email=document.getElementById("email").value;
     const $Nick=document.getElementById("nick").value;
     const $birthday=document.getElementById("date").value;
    
    if( ($name.length >= 3 && $name.length <= 30)  && ($email.length >= 10 && $email.length <= 30) && ($Nick.length >= 4 && $Nick.length <= 10)){
        let resp = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({
            nombre: $name,
            correo: $email,
            apodo: $Nick,
            birthday: $birthday
           
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        let data = resp.json()
        console.log(data);
    
        $form_register.reset()
    
        alert('Te has Registrado con exito')
    }
        else{
            alert('Algunos campos están vacíos o la compra es inválida')
        }
    
    })

    en_login.addEventListener('click', async (e) => {
        e.preventDefault()

        const Nick1 = document.getElementById('Nick1').value;

        const valid = await validNick(Nick1)

        if(valid){
            window.location='usuario-logeado.html'
        }
        else{
            alert('Aun no eres un Fresh, Sorry for you!')
        }
    })

    const validNick = async(Nick1) => {
    
        const resp = await fetch(endpoint);
        const data = await resp.json();
        const result = data.find(dat => dat.apodo === Nick1)
        if(result === undefined){
            return false
        }
        else{
            return true
        }
    }