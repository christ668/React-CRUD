var Employee = require('../models/employeeModel.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    //console.log(req.body.employeeID);

    if(!req.body.employeeID) {
        return res.status(400).send({message: "employeeID can not be empty"});
    }

    var employee = new Employee({employeeID: req.body.employeeID , name: req.body.name, gender: req.body.gender
        , DateOfBirth: req.body.DateOfBirth, PlaceOfBirth: req.body.PlaceOfBirth, MaritalStatus: req.body.MaritalStatus
        , Remark: req.body.Remark});

        employee.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the employee."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all employee from the database.
    Employee.find(function(err, employee){
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving employees."});
        } else {
            // console.log(employee);
            res.send(employee);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Employee.findOne({employeeID: req.params.employeeID}, function(err, employee) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "employee not found with id " + req.params.employeeID});                
            }
            return res.status(500).send({message: "Error retrieving employee with id " + req.params.employeeID});
        } 

        if(!employee) {
            return res.status(404).send({message: "employee not found with id " + req.params.employeeID});            
        }
        // console.log(employee);
        res.send(employee);
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Employee.findOneAndUpdate({employeeID: req.params.employeeID},req.params.employeeID, function(err, employee) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "employee not found with id " + req.params.employeeID});                
            }
            return res.status(500).send({message: "Error finding employee with id " + req.params.employeeID});
        }

        if(!employee) {
            return res.status(404).send({message: "employee not found with id " + req.params.employeeID});            
        }

        employee.employeeID = req.body.employeeID;
        employee.name = req.body.name;
        employee.gender= req.body.gender;
        employee.DateOfBirth= req.body.DateOfBirth; 
        employee.PlaceOfBirth= req.body.PlaceOfBirth; 
        employee.MaritalStatus= req.body.MaritalStatus;
        employee.Remark= req.body.Remark

        employee.save(function(err, employee){
            if(err) {
                res.status(500).send({message: "Could not update employee with id " + req.params.employeeID});
            } else {
                res.send(employee);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Employee.findOneAndRemove({employeeID: req.params.employeeID}, function(err, employee) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Employee not found with id " + req.params.employeeID});                
            }
            return res.status(500).send({message: "Could not delete Employee with id " + req.params.employeeID});
        }

        if(!employee) {
            return res.status(404).send({message: "Employee not found with id " + req.params.employeeID});
        }

        res.send({message: "Employee deleted successfully!"})
    });
};