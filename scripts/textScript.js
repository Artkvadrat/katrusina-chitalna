const bookDescriptionReadMoreButton = document.querySelector('#bookDescriptionReadMoreButton');
const bookDescriptionTextBlocks = document.querySelectorAll('.bookDescriptionText');

const onBookDescriptionReadMoreButtonClick = () => {
  if (bookDescriptionTextBlocks[1].classList.contains('hide')) {
    bookDescriptionTextBlocks[1].classList.remove('hide');
    bookDescriptionReadMoreButton.innerHTML =  'читати менше';
  } else {
    bookDescriptionTextBlocks[1].classList.add('hide');
    bookDescriptionReadMoreButton.innerHTML =  'читати більше';
  }
}

bookDescriptionReadMoreButton.addEventListener('click', onBookDescriptionReadMoreButtonClick);

const aboutAuthorReadMoreButton = document.querySelector('#aboutAuthorReadMoreButton');
const aboutAuthorReadMoreText = document.querySelector('#aboutAuthorReadMoreText');

const onAboutAuthorReadMoreButtonClick = () => {
  if (aboutAuthorReadMoreText.classList.contains('hide')) {
    aboutAuthorReadMoreText.classList.remove('hide');
    aboutAuthorReadMoreButton.innerHTML =  'читати менше';
  } else {
    aboutAuthorReadMoreText.classList.add('hide');
    aboutAuthorReadMoreButton.innerHTML =  'читати більше';
  }
}

aboutAuthorReadMoreButton.addEventListener('click', onAboutAuthorReadMoreButtonClick);
