const express = require('express');
const router = express.Router();
const PantryItem = require('../models/PantryItem');

// Get all pantry items
router.get('/', async (req, res) => {
    try {
        const items = await PantryItem.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching pantry items' });
    }
});

// Add new pantry item
router.post('/', async (req, res) => {
    try {
        const { name, category } = req.body;
        const newItem = await PantryItem.create({ name, category });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Error adding pantry item' });
    }
});

// Remove pantry item
router.delete('/:id', async (req, res) => {
    try {
        await PantryItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting pantry item' });
    }
});


module.exports = router;
