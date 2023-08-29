import { IClienteLogin } from "../models/IClienteLogin";
import express, { Request, Response } from "express";
import { loginClienteAsync } from "../service/loginService";

const router = express.Router();

router.post(
  "/api/login-cliente",
  async (req: Request<IClienteLogin>, res: Response) => {
    try {
      const cliente: IClienteLogin = req.body;

      let result = await loginClienteAsync(cliente);

      console.log(result);
      if (!result) res.status(401).json("Error");
      res.status(200).json(result);
      console.log("result controller : ", result);
    } catch (error: any) {
      res.status(404).send("error try");
    }
  }
);

module.exports = router;
