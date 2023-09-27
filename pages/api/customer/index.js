import connectDB from "../../../utils/connectDB";
import Customer from "../../../models/Customer"

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "error in connecting to database" });
    return;
  }
  if (req.method === "POST") {
    const { data } = req.body;
    if (!data.name || !data.lastName || !data.email)
      return res
        .status(400)
        .json({ status: "failed", message: "invalid data" });

        try{
            const customer=await Customer.create(data)
            res.status(200).json({status:"success",message:"data created",data:customer})
        }catch (err){
            console.log(err);
            res.status(500).json({status:"failed",message:"error in storing data in DB"})
        }
  }

}
