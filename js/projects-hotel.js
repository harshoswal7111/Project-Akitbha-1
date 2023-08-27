
  const images = [
    "./images/Island Bistro/Banquet 1.jpg",
    "./images/Island Bistro/Banquet 2.jpg",
    "./images/Island Bistro/Bar Counter_FF_01.jpg",
    "./images/Island Bistro/Bar_FF_02.jpg",
    "./images/Island Bistro/Bar_FF_03.jpg",
    "./images/Island Bistro/Bar_FF_04.jpg",
    "./images/Island Bistro/Dance Floor 2.jpg",
    "./images/Island Bistro/Dance Floor.jpg",
    "./images/Island Bistro/FF_View2.jpg",
    "./images/Island Bistro/Reception.jpg",
    "./images/Island Bistro/Staff Room.jpg",
    "./images/Island Bistro/TF_Front.jpg",
    "./images/Island Bistro/TF_South Wing.png",
    "./images/Island Bistro/TF_VIP 1.jpg",
    "./images/Island Bistro/TF_West_View 1.jpg",
    "./images/Island Bistro/TF_West_View 2.jpg",
    "./images/Island Bistro/TF_West_View 3.jpg",
    "./images/Island Bistro/TF_West_View 4.jpg",
    "./images/Mr. Siddharth Hotel/Image1.png",
    "./images/Mr. Siddharth Hotel/Image2.png",
    "./images/Mr. Siddharth Hotel/Image2_000.png",
    "./images/Mr. Siddharth Hotel/Image3.png",
    "./images/Mr. Siddharth Hotel/Image3_000.png",
    "./images/Mr. Siddharth Hotel/Interior_Sidharth hotel_2021_Scene 15.jpg",
    "./images/Mr. Siddharth Hotel/Interior_Sidharth hotel_2021_Scene 3.jpg",
    "./images/Mr. Siddharth Hotel/Interior_Sidharth hotel_2021_Scene 4.jpg",
    "./images/Mr. Siddharth Hotel/NIGHT VIEW.png"

  ];
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
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      "Location : Beach Road <br> Scope of Work : Renovation and Interior.",
      
      "Location : Kotturu <br> Scope of Work : Renovation and Interior.",
      "Location : Kotturu <br> Scope of Work : Renovation and Interior.",
      "Location : Kotturu <br> Scope of Work : Renovation and Interior.",
      "Location : Kotturu <br> Scope of Work : Renovation and Interior.",
      "Location : Kotturu <br> Scope of Work : Renovation and Interior.",
      "Location : Kotturu <br> Scope of Work : Renovation and Interior.",
      "Location : Kotturu <br> Scope of Work : Renovation and Interior.",
      "Location : Kotturu <br> Scope of Work : Renovation and Interior.",
      "Location : Kotturu <br> Scope of Work : Renovation and Interior."

      // Add more texts for each image
    ];
    return texts[slideIndex];
  }