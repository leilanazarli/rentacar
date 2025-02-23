// const switchers = [...document.querySelectorAll('.switcher')]

// switchers.forEach(item => {
// 	item.addEventListener('click', function() {
// 		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
// 		this.parentElement.classList.add('is-active')
// 	})
// })

// let Base_url="http://localhost:8000"
// console.log(Base_url);

 let email=document.querySelector("#exampleInputEmail1")
 let password=document.querySelector("#exampleInputPassword1")
 let submit=document.querySelector(".form-submit")
 
 submit.addEventListener("submit" , async function (e) {
	e.preventDefault()
	axios.post('https://rentacar-api.onrender.com/host/login', {name:email, password})
.then(response=>{
    console.log(response);
})
 })