// script.js
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled'); // Add "scrolled" class
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Smooth scrolling (optional - same as before)
    $('a[href^="#"]').on('click', function (event) {
        // ... (same smooth scrolling code)
    });
});
   async function fetchDevToPosts() {
        const username = "habib_rehman_688361b96423"; // ✅ Use actual Dev.to username
        const apiUrl = `https://dev.to/api/articles?username=${username}&per_page=4`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const articles = await response.json();
            console.log("Fetched Articles:", articles); // ✅ Debug API response

            const blogContainer = document.getElementById("blog-posts");

            if (!articles.length) {
                blogContainer.innerHTML = "<p>No blog posts available.</p>";
                return;
            }

            blogContainer.innerHTML = articles.map((article, index) => `
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="${index * 100}ms">
                        <div class="blog-card" onclick="openModal('${article.title.replace(/'/g, "\\'")}', '${article.cover_image}', '${article.description.replace(/'/g, "\\'")}', '${article.url}')">
                            <img src="${article.cover_image || 'https://via.placeholder.com/400'}" class="blog-image" alt="${article.title}">
                            <h3 class="blog-title">${article.title}</h3>
                            <p class="blog-description">${article.description}</p>
                            <small>Published on: ${article.readable_publish_date}</small>
                        </div>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error("Error fetching blog posts:", error);
            document.getElementById("blog-posts").innerHTML = "<p>Failed to load blog posts.</p>";
        }
    }

    function openModal(title, image, content, url) {
        const modal = document.getElementById("blog-modal");

        document.getElementById("modal-title").textContent = title || "No Title Available";
        document.getElementById("modal-image").src = image || "https://via.placeholder.com/400";
        document.getElementById("modal-content").innerHTML = content || "No content available.";
        document.getElementById("modal-link").href = url;

        modal.style.display = "flex"; // Show modal properly in the center
    }

    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("blog-modal");
        const closeBtn = document.querySelector(".close");

        // Ensure modal is hidden on page load
        modal.style.display = "none";

        closeBtn.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };

        fetchDevToPosts();
    });


$(document).ready(function () {
    // ... other code ...

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
