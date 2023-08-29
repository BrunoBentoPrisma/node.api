import { IClienteLogin } from "../models/IClienteLogin";
import express, { Request, Response } from "express";

const router = express.Router();
const bcrypt = require("bcrypt");

router.post(
  "/api/login-cliente",
  async (req: Request<IClienteLogin>, res: Response) => {
    try {
      const cliente: IClienteLogin = req.body;

      const connection = await require("../db/db");
      const rows = await connection.query(
        "SELECT * FROM Clientes WHERE Email = ?",
        [cliente.email]
      );

      if (rows.length === 0) {
        res.status(404).json({ message: "Cliente não encontrado." });
        return;
      }

      const clienteFromDb: IClienteLogin = rows[0];

      console.log(clienteFromDb);

      bcrypt.compare(cliente.password, clienteFromDb.password, (err: any, result: any) => {
        if (err) {
          console.error('Erro ao comparar hashes:', err);
          return;
        }
        if (result) {
          console.log('Senha correta. Login bem-sucedido.');
        } else {
          console.log('Senha incorreta. Login falhou.');
        }
      });
    } catch (error: any) {
      res.status(404).send("error try");
    }
  }
);

module.exports = router;
