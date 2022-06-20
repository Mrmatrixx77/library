// book object constructor
function Books(nameOfBook, authorOfBook, pagesOfBook, readStatusOfBook) {
  this.nameOfBook = nameOfBook;
  this.authorOfBook = authorOfBook;
  this.pagesOfBook = pagesOfBook;
  this.readStatusOfBook = readStatusOfBook;
}

// selecting form elements
const bookName = document.querySelector(".book-name");
const authorName = document.querySelector(".book-author");
const pages = document.querySelector(".book-pages");
const readStatus = document.querySelector(".read-checkbox");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".collection-container");
// submit btn
submitBtn.addEventListener("click", addBooks);

// function to add book
function addBooks(e) {
  e.preventDefault();
  let nameOfBook = bookName.value;
  let authorOfBook = authorName.value;
  let pagesOfBook = pages.value;
  let readStatusOfBook = readStatus.checked;
  
  const bookElement = document.createElement("article");
  bookElement.classList.add("book-card");
  bookElement.innerHTML = `  
      <div class="book-elements">
      <div class="displayed-name">${nameOfBook}</div>
      <div class="displayed-author">${authorOfBook}</div>
      <div class="displayed-pages">${pagesOfBook}</div>
      <button class="read-btn">${readStatusOfBook}</button>
      <button class="remove-btn">remove</button>
      </div>`;
  const readbtn = bookElement.querySelector(".read-btn");
  if (readStatus.checked == true) {
    readbtn.innerHTML = 'Read'
  } else if(readStatus.checked == false) {
    readbtn.innerHTML = 'NotRead'
  }
  // change button start
  function changeText(el, dText, nText) {
    var content = '',
        context = '';
    
    /**
     * Set the text of a button
     *     - dependant upon current text
     **/
    function setText() {
      return (content === dText) ? nText : dText;
    }
    
    /* Check to see if the browser accepts textContent */
    if ('textContent' in document.body) {
      context = 'textContent';
      /* Get the current button text */
      content = el[context];
    /* Browser does NOT use textContent */
    } else {
      /* Get the button text with fallback option */
      content = el.firstChild.nodeValue;
    }
    
    /* Set button text */
    if (context === 'textContent') {
      el.textContent = setText();
    } else {
      el.firstChild.nodeValue = setText();
    }
  }
  
  var defaultText,
      substituteText,
      btn;
  
  /* Default text of the button */
  defaultText = 'Read';
  /* Alternate text for button */
  substituteText = 'NotRead';
  /* Grab our button */
  btn = document.querySelector('.btn');
  
  /* Add a listener to the button instance so we can manipulate it */
  readbtn.addEventListener('click', function() {
    changeText(this, defaultText, substituteText);
  }, false);
  // button change close

  // remove button
  const removebtn = bookElement.querySelector(".remove-btn");
  removebtn.addEventListener('click' , deleteItem);

  function deleteItem(e){
    const deleteElement = e.currentTarget.parentElement.parentElement;
    container.removeChild(deleteElement);
  } 

  container.appendChild(bookElement);
  closeModal();
  setBackToDefault();

  return new Books(nameOfBook, authorOfBook, pagesOfBook, readStatusOfBook);
}
// modal
const modalBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const formModal = document.querySelector(".modal-container");
modalBtn.addEventListener("click", function () {
  formModal.classList.add("open-modal");
  modal.classList.add("open-modal");
  closeBtn.addEventListener("click", closeModal);
});
// modal.onclick = closeModal
function closeModal() {
  formModal.classList.remove("open-modal");
  modal.classList.remove("open-modal");
  setBackToDefault()
}
const inputAuthor = document.querySelector(".book-author")
const inputPages = document.querySelector(".book-pages")
const inputCheckBox = document.querySelector(".read-checkbox")
const inputName = document.querySelector(".book-name")
function setBackToDefault(){
  inputName.value = "";
  inputPages.value = "";
  inputAuthor.value = "";
  inputCheckBox.checked = "";


}
