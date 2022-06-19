const { Router } = require('express');
const router = Router();
const employeesControllers = require('../controllers/employees-controllers');

router.get('/', employeesControllers.getEmployees);
router.post('/', employeesControllers.createEmployee);
router.get('/:id', employeesControllers.createEmployee);
router.put('/:id', employeesControllers.editEmployee);
router.delete('/:id', employeesControllers.deleteEmployee);

module.exports = router;