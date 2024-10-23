const express = require('express');
const mongoose = require('mongoose'); // Ensure mongoose is imported
const router = express.Router();
const Rule = require('../models/Rule');
const { createAST, evaluateAST } = require('../services/RuleEngine');

router.use(express.json());

router.post('/create', async (req, res) => {
    const { ruleString } = req.body;
    const ast = createAST(ruleString);
    console.log('Generated AST:', ast);
    const rule = new Rule({ ruleString, ast });

    try {
        await rule.save();
        res.json(rule);
    } catch (error) {
        console.error('Error saving rule:', error);
        res.status(500).json({ error: 'Failed to save rule.' });
    }
});

router.post('/evaluate/:id', async (req, res) => {
    const { id } = req.params;
    const objectIdString = id.trim();

    console.log('Received ID:', objectIdString);
    console.log('Received User Data:', req.body);

    if (!mongoose.Types.ObjectId.isValid(objectIdString)) {
        return res.status(400).json({ error: 'Invalid ObjectId format.' });
    }

    try {
        const rule = await Rule.findById(objectIdString);
        if (!rule) {
            return res.status(404).json({ error: 'Rule not found.' });
        }

        console.log('Found Rule:', rule);

        const result = evaluateAST(rule.ast, req.body);
        res.json({ result });
    } catch (error) {
        console.error('Error evaluating rule:', error);
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
