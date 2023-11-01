const CALLBACK = require('../model/callBack')



const UserCallBack = async (req, res) => {
  try {
    const { name, email, phone, highest_degree, branch, passing_out } = req.body;
    const callback_form_data = await CALLBACK.create({
      name,
      email,
      phone,
      highest_degree,
      branch,
      passing_out,
    });

    res.status(200).send({ formdata: callback_form_data, msg: "Thank You For Submiting Form We Will You Call Back After Some Time" });
  } catch (err) {
    console.log(`Error in CallBack Form ; ${err.message}`);
  }
};


module.exports = UserCallBack