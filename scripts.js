const countDownDate = new Date("Jul 8, 2024 00:00:00").getTime();
        const clock = document.querySelector(".clock");

        // Update the count down every 1 second
        const interval = setInterval(function () {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with class="clock"
            clock.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(interval);
                clock.innerHTML = "EXPIRED";
            }
        }, 1000);