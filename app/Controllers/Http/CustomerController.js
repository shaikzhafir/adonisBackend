'use strict'


const Customer = use('App/Models/Customer')

class CustomerController {

  

  async index ({ response}) {

    const customer = await Customer.all()
    response.json({ 
      greeting : 'here are your customers , from index',
      data : customer
    })



  }


  
  async store ({ request, response }) {
    const {name , description} = request.post()

    const customer = new Customer()
   
     
    customer.name = name 
    customer.description = description

    await customer.save()

    response.json({
      message : 'succesfully created customer',
      data : customer
    })

  }

  async show ({ request, response, params : { id }}){
    //middleware places the found id into request body that is accesed thru .post() 
   
      const customer = await request.customer
      console.log(customer.name)
    
     
    
    
      response.status(200).json({
        message : "Here is you customer",
        data : customer
        
      })
    
  }


  async update ({  request, response, params : { id } }) {

    
    const customer = await Customer.find(id)

    if(customer){
    const { name, description }  = request.post()

    customer.name = name
    customer.description = description

    await customer.save()


    
    response.status(200).json({
      message: 'successfully updated this customer',
      data : customer
      })
    }

    else {
      response.status(404).json({
        message : 'error customer is null'
      })
    }

  }

  async destroy ({ params : { id }, request, response }) {
    const customer = await Customer.find(id)

    if(customer){
    const { name, description }  = request.post()

    customer.name = name
    customer.description = description

    await customer.delete()


    
    response.status(200).json({
      message: 'successfully deleted this customer',
      data : customer
      })
    }

    else {
      response.status(404).json({
        message : 'error customer is null'
      })
    }
    
  
  
  }



}

module.exports = CustomerController
