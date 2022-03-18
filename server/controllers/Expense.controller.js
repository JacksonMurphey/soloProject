const Expense = require('../models/expense.model')
const User = require('../models/user.model')

module.exports = {

    createExpense:
        (req, res) => {
            const newExpenseObj = new Expense(req.body)
            newExpenseObj.createdBy = req.jwtpayload.id

            newExpenseObj.save()
                .then((newExp) => {
                    console.log(newExp)
                    res.json(newExp)
                })
                .catch(err => {
                    console.log('Creating an Expense Failed')
                    res.status(400).json({ message: "Error in createExpense", error: err })
                })
        },



    findOneExpense:
        (req, res) => {
            Expense.findOne({ _id: req.params.id })
                .then((oneExp) => {
                    res.json(oneExp)
                })
                .catch(err => {
                    console.log('Find One Exp. Failed')
                    res.json({ message: 'Error in findOneExp.', error: err })
                })
        },


    updateOneExpense:
        (req, res) => {
            Expense.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                .then((updatedExp) => {
                    console.log(updatedExp)
                    res.json(updatedExp)
                })
                .catch(err => {
                    console.log('Updating One Expense Failed')
                    res.status(400).json({ message: "Error in updateOneExpense", error: err })
                })
        },


    deleteOneExpense:
        (req, res) => {
            Expense.deleteOne({ _id: req.params.id })
                .then((deletedExp) => {
                    console.log(deletedExp)
                    res.json(deletedExp)
                })
                .catch(err => {
                    console.log('Deleting One Expense Failed')
                    res.json({ message: 'Error in deleteOneExpense', error: err })
                })
        },


    findAllExpensesByUser:
        (req, res) => {
            if (req.jwtpayload.username !== req.params.username) {
                User.findOne({ username: req.params.username })
                    .then((userNotLoggedIn) => {
                        Expense.find({ createdBy: userNotLoggedIn._id })
                            .populate('createdBy', 'username email')
                            .then((allExpensesForUnloggedUser) => {
                                res.json(allExpensesForUnloggedUser)
                            })
                            .catch(err => res.status(400).json(err))
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(400).json(err)
                    })
            } else {
                Expense.find({ createdBy: req.jwtpayload.id })
                    .populate('createdBy', 'username email')
                    .then((thisUserExpenses) => {
                        console.log(thisUserExpenses)
                        res.json(thisUserExpenses)
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(400).json(err)
                    })
            }
        }

}