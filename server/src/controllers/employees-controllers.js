const employeeCtrl = {}
const employee = require('../models/employee-models')

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await employee.find()
    res.json(employees)
}

employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new employee(req.body);
    await newEmployee.save()
    res.send({ message: 'Employee created' });
}

employeeCtrl.getEmployee = async (req, res) => {
    console.log(req.params);
    const _employee = await employee.findById(req.params.id);
    res.send(_employee);
}

employeeCtrl.editEmployee = async (req, res) => {
    await employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'Employee updated' })
}

employeeCtrl.deleteEmployee = async (req, res) => {
    console.log(req.params);
    await employee.findByIdAndDelete(req.params.id);
    res.json({ status: 'Employee deleted' });
}

module.exports = employeeCtrl;