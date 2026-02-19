export function removeTicket({ req, res, database }) {
  const { id } = req.params;

  database.delete('tickets', id);

  return res.end('Deletado com Sucesso');
}
