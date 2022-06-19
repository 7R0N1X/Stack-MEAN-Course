const employeeCtrl = {}
const employee = require('../models/employee-models')

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await employee.find()
    res.json(employees)
}

employeeCtrl.createEmployee = (req, res) => {
    res.send('Create employee');
}

employeeCtrl.getEmployee = (req, res) => {
    res.send('Get employee');
}

employeeCtrl.editEmployee = (req, res) => {
    res.send('Deleting employee');
}

employeeCtrl.deleteEmployee = (req, res) => { }

module.exports = employeeCtrl;