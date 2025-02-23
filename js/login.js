document.addEventListener("DOMContentLoaded", function () {  // Səhifə tam yükləndikdən sonra icra olunur
    let form = document.querySelector("form"); // Form elementi düzgün seçilir
    let name = document.querySelector("#exampleInputEmail1");
    let password = document.querySelector("#exampleInputPassword1");

    if (!form) {  // Əgər form tapılmırsa, xəta verməməsi üçün yoxlama
        console.error("Form tapılmadı!");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Formun default göndərilməsini bloklayırıq

        console.log(name.value, password.value); // Input dəyərlərini konsola yazdırırıq

        axios.post('https://rentacar-api.onrender.com/host/login', {
            name: name.value,   // Input dəyərlərini göndəririk
            password: password.value
        })
        .then(response => {
            console.log(response);
            console.log(response.data);
        })
        .catch(error => console.error('Error:', error));
    });
});
