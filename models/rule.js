const mongoose = require('mongoose');

const ASTNodeSchema = new mongoose.Schema({
    type: { type: String, required: true }, // operator or operand
    left: { type: mongoose.Schema.Types.Mixed }, // Left child node
    right: { type: mongoose.Schema.Types.Mixed }, // Right child node
    value: { type: String }, // Operand value (e.g., age > 30)
});

const RuleSchema = new mongoose.Schema({
    ruleString: { type: String, required: true }, // Original rule string
    ast: { type: ASTNodeSchema, required: true }, // AST structure
});

module.exports = mongoose.model('Rule', RuleSchema);