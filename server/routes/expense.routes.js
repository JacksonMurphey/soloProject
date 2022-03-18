const ExpenseController = require('../controllers/Expense.controller')
const { authenticate } = require('../config/jwt.config')

module.exports = (app) => {

    app.post('/api/expenses', authenticate, ExpenseController.createExpense)
    app.get('/api/expenses/:id', ExpenseController.findOneExpense)
    app.put('/api/expenses/:id', ExpenseController.updateOneExpense)
    app.delete('/api/expenses/:id', ExpenseController.deleteOneExpense)
    app.get('/api/userexpenses/:username', authenticate, ExpenseController.findAllExpensesByUser)
}