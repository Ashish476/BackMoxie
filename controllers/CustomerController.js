const Customer = require('../models/Customer')
const Product = require('../models/Customer')


//show the list of customers
const index =(req,res,next)=>{
    Customer.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An Error Occured..'
        })
    })
}


//single customer 
const show = (req,res,next)=>{
    let customerID = req.body.customerID
    Customer.findById(customerID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured...'
        })
    })
}

//add customer 

const store =(req,res,next)=>{
    let customer = new Customer({
        role: req.body.role,
        requirment: req.body.requirment,
        requirmenttype: req.body.requirmenttype,
        department:req.body.department,
        reference:req.body.reference,
        frequency:req.body.frequency,
        biggestRisk:req.body.biggestRisk,
        expiration:req.body.expiration,
        gracePeriod: req.body. gracePeriod,
        startDate:req.body.startDate,
        actionTaken: req.body.actionTaken,
        status: req.body.status,
        textarea:req.body.textarea,
        supervisor: req.body.supervisor,
    })
    if(req.file){
        customer.file = req.file.path //avatar
    }

    if(req.files){
        let path = ''
        req.files.forEach(function(files,index,arr){
            path = path + files.path +','
        })
        path = path.substring(0,path.lastIndexOf(","))
        customer.file = path
    }
    customer.save()
    .then(response=>{
        res.json({
            message:'Customer added successfully'
        })
        .catch(error=>{
            res.json({
                message:'An error occured...'
            })
        })
        
    })
}

//update customer

const update = (req,res,next)=>{
    let customerID = req.body.customerID

    let updateData ={
        role: req.body.role,
        requirment: req.body.requirment,
        requirmenttype: req.body.requirmenttype,
        department:req.body.department,
        reference:req.body.reference,
        frequency:req.body.frequency,
        biggestRisk:req.body.biggestRisk,
        expiration:req.body.expiration,
        gracePeriod: req.body. gracePeriod,
        startDate:req.body.startDate,
        actionTaken: req.body.actionTaken,
        status: req.body.status,
        textarea:req.body.textarea,
        supervisor: req.body.supervisor,
    }

    Customer.findByIdAndUpdate(customerID,{$set:updateData})
    .then(()=>{
        res.json({
            message:'Customer updated Succesfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured when  updating '
        })
    })
}

//delete customer 

const destroy = (req,res,next)=>{
    let customerID = req.body.customerID
    Customer.findByIdAndRemove(customerID)
    .then(()=>{
        res.json({
            message:'Customer deleted Succesfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured when  deleting '
        })
    })
}

module.exports={
    index,show,store,update,destroy
}