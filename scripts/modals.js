const  openModal = (id) =>  {
  console.log(123)
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}
const closeModal = (id) =>  {
  document.getElementById(id).classList.remove('active');
  if (!document.querySelector('.modal.active')) {
    document.body.style.overflow = '';
  }
}

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
