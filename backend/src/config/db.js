const mongoose = require("mongoose");

//Con función asincrona
const db = async () => {
  try {
    await mongoose.connect(process.env.MONGOOB_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


// //Con promesas
// const db = () => {
//   return mongoose
//     .connect(process.env.MONGOOB_URI)
//     .then(() => console.log("Successfull.."))
//     .catch((error) => {
//       console.log(erro);
//       process.exit(1);
//     });
// };

module.exports = db;
