const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get request to get all categories and associated products 
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    })
    // Give 200 status, and json data 
    res.status(200).json(categoryData)
  } catch (err) {
    // If any sort of error occurs during the try portion, this will catch and display 500 error with the error in json
    res.status(500).json(err)
  }
});

// Get request to get one category by id (using primary key)
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    })

    // If the id does not match the endpoint, give the 404 http status with the message
    if (!categoryData) {
      res.status(404).json({ message: 'There are no categories with that ID!' })
      return
    }

    // If the id does match, then give the 200 status with the json data
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Create a new category with the json parameters the user gives (ie category name)
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Update category by id, using the category_name part of the category model
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        // Update the category name with the json data given from the user
        category_name: req.body.category_name
      },
      {
        where: {
          // Update the category with the given endpoint id
          id: req.params.id
        }
      }
    )
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Deletes a category with a given id
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        // Delete the category with the given id (in the endpoint)
        id: req.params.id,
      },
    })

    if (!categoryData) {
      res.status(404).json({ message: 'There are no categories with that ID!' })
      return
    }

    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
