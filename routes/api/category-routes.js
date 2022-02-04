const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include:[Product]
  }).then((categories) => {
    res.status(200).json(categories);
  }).catch(err=> {
    console.log(err);
    res.status(400).send("that didn't work")
  });
  // find all categories
  // be sure to include its associated Products
});


router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {include:[Product]});
  if (!categoryData) {
    res.status(404).json({ message: "No category with this id!"});
    return;
  }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => res.status(200).json(newCategory))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.status(200).json(deletedCategory);
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
