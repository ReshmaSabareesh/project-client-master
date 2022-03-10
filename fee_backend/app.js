const app = require ("express")()
const path =require("path");
const shortid = require("shortid");
const cors = require("cors");
const Razorpay = require("razorpay");
const { json } = require('express')
const bodyParser = require("body-parser");

//middlewares
app.use(cors());
app.use(bodyParser.json());


 const razorpay = new Razorpay({
     key_id: 'rzp_test_7He7llbv9042c4',
    key_secret:'oI1QjefrCWKtD8701NCtoBxR',
 })
  app.post('/razorpay',async (req,res)=>{
    const payment_capture =1
    const amount=5
    const currency='INR'
     const options = {
          amount: amount * 100,
      //amount:req.body.fee*100,
         currency,      
            receipt:shortid.generate(),
            payment_capture}
         try{  
            const response = await razorpay.orders.create(options)
           console.log(response)
           res.json({
              id: response.id,
             currency: response.currency,
            amount: response.amount
           })}
           catch(error){
                console.log(error)
          }
   })

// app.post("/orders",async(req,res)=>{
//     try{
//         var razorpay = new Razorpay({
//        key_id: 'rzp_test_h7iSZ1tjWt4T1I',
//       key_secret:'1DMwiI6zlUiUBaBCIraFkSoc',

//     });
//     const options ={
//          amount: "5",
//         amount: ammount * 100,
//         //amount:req.body.fee*100,
//         currency:"INR",
//         receipt:crypto.randomBytes(10).toString("hex"),
//     };
//     razorpay.orders.create(options,(error,order)=>{
//         if(error){
//             console.log(error);
//             return res.status(500).json({message:"something Went Wrong!"});
//         }
//         res.status(200).json({data:order})
//     });
//     }catch(error){
//         console.log(error);
//         return res.status(500).json({message:"Internal Server error"});
//     }
// })
//  app.post('/verification',(req,res)=>{
//     const secret = 'ict12345'
//     concole.log('loading')
//     console.log(req.body)
//    const crypto = require('crypto')
//     const shasum =crypto.createHmac('sha256', secret)
//     shasum.update(json.stringify(req.body))
//     const digest = shasum.digest('hex')
//     console.log(digest, req.headers['x-razorpay-signature'])
//     if(digest === req.headers['x-razorpay-signature']){
//         console.log('request is valid')
//         require('fs'.writeFileSync('payment.json',JSON.stringify(req.body,null,4)))

//     }else{console.log('request is valid')}
//     res.json({status:'ok'})
// })

app.post("/verify", async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

app.listen(5000,() => {
    console.log('Listening to port 5000');
})