let library = [
    {
      title: "Client-Side JavaScript",
      author: "Goutham Aduri",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "Intro to Entrepreneurship",
      author: "Dr. Ibrahim Abdalla",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "Cloud Computing Services",
      author: "Dr. Gurleen Kaur",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  // Destructure the titles for 3 books 
  let { title: firstBook } = library[0];
  let { title: secondBook } = library[1];
  let { title: thirdBook } = library[2];
  
  console.log(`First book: ${firstBook}`);
  console.log(`Second book: ${secondBook}`);
  console.log(`Third book: ${thirdBook}`);
  
  // Function to display library items on the page
  function displayLibrary() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = ''; // Clear existing content
  
    library.forEach((book, index) => {
      let bookInfo = `<p><strong>${book.title}</strong> by ${book.author} - Read: ${book.status.read}</p>`;
      libraryContainer.innerHTML += bookInfo;
    });
  }
  
  // Function to update the book titles from user input
  function updateBookTitles() {
    const newFirstBookTitle = document.getElementById('firstBookInput').value;
    const newSecondBookTitle = document.getElementById('secondBookInput').value;
    const newThirdBookTitle = document.getElementById('thirdBookInput').value;
  
    if (newFirstBookTitle) {
      library[0].title = newFirstBookTitle;
    }
  
    if (newSecondBookTitle) {
      library[1].title = newSecondBookTitle;
    }
  
    if (newThirdBookTitle) {
      library[2].title = newThirdBookTitle;
    }
  
    displayLibrary(); // Update the display with the new titles
  }
  
  // Function to update the read status of all books
  function finishReading() {
    library.forEach(book => {
      book.status.read = true;
    });
    displayLibrary(); // Update the display after changing the status
  }
  
  // Initial display of books
  displayLibrary();
  
  // event listener to the button to update book titles
  document.getElementById('updateTitles').addEventListener('click', updateBookTitles);
  
  // event listener to the button to finish reading all books
  document.getElementById('finishReading').addEventListener('click', finishReading);
  