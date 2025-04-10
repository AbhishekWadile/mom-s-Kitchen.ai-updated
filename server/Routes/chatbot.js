const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

let searchHistory = [];

router.post('/generate', async (req, res) => {
    const { ingredients, recipeName } = req.body;
    let prompt = "";

    if (recipeName) {
        prompt = `Give me a detailed recipe for ${recipeName}, including prep time, cook time, servings, ingredients, cooking methods, and tips.`;
    } else {
        prompt = `I have ${ingredients.join(', ')}. Give me a recipe including prep time, cook time, servings, ingredients, cooking methods, and tips.`;
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        searchHistory.push({ ingredients, recipeName, recipe: responseText });
        res.json({ recipe: responseText, history: searchHistory });

    } catch (error) {
        console.error("Error generating recipe:", error);
        res.status(500).json({ error: "Failed to generate recipe" });
    }
});

router.get('/history', (req, res) => {
    res.json({ history: searchHistory });
});

module.exports = router;
