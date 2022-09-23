// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if(req.body.event === "charge.success"){
    const ob = {
      "first_name" : req.body.data.customer.first_name,
      "last_name" : req.body.data.customer.last_name,
      "email" : req.body.data.customer.email,
      "amount": req.body.data.amount
    }
    //use the person email, findby id,
    //const user = findbyemail()
    //user.wallet.balance == 
    console.log(ob)
    return res.status(200).json(ob)
  }
  if(req.body.event === "paymentrequest.pending"){
    const ob = {
      "amount" : req.body.data.amount,
      "currency" : req.body.data.currency,
      "status": req.body.data.status
    }
    return res.status(200).json(ob)
  }
  res.status(200).json()
}
