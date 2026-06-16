document.addEventListener("DOMContentLoaded", function () {
    // هوک اتوماسیون برای فرم خبرنامه
    const newsletterForm = document.getElementById("society-newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const emailInput = document.getElementById("newsletter-email").value;
            
            // ارسال ایمیل به سرویس اتوماسیون (مثلا Mailchimp endpoint)
            fetch("https://api.yoursociety.org/v1/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailInput, group: "General Newsletter" })
            })
            .then(response => {
                if(response.ok) {
                    alert("Thank you! You have successfully subscribed to our automated updates.");
                    newsletterForm.reset();
                }
            })
            .catch(error => console.error("Automation Error:", error));
        });
    }
});

// ماژول لایت‌باکس برای گالری تصاویر اعضا و رویدادها
function openLightbox(imageSrc) {
    const lightboxModal = document.createElement("div");
    lightboxModal.style.position = "fixed";
    lightboxModal.style.top = "0";
    lightboxModal.style.left = "0";
    lightboxModal.style.width = "100%";
    lightboxModal.style.height = "100%";
    lightboxModal.style.backgroundColor = "rgba(10, 37, 64, 0.95)";
    lightboxModal.style.display = "flex";
    lightboxModal.style.justifyContent = "center";
    lightboxModal.style.alignItems = "center";
    lightboxModal.style.zIndex = "1000";
    lightboxModal.style.cursor = "zoom-out";
    
    const fullImage = document.createElement("img");
    fullImage.src = imageSrc;
    fullImage.style.maxWidth = "85%";
    fullImage.style.maxHeight = "85%";
    fullImage.style.borderRadius = "8px";
    fullImage.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.5)";
    
    lightboxModal.appendChild(fullImage);
    document.body.appendChild(lightboxModal);
    
    lightboxModal.onclick = function() {
        document.body.removeChild(lightboxModal);
    };
}
