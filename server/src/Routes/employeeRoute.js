module.exports = function(app) {
    
        var employee = require('../controllers/employeeController.js');
    
        // Create a new Note
        app.post('/api/create/employee', employee.create);
    
        // Retrieve all Notes
        app.get('/api/employee', employee.findAll);
    
        // Retrieve a single Note with noteId
        app.get('/api/employee/:employeeID', employee.findOne);
    
        // Update a Note with noteId
        app.put('/api/update/employee/:employeeID', employee.update);
    
        // Delete a Note with noteId
        app.delete('/api/delete/employee/:employeeID', employee.delete);

        /*app.get('/api/employees', employee.create);
        app.get('/api/employees/:id', employee.create);
        app.post('/api/employees', employee.create);
        app.put('/api/employees/:id', employee.create);
        app.delete('/api/employees/:id', employee.create);*/
        
    }