    document.addEventListener("DOMContentLoaded", function () {
        const bars = document.querySelectorAll(".fill");
        
        bars.forEach(bar => {
            let width = bar.style.width;
            bar.style.width = "0";
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    });


        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                loop:true,
                margin:30,
                nav:true,
                autoplay: true, // Avtomatik dəyişsin
                autoplayTimeout: 3000, // 2 saniyədən bir dəyişsin (2000ms = 2s)
                autoplayHoverPause: true, // İstifadəçi hover edəndə dayansın
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });
        });