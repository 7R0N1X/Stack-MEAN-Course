const employeeCtrl = {}

employeeCtrl.getEmployees = (req, res) => {
    res.send('Get employees');
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