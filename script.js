var inputWebsiteTitle = document.querySelector('.title-input');
var inputWebsiteUrl = document.querySelector('.url-input');
var enterButton = document.querySelector('.submit-button');
var outputList = document.querySelector('#output-list');
var toggleRead = document.querySelector('.read-button');
var toggleDelete = document.querySelector('.delete');
var deleteAllRead = document.querySelector('.delete-all-read');
var bookmarkCount = 0;
var readBookmarks = 0;

enterButton.addEventListener('click', createCard);
inputWebsiteTitle.addEventListener('keyup', disableButton);
inputWebsiteUrl.addEventListener('keyup', disableButton);


function createCard() {
  event.preventDefault();
  if (inputWebsiteTitle.value == "" || inputWebsiteUrl.value == "") {
    alert('Please fill the required text fields to continue');
  } else {
    bookmarkCount ++
    readBookmarks ++
    outputList.innerHTML +=
    `<article class="card" id="${bookmarkCount}">
       <h1 class="title">${inputWebsiteTitle.value}</h1>
       <div class="mid">
         <a class="link" href="https://${inputWebsiteUrl.value}">${inputWebsiteUrl.value}</a>
       </div>
       <div class="read-delete">
         <span onClick="addReadClass(${bookmarkCount})" class="read-button">Read</span>
         <span onClick="deleteCard(${bookmarkCount})" class="delete">Delete</span>
       </div>
      </article>`;
      bookmarkCounter();
      unreadBookmarkCounter();
      emptyInputs();     
  }
}

function addReadClass(bookmarkNumber) {
  var articleCard = document.getElementById(`${bookmarkNumber}`);
  articleCard.classList.toggle('read');
  readBookmarks --
  unreadBookmarkCounter();
}

function unreadBookmarkCounter() {
  var unreadBookmarks = document.querySelector('.unread-bookmarks');
  unreadBookmarks.innerHTML = `Unread Bookmarks: <h3 class="bookmark-count-number">${readBookmarks} </h3>`
}

function deleteCard(bookmarkNumber) {
  var articleCard = document.getElementById(`${bookmarkNumber}`);
  articleCard.remove(`${bookmarkNumber}`);
  bookmarkCount --
  bookmarkCounter();
}

function bookmarkCounter() {
  var totalBookmarks = document.querySelector('.total-bookmarks');
  totalBookmarks.innerHTML = `Total Bookmarks: <h3 class="bookmark-count-number">${bookmarkCount} </h3>`
}

function emptyInputs() {
  document.querySelector('.page-form').reset()
}

function disableButton() {
  if (inputWebsiteTitle.value && inputWebsiteUrl.value) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}






















