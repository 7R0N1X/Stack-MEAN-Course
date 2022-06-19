const employeeCtrl = {}
const employee = require('../models/employee-models')

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await employee.find()
    res.json(employees)
}

employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new employee(req.body);
    await newEmployee.save()
    res.send({message: 'Employee created'});
}

employeeCtrl.getEmployee = (req, res) => {
    res.send('Get employee');
}

employeeCtrl.editEmployee = (req, res) => {
    res.send('Deleting employee');
}

employeeCtrl.deleteEmployee = (req, res) => { }

module.exports = employeeCtrl;