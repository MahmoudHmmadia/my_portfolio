import mongoose from "mongoose";
export async function connectToDb() {
  await mongoose
    .connect(process.env.dbUrl!, { dbName: "portfolio" })
    .then(() => {
      console.log("CONNECT TO DB");
    })
    .catch((err) => {
      console.log(err);
    });
}
