

function openBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Səhifənin sürüşməsini dayandırır
}

function closeBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.style.display = 'none';
    document.body.style.overflow = 'auto'; // Səhifənin sürüşməsini bərpa edir
}

// let carAboutpicture=document.querySelector(".carousel-container")
let carVideo=document.querySelector(".car-about-video")
let carousel_slides=document.querySelector(".carousel-slides")

let id = new URLSearchParams(window.location.search).get("id")

let Base_url="http://localhost:8000/cars"

async function getvideo() {
    let res=await axios(`${Base_url}/${id}`)
    let data=res.data
    carVideo.innerHTML=`
     <iframe width="560" height="315" class="car-video" src="https://www.youtube.com/embed/${data.video}" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
    `
    console.log(data.video);
    
}
getvideo()
let car_about_picture=document.querySelector(".car-about-picture")
async function getCard() {
    car_about_picture.innerHTML=""
    let res=await axios(`${Base_url}/${id}`)
    let data=res.data
    car_about_picture.innerHTML=`
        <h1 class="car-about-name">${data.marka} ${data.ad}</h1>
<div id="carouselExampleIndicators" data-mdb-carousel-init class="carousel slide carousel-fade col-8" data-mdb-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src="${data.image}" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="${data.img1}" class="d-block w-100"
        alt="..." />
    </div>
    <div class="carousel-item">
      <img src="${data.img2}" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button data-mdb-button-init class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators"
    data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button data-mdb-button-init class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators"
    data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <div class="carousel-indicators" style="margin-bottom: -20px;">
    <button  type="button" data-mdb-button-init data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1" style="width: 100px;">
      <img class="d-block w-100"
        src="${data.image}" class="img-fluid" />
    </button>
    <button  type="button" data-mdb-button-init data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="1"
      aria-label="Slide 2" style="width: 100px;">
      <img class="d-block w-100"
        src="${data.img1}" class="img-fluid" />
    </button>
    <button  type="button" data-mdb-button-init data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="2"
      aria-label="Slide 3" style="width: 100px;">
      <img class="d-block w-100"
        src="${data.img2}" class="img-fluid" />
    </button>
  </div>
</div>
                    <div class="supplier-booking-container col-4 ">
                    <div class="supplier-card ">
                        <div class="logo">
                            <img src="./assets/img/logo.jpeg" alt="EKAR Logo">
                            <p>Mamedov Rent A Car</p>
                        </div>
                        <h2 class="title">BİRBAŞA REZERVASYON EDİN</h2>
                        <div class="action-buttons">
                            <a href="tel:+994 055 296 54 50" class="call-button">📞</a>
                            <a href="" class="whatsapp-button">WhatsApp</a>
                        </div>
                        <div class="pricing">
                            <div class="price-item">
                                <span class="price">${data.qiymet} AZN</span>
                                <span class="duration">/ gün</span>
                            </div>
                            <div class="price-item">
                                <span class="price">${data.qiymetHefte} AZN</span>
                                <span class="duration">/ Həftə</span>
                            </div>
                            <div class="price-item">
                                <span class="price"> ${data.qiymetAy} AZN</span>
                                <span class="duration">/ Ay </span>
                            </div>
                        </div>
                    </div>
                    <div class="booking-section">
                    <div class="section-header">
                            <span></span>
                            <h3>BOOK ONLINE</h3>
                            <span></span>
                    </div>
                    <a href="#" class="reserve-button" onclick="openBookingForm()">RESERVE NOW</a>
                    </div>
                </div>
                </div>     
             
    `
    

}
getCard()
        
    let car_about_price=document.querySelector(".car-about-price")
    async function getPrice() {
        car_about_price.innerHTML=""
        let res=await axios(`${Base_url}/${id}`)
        let data=res.data
        car_about_price.innerHTML=`
        <h1>Qiymət</h1>
        <div class="row">
        <div class="col-5"><p>${data.qiymet} AZN <span>/günü</span></p></div> 
        <div class="col-2"><span class="line" style="color: white; font-size: 45px;">|</span></div>
        <div class="col-5"><p style="font-size: 30px;">Bir günlük kirayələmək mümkündür.</p></div>
        </div> 
        
        `
        
    }  
    getPrice()
    let carNameFull=document.querySelector(".carNameFull")
    async function getcarName() {
        carNameFull.innerHTML=""
        let res=await axios(`${Base_url}/${id}`)
        let data=res.data
        carNameFull.innerHTML=`
        ${data.marka} ${data.ad} ${data.il}
        
        `
        
    }  
    getcarName()
    
    let car_about_title=document.querySelector(".car-about-title")
    async function getdescription() {
        car_about_title.innerHTML=""
        let res=await axios(`${Base_url}/${id}`)
        let data=res.data
        car_about_title.innerHTML=`
         <h1 class="about">Haqqında</h1>
                    <p><span>Azərbaycanca</span><br>Gəncə şəhərində ${data.il}-cü il ${data.marka} ${data.ad} ilə rahat və sərfəli səyahətə çıxın. Bu avtomobil güclü mühərrik və geniş iç məkanı ilə uzun məsafələr üçün mükəmməl seçimdir. 7/24 xidmətimizlə Kia Optima 2014-ü asanlıqla icarəyə götürün və Gəncə şəhərində komfortlu bir sürüşün zövqünü çıxarın.</p>
                    <p><span>English</span><br>Take a comfortable and affordable trip with the  ${data.il} ${data.marka} ${data.ad} in Ganja city. This car, with its powerful engine and spacious interior, is the perfect choice for long-distance travels. Take advantage of our 24/7 service and easily rent the 2014 Kia Optima to enjoy a smooth and comfortable ride in Ganja.</p>
                    <p><span>Pусский</span><br>Отправьтесь в комфортное и выгодное путешествие на ${data.marka} ${data.ad}  ${data.il} года в городе Гянджа. Этот автомобиль с мощным двигателем и просторным салоном — идеальный выбор для дальних поездок. Воспользуйтесь нашей круглосуточной услугой и легко арендуйте Kia Optima 2014 года, чтобы насладиться комфортной поездкой по Гяндже.</p>
                    
        `
        
        }
        getdescription()
        
    function getRandomCards(cards, count) {
        if (!Array.isArray(cards) || cards.length === 0) {
            console.error("Kart siyahısı boşdur və ya səhv formatdadır!");
            return [];
        }
        return cards.sort(() => 0.5 - Math.random()).slice(0, count);
    }
    async function fetchCards() {
        try {
            let Base_url = "http://localhost:8000/cars";
            let response = await axios.get(Base_url); // JSON API-dən məlumat götür
            let cards = response.data; // `response.data.cards` yox, `response.data` olmalıdır!
    
            if (!Array.isArray(cards) || cards.length === 0) {
                throw new Error("Məlumat tapılmadı və ya səhv formatda!");
            }
    
            let randomCards = getRandomCards(cards, 4); // 4 təsadüfi kart seç
    
            let common_cards = document.querySelector(".common-cards");
            common_cards.innerHTML = ''; // Əvvəlki kartları təmizlə
    
            randomCards.forEach(element => {
                common_cards.innerHTML += `
                    <div class="card col-3" style="width: 305px;margin-right: 20px;">
                        <div class="card-img">
                            <a href=""><img src="${element.image}" class="car-img"></a>
                            <p class="cars-years">${element.il}</p>
                           
                        </div> 
                        <div class="card-body">
                            <div class="card-title">
                                <a href="" class="car-title-name">${element.marka} ${element.ad}</a>
                            </div>
                            <div class="card-cars-about row " style="flex-wrap: nowrap;">
                                <div class="col-3">
                                    <img src="./assets/img/seat.png" alt="" style="filter: grayscale(100%);"> 
                                    <span class="passenger">${element.oturacaq}</span>
                                </div>
                                <div class="col-3">
                                    <img src="./assets/img/car-door (1).png" alt="">
                                    <span class="car-door">${element.qabisayi}</span>
                                </div>
                                <div class="col-3">
                                    <img src="./assets/img/motor.png" alt="">
                                    <span class="gear-stick">${element.motor}</span>
                                </div>
                                <div class="col-3">
                                    <img src="./assets/img/transport.png" alt="">
                                    <span class="car-type">${element.sinif}</span>
                                </div>
                            </div>
                            <div class="card-cars-price">
                                <a class="btn btn-danger" href="./car-about.html?id=${element.id}" style="border-radius: 55px;">Rent Now</a>
                                <p><span class="car-price">${element.qiymet}</span> ₼ /günü</p>
                            </div>
                        </div>
                    </div>`;
            });
    
        } catch (error) {
            console.error("Kartları götürmək mümkün olmadı:", error);
        }
    }
    
    fetchCards();
    
    let carResult=document.querySelector(".booking-result")
    let bookNow=document.querySelector(".book-now")
    let name=document.querySelector("#name")
    let mobile=document.querySelector("#mobile")
    let email=document.querySelector("#email")
    let takeDate=document.querySelector("#takeDate")
    let pickuphour=document.querySelector("#pickuphour")
    let returnDate=document.querySelector("#returnDate")
    let returnhour=document.querySelector("#returnhour")
    let booking_details=document.querySelector("#booking-details")
    let booking_location=document.querySelector("#booking-location")
    let dropoff_location=document.querySelector("#dropoff-location")
    
    
    // let carsData = [];
    // axios.get('http://localhost:8000/cars')
    //     .then(response => {
    //         carsData = response.data;
    //         const carSelect = document.getElementById("carSelect");
    
    //         carsData.forEach(car => {
    //             const option = document.createElement("option");
    //             option.value = car.id;
    //             option.textContent = `${car.ad} - ${car.qiymet} AZN/day`;
    //             carSelect.appendChild(option);
    //         });
    //     })
    //     .catch(error => console.error("Error fetching car data:", error));
    
    // function calculatePrice() {
    //     const carId = parseInt(document.getElementById("carSelect").value);
    //     const takeDate = new Date(document.getElementById("takeDate").value);
    //     const returnDate = new Date(document.getElementById("returnDate").value);
    //     const dropoffLocation = document.getElementById("dropoffLocation").value;
    
    //     if (isNaN(takeDate) || isNaN(returnDate) || returnDate <= takeDate) {
    //         alert("Please enter valid pick-up and return dates.");
    //         return;
    //     }
    
    //     // Seçilmiş maşını tapmaq
    //     const selectedCar = carsData.find(car => car.id === carId);
    //     if (!selectedCar) {
    //         alert("Please select a car.");
    //         return;
    //     }
    
    //     const days = Math.ceil((returnDate - takeDate) / (1000 * 60 * 60 * 24)); // Gün sayını hesablayırıq
    //     let totalPrice = 0;
    
    //     if (days >= 30) {
    //         totalPrice = selectedCar.qiymetAy; // 1 ay və daha çox olduqda
    //     } else if (days >= 7) {
    //         totalPrice = selectedCar.qiymetHefte; // 1 həftə və daha çox olduqda
    //     } else {
    //         totalPrice = days * selectedCar.qiymet; // Günlük hesablama
    //     }
    
    //     if (dropoffLocation === "airport") {
    //         totalPrice += 10; // Aeroport üçün əlavə +10 AZN
    //     }
    
    //     document.querySelector(".booking-result").innerText = `Total Price: ${totalPrice} AZN`;
    // }