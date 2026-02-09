export function listTicket({ req, res, database }) {
  const items = database.select('tickets');
  res.end(JSON.stringify(items));
}
