const mongoose = require('mongoose')


const ExpenseSchema = new mongoose.Schema({

    title: {
        type: String
    },

    price: {
        type: Number,
        required: [true, 'An Expense Price is required']
    },

    date: {
        type: Date,
        required: [true, 'A Date is required'],
        min: ['2022-03-01', 'You Expense Date must be after: 3-01-22']
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


}, { timestamps: true })

const Expense = mongoose.model('Expense', ExpenseSchema)
module.exports = Expense