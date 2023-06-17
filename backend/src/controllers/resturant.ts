import db from "../models";
const Resturant = db.Resturant;

export const findAll = async (req: any, res: any) => {
  try {
    const Result = await Resturant.findAll();
    res.status(200).send(Result);
  } catch (error: any) {
    res.status(500).send({
      message:
        error.message ||
        "Some error occured while retrieving Resturants Details",
    });
  }
};
