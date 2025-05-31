const uploadDummyImage = () => {
  return `https://picsum.photos/seed/${Math.floor(Math.random() * 10000)}/600/400`;
};

module.exports = { uploadDummyImage };
