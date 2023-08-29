import { IClienteLogin } from "../models/IClienteLogin";
import { getCLienteLoginAsync } from "../repositories/clienteRepository";
import bcrypt from "bcrypt";

export async function loginClienteAsync(
  cliente: IClienteLogin
): Promise<string | undefined> {
  try {
    // bcrypt.hash(cliente.password, 10, async (err: any, hash: any) => {
    //   if (err) {
    //     console.error('Erro ao criar hash:', err);
    //     return;
    //   }

    //   clienteFromDb.password = hash;

    //   console.log('Hash gerado:', hash);
    //   await connection.query(
    //     "UPDATE Clientes SET Senha = ? WHERE Email = ?",
    //     [hash ,clienteFromDb.email]
    //   );
    //   // Armazene o hash no banco de dados
    // });

    const clienteFromDb = await getCLienteLoginAsync(cliente.email);

    if (!clienteFromDb) return undefined;

    bcrypt.compare(
      cliente.password,
      clienteFromDb.Senha,
      (err: any, result: any) => {
        if (err) {
          return "E-mail ou senha incorretos.";
        }
        if (result) {
          console.log('result service : ',"teste 123");
          return "Login bem-sucedido.";
        } else {
          return "E-mail ou senha incorretos.";
        }
      }
    );
  } catch (error: any) {
    console.log("try")
  }
}
