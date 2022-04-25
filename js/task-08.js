const form = document.querySelector('.login-form')
form.addEventListener('submit', handleSubmit)

function showError(fieldName) {
    alert(`All fields required!\nPlease fill the ${fieldName}`)
}

function handleSubmit(event) {
    event.preventDefault()
    const {email, password} = form

    if(email.value === '') {
        showError('email')
        return
    }

    if(password.value === '') {
        showError('password')
        return
    }

    const credentials = {
        email: email.value,
        password: password.value
    }

    form.reset()
    console.log(credentials)
}
