import { createTicket } from '../controllers/tickets/create.js';
import { listTicket } from '../controllers/tickets/list.js';
import { updateTicket } from '../controllers/tickets/update.js';

export const tickets = [
  // Criar Ticket
  {
    method: 'POST',
    path: '/tickets',
    controller: createTicket,
  },

  {
    method: 'GET',
    path: '/tickets',
    controller: listTicket,
  },
  {
    method: 'PUT',
    path: '/tickets/:id',
    controller: updateTicket,
  },
];
