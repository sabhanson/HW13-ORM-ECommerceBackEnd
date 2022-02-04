const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


//GET ROUTE TO SHOW ALL TAGS
router.get('/', (req, res) => {
  Tag.findAll({
    include:[Product]
  }).then((tagData) => {
    res.status(200).json(tagData);
  }).catch(err=> {
    console.log(err);
    res.status(400).json(err);
  })
  ;
});

//GET ROUTE TO SHOW A TAG BY ID
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {include:[Product]});
  if (!tagData) {
    res.status(404).json({message: "No tag with this id!"});
    return;
  }
  res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//POST ROUTE TO CREATE A NEW TAG
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((newTag) => res.status(200).json(newTag))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

//PUT ROUTE TO UPDATE A TAG BY ID
router.put('/:id', async (req, res) => {
try {
  const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  });
  if(!tagData[0]) {
    res.status(404).json({ message: 'No tag with this id'});
    return;
  }
  res.status(200).json(tagData);
} catch (err) {
  res.status(400).json(err);
}
});

//DELETE ROUTE TO DELETE A TAG BY ID
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.status(200).json(deletedTag);
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
