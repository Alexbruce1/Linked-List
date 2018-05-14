var inputWebsiteTitle = document.querySelector('.title-input');
var inputWebsiteUrl = document.querySelector('.url-input');
var enterButton = document.querySelector('.submit-button');
var outputList = document.querySelector('#output-list');
var toggleDelete = document.querySelector('.delete');

enterButton.addEventListener('click', createCard);
inputWebsiteTitle.addEventListener('keyup', disableButton);
inputWebsiteUrl.addEventListener('keyup', disableButton);



//ToggleRead function
// document.addEventListener('click', function () {
//   var toggleRead = document.querySelector('.read-delete'); 
//   var addRead = document.getElementsByClassName('read');
  
//   if (toggleRead.classList.contains = ('read')) {
//     this.classList.remove('read');
//   } else {
//     this.classList.add('read');
//   }
// })


function createCard() {
  event.preventDefault();
  if (inputWebsiteTitle.value == "" || inputWebsiteUrl.value == "") {
    alert('Please fill the required text fields to continue');
  } else {
    outputList.innerHTML +=
      `<article class="card">
       <h1 class="title">${inputWebsiteTitle.value}</h1>
       <div class="mid">
         <a class="link" href="https://${inputWebsiteUrl.value}">${inputWebsiteUrl.value}</a>
       </div>
       <div class="read-delete">
         <span class="read">Read</span>
         <span class="delete">Delete</span>
       </div>
      </article>`;
  }
}


function disableButton() {
  if (inputWebsiteTitle.value && inputWebsiteUrl.value) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}