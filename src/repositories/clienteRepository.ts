import { Cliente } from "../entities/Cliente";
import { AppDataSource } from "../db/db";

export async function getCLienteLoginAsync(
  email: string
): Promise<Cliente | undefined> {
  const db = await AppDataSource;
  const cliente = await db.query(
    "SELECT * FROM Clientes WHERE DataDeExclusao is NULL AND Email = ?",
    [email],
    function(err, rows){
        if(err) throw err;
        console.log(rows);
      }   
  );

  cliente[0].constructor;

  if (cliente.length == 0) return undefined;

  return cliente[0];
}
