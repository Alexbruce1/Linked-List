var inputWebsiteTitle = document.querySelector('.title-input');
var inputWebsiteUrl = document.querySelector('.url-input');
var enterButton = document.querySelector('.submit-button');
var outputList = document.querySelector('#output-list');

enterButton.addEventListener('click', createCard);

function createCard() {
  event.preventDefault();
  if (inputWebsiteTitle.value == "" || inputWebsiteUrl.value == "") {
    alert('Please fill the required text fields to continue');
  } else {
    outputList.innerHTML +=
    `<article>
      <h1 class="title">${inputWebsiteTitle.value}</h1>
      <a class="url" href="https://${inputWebsiteUrl.value}">${inputWebsiteUrl.value}</a>
      <button class="read">Read</button>
      <button class="delete">Delete</button>
    </article>`;
  }
}
