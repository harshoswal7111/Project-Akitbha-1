const images = [
    "./images/venkataramana Hospitals/Image 01 copy.png",
    "./images/venkataramana Hospitals/Image 02.png",
    "./images/venkataramana Hospitals/Image 03_000 (2).png"
  ]; // Update with your image URLs
  let currentSlide = 0;

  function openSlider(slideIndex) {
    currentSlide = slideIndex;
    updateSliderContent();
    document.getElementById("sliderContainer").style.display = "block";
  }

  function closeSlider() {
    document.getElementById("sliderContainer").style.display = "none";
  }

  function updateSliderContent() {
    const sliderImage = document.getElementById("sliderImage");
    sliderImage.src = images[currentSlide];
    document.getElementById("sliderText").innerHTML = getSlideText(currentSlide);
  }

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
      currentSlide = images.length - 1;
    } else if (currentSlide >= images.length) {
      currentSlide = 0;
    }
    updateSliderContent();
  }

  // Function to return text for each slide
  function getSlideText(slideIndex) {
    const texts = [
      "Location : Diamond Park <br> Scope of Work : Renovation of Building Interior and Elevation.",
      "Location : Diamond Park <br> Scope of Work : Renovation of Building Interior and Elevation.",
      "Location : Diamond Park <br> Scope of Work : Renovation of Building Interior and Elevation."
      // Add more texts for each image
    ];
    return texts[slideIndex];
  }