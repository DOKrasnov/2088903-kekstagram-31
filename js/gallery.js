const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createCard = (({ id, url, description, likes, comments }) => {
  const fragment = document.createDocumentFragment();
  const newCard = pictureTemplate.cloneNode(true);
  const newCardImage = newCard.querySelector('.picture__img');
  newCard.dataset.id = id;
  newCardImage.src = url;
  newCardImage.alt = description;
  newCard.querySelector('.picture__likes').textContent = likes;
  newCard.querySelector('.picture__comments').textContent = comments.length;
  fragment.append(newCard);
  return fragment;
});

const renderGallery = (data, container) => {
  data.forEach(({ id, url, description, likes, comments }) => {
    const newCard = createCard({id, url, description, likes, comments});
    container.append(newCard);
  });
};

export { renderGallery };
