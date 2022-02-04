const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


//THIS WORKS
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:[Product]
  }).then((tagData) => {
    res.status(200).json(tagData);
  }).catch(err=> {
    console.log(err);
    res.status(400).send("that didn't work")
  })
  ;
});

//THIS WORK
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
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTag) => res.status(200).json(newTag))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
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

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
