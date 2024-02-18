document.getElementById('image').addEventListener('change', function(e) {
  var preview = document.getElementById('preview');
  preview.src = URL.createObjectURL(e.target.files[0]);
});
function updateAge() {
    const slider = document.getElementById('age-slider');
    const ageLabel = document.getElementById('age-value');
    ageLabel.textContent = "Age: " + slider.value;
  }
  
function toggleTagline(sport) {
  var tagline = document.getElementById('tagline');
  var taglineText = tagline.textContent;

  if (taglineText.includes(sport)) {
    tagline.textContent = taglineText.replace(sport + ", ", "");
  } else {
    tagline.textContent += sport + ", ";
  }
}
function selectImage() {
  document.getElementById('fileInput').click();
}

function onFileSelected(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      displayImage(imageUrl);
    };
    reader.readAsDataURL(file);
  }
}

function displayImage(imageUrl) {
  const imgElement = document.getElementById("displayImg");
  imgElement.src = imageUrl;
}
