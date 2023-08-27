
const images = [
    "./images/Killada House - Modular Kitchen/2.1.jpg",
    "./images/Killada House - Modular Kitchen/2.2.jpg",
    "./images/Mr. Amarnadh Residence/CBR.jpg",
    "./images/Mr. Amarnadh Residence/Crockery.jpg",
    "./images/Mr. Amarnadh Residence/GBR.jpg",
    "./images/Mr. Amarnadh Residence/GBR.jpg",
    "./images/Mr. Amarnadh Residence/Living.jpg",
    "./images/Mr. Amarnadh Residence/MBR.jpg",
    "./images/Mr. Amarnadh Residence/MBR_walk-in.jpg",
    "./images/Mr. Amarnadh Residence/Puja Unit.jpg",
    "./images/Mr. Amarnadh Residence/Utilty.jpg",
    "./images/Mr. Murthy - Modular Kitchen/Crockery.jpg",
    "./images/Mr. Murthy - Modular Kitchen/Kitchen 1.jpg",
    "./images/Mr. Pavan Residence/10.png",
    "./images/Mr. Pavan Residence/14.png",
    "./images/Mr. Pavan Residence/15.png",
    "./images/Mr. Pavan Residence/18.png",
    "./images/Mr. Pavan Residence/21.png",
    "./images/Mr. Pavan Residence/22.png",
    "./images/Mr. Pavan Residence/25.png",
    "./images/Mr. Pavan Residence/5.png",
    "./images/Mr. Pavan Residence/6.png",
    "./images/Mr. Pavan Residence/7.png",
    "./images/Mr. Pavan Residence/8.png",
    "./images/Mr. sridhar residence/OP_1.jpg",
    "./images/Mr. sridhar residence/OP_1_View.jpg",
    "./images/Mr. sridhar residence/OP_2_Elevation.jpg",
    "./images/Mr. sridhar residence/OP_2_View.jpg",
    "./images/Mr.srinivas house/IMG_1782.JPG",
    "./images/Mr.srinivas house/IMG_1783.JPG",
    "./images/Mr.srinivas house/IMG_1788.JPG",
    "./images/Mr.srinivas house/IMG_1795_.jpg",
    "./images/Mr.srinivas house/IMG_1800.JPG",
    "./images/Mr.srinivas house/IMG_1803.JPG",
    "./images/Mr.srinivas house/IMG_1811.JPG",
    "./images/Mr.srinivas house/IMG_1817.JPG",
    "./images/noori residence/20221029_174918.jpg",
    "./images/noori residence/20221029_175123.jpg",
    "./images/noori residence/20221029_175517.jpg",
    "./images/noori residence/20221029_175854.jpg",
    "./images/noori residence/20221029_180002.jpg",
    "./images/noori residence/20221029_180215.jpg",
    "./images/noori residence/20221029_180328.jpg",
    "./images/noori residence/Children Bedroom 2.jpg",
    "./images/noori residence/Drawing Area.jpg",
    "./images/noori residence/Final Kitchen_metallic silver.jpg",
    "./images/noori residence/Foyer.jpg",
    "./images/noori residence/Living Area.jpg",
    "./images/noori residence/Master Bedroom 2.jpg",
    "./images/noori residence/TV Unit.jpg",
    "./images/oroan house/View_Scene 10.jpg",
    "./images/oroan house/View_Scene 11.jpg",
    "./images/oroan house/View_Scene 12.jpg",
    "./images/oroan house/View_Scene 5.jpg",
    "./images/oroan house/View_Scene 6.jpg",
    "./images/oroan house/View_Scene 8.jpg",
    "./images/vaisakhi-west winds/CBR1.jpg",
    "./images/vaisakhi-west winds/CBR2.jpg",
    "./images/vaisakhi-west winds/Crockery.jpg",
    "./images/vaisakhi-west winds/Dining.jpg",
    "./images/vaisakhi-west winds/GBR.jpg",
    "./images/vaisakhi-west winds/Kitchen 1.jpg",
    "./images/vaisakhi-west winds/Kitchen 2.jpg",
    "./images/vaisakhi-west winds/Living.jpg",
    "./images/vaisakhi-west winds/Living2.jpg",
    "./images/vaisakhi-west winds/MBR1.jpg",
    "./images/vaisakhi-west winds/MBR2.jpg"

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
      "Location : Madhurawada <br> Scope of Work : Kitchen. <br> Budget : 3.5 Lakhs",
      "Location : Madhurawada <br> Scope of Work : Kitchen. <br> Budget : 3.5 Lakhs",
      "Location : Fortune Beach Front <br> Scope of Work : Full Modular Interiors. <br> Budget : 8 Lakhs",
      "Location : Fortune Beach Front <br> Scope of Work : Full Modular Interiors. <br> Budget : 8 Lakhs",
      "Location : Fortune Beach Front <br> Scope of Work : Full Modular Interiors. <br> Budget : 8 Lakhs",
      "Location : Fortune Beach Front <br> Scope of Work : Full Modular Interiors. <br> Budget : 8 Lakhs",
      "Location : Fortune Beach Front <br> Scope of Work : Full Modular Interiors. <br> Budget : 8 Lakhs",
      "Location : Fortune Beach Front <br> Scope of Work : Full Modular Interiors. <br> Budget : 8 Lakhs",
      "Location : Fortune Beach Front <br> Scope of Work : Full Modular Interiors. <br> Budget : 8 Lakhs",
      "Location : Fortune Beach Front <br> Scope of Work : Full Modular Interiors. <br> Budget : 8 Lakhs",
      "Location : Fortune Beach Front <br> Scope of Work : Full Modular Interiors. <br> Budget : 8 Lakhs",
      "Location : Fortune Beach Front , Maharanipeta <br> Scope of Work : Full Modular Interiors. <br> Budget : 9 Lakhs",
      "Location : Fortune Beach Front , Maharanipeta <br> Scope of Work : Full Modular Interiors. <br> Budget : 9 Lakhs",
      "Location : Fame Horizon Vizag , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Fame Horizon Vizag , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Fame Horizon Vizag , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Fame Horizon , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Fame Horizon , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Fame Horizon , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Fame Horizon , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Fame Horizon , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Fame Horizon , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Fame Horizon , Yendada <br> Scope of Work : Full Home Interiors. <br> Budget : 22 Lakhs",
      "Location : Jagtial <br> Scope of Work : Building Elevation.",
      "Location : Jagtial <br> Scope of Work : Building Elevation.",
      "Location : Jagtial <br> Scope of Work : Building Elevation.",
      "Location : Jagtial <br> Scope of Work : Building Elevation.",
      "Location : P.M Palem <br> Scope of Work : Full Home Interiors. <br> Budget : 7 Lakhs",
      "Location : P.M Palem <br> Scope of Work : Full Home Interiors. <br> Budget : 7 Lakhs",
      "Location : P.M Palem <br> Scope of Work : Full Home Interiors. <br> Budget : 7 Lakhs",
      "Location : P.M Palem <br> Scope of Work : Full Home Interiors. <br> Budget : 7 Lakhs",
      "Location : P.M Palem <br> Scope of Work : Full Home Interiors. <br> Budget : 7 Lakhs",
      "Location : P.M Palem <br> Scope of Work : Full Home Interiors. <br> Budget : 7 Lakhs",
      "Location : P.M Palem <br> Scope of Work : Full Home Interiors. <br> Budget : 7 Lakhs",
      "Location : P.M Palem <br> Scope of Work : Full Home Interiors. <br> Budget : 7 Lakhs",
      
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",
      "Location : Gadiraju Empire <br> Scope of Work : Full Home Interiors. <br> Budget : 17 Lakhs",


      "Location : Goa <br> Scope of Work : Building Elevation.",
      "Location : Goa <br> Scope of Work : Building Elevation.",
      "Location : Goa <br> Scope of Work : Building Elevation.",
      "Location : Goa <br> Scope of Work : Building Elevation.",
      "Location : Goa <br> Scope of Work : Building Elevation.",
      "Location : Goa <br> Scope of Work : Building Elevation.",
      

      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",
      "Location : Madhurawada <br> Scope of Work : Full Home Interiors.",

      // Add more texts for each image
    ];
    return texts[slideIndex];
  }