import { createTicket } from '../controllers/tickets/create.js';
import { listTicket } from '../controllers/tickets/list.js';

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
];
