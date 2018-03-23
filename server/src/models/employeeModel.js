var mongoose = require('mongoose');

require('mongoose-type-email');

var EmployeeSchema = mongoose.Schema({
    employeeID :{ type: String,
        required: [true, 'employeeID required']
    },    
    name:{ type: String,
        required: [true, 'name required']
    },
    gender:{  type: String,
        required: [true, 'gender required']
    },
    DateOfBirth:{ type: Date,
        required: [true, 'date of birth required']
    },
    PlaceOfBirth:{ type: String,
        required: [true, 'employeeID required']
    },
    MaritalStatus: String,
    Remark: String
}, {
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Employee', EmployeeSchema);