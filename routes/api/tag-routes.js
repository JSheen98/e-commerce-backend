const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

// Find all tags in the endpoint
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Find a single tag by it's given id
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    })

    // If there is no data, it will give a 404 status with the json message
    if (!tagData) {
      res.status(404).json({ message: 'There are no tags with that ID!' })
      return
    }

    // If there is tag data, it will give a 200 http status, and the data in json format
    res.status(200).json(tagData)
  } catch (err) {
    // If anything fails in the try, go to catch and give 500 status + json error
    res.status(500).json(err)
  }
});

// Post request to create new tag with the given parameters
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body)
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Put request to update a tag from the given id, with the given params
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(
      // update the tag name with the given json data
      {
        tag_name: req.body.tag_name
      },
      // Update the category with the given id (in the endpoint)
      {
        where: {
          id: req.params.id
        }
      }
    )
    // Give 200 http status and format tag data in json
    res.status(200).json(tagData)
  } catch (err) {
    // Give 500 status, and format the error in json
    res.status(500).json(err)
  }
});

// Delete request to remove a tag by id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      // Delete the tag with the given id (in the endpoint)
      where: {
        id: req.params.id,
      }
    })

    // If there is no tagdata (id), give the 404 status, json message, and return
    if (!tagData) {
      res.status(404).json({ message: 'There are no tags with this ID!' })
      return
    }

    // If there is tagData, give 200 status, and put data in json format
    res.status(200).json(tagData)
  } catch (err) {
    // If any errors occur in try method, give http 500 status, and json error
    res.status(500).json(err)
  }
});

module.exports = router;
