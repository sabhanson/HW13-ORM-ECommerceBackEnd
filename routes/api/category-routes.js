const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint


//GET ROUTE TO SHOW ALL CATEGORIES
router.get('/', (req, res) => {
  Category.findAll({
    include:[Product]
  }).then((categories) => {
    res.status(200).json(categories);
  }).catch(err=> {
    console.log(err);
    res.status(400).json(err)
  });
});

//GET ROUTE TO SHOW A CATEGORY BY ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {include:[Product]});
  if (!categoryData) {
    res.status(404).json({ message: "No category with this id! Try again."});
    return;
  }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//POST ROUTE TO CREATE A NEW CATEGORY
router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => res.status(200).json(newCategory))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

//PUT ROUTE TO UPDATE A CATEGORY BY ID
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    if(!categoryData[0]) {
      res.status(404).json({ message: "No category with this id! Try again."});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE ROUTE TO DELETE A CATEGORY BY ID
router.delete('/:id', (req, res) => {
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
