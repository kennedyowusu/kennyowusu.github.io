const navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const famous = [
  {
    id: 1,
    name: 'John Doe',
    image: './images/celebrities/bill.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque is a great automobile',
  },

  {
    id: 2,
    name: 'Evans Charles',
    image: './images/celebrities/cyrus.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque',
  },

  {
    id: 3,
    name: 'Fredrick Smith',
    image: './images/celebrities/gwen.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque is a great automobile',
  },

  {
    id: 4,
    name: 'Alexis Smith',
    image: './images/celebrities/kate.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque',
  },

  {
    id: 5,
    name: 'Alexander Foster',
    image: './images/celebrities/levine.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque is a great automobile',
  },

  {
    id: 6,
    name: 'John Banascoe',
    image: './images/celebrities/paula.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque ',
  },

];

// eslint-disable-next-line no-plusplus
for (let index = 0; index < famous.length; index++) {
  document.querySelector('.famous-people-loop-holder').innerHTML += `
    <div class="famous__item">
      <div class="famous__item__img">
        <img src="${famous[index].image}" alt="" height="110px" width="120px;" class="">
      </div>
      <div class="famous__item__text">
        <h3 class="title">${famous[index].name}</h3>
        <p class="first-para">${famous[index].firstParagraph}</p>
        <p class="second-para">${famous[index].secondParagraph}</p>
      </div>
    </div>`;
}
