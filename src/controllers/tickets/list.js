export function listTicket({ req, res, database }) {
  const { status } = req.query;

  const filters = status ? { status } : null;

  const items = database.select('tickets', filters);

  res.end(JSON.stringify(items));
}
