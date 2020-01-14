'use strict'

//very important to put this outside the class!!!!
const Customer = use('App/Models/Customer')

class FindCustomer {
  
  async handle ({ request ,response, params: {id}}, next ) {
    const customer = await Customer.find(id)
    console.log(customer.name)
    // if customer not found
    if(!customer){

      return response.status(404).json({
        message : 'customer not found'
        
      })

    }
    //else if customer is found do this
    //request.body.customer = customer  

    console.log('im here')
    request.customer = customer
    

    
    
    await next()
  

  }
}

module.exports = FindCustomer
