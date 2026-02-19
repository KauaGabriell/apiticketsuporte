export function listTicket({ req, res, database }) {
  const { status } = req.query;
  const items = database.select('tickets');

  res.end(JSON.stringify(items));
}
