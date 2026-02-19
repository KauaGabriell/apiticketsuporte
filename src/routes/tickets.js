import { createTicket } from '../controllers/tickets/create.js';
import { listTicket } from '../controllers/tickets/list.js';
import { updateTicket } from '../controllers/tickets/update.js';
import { updateStatus } from '../controllers/tickets/updateStatus.js';
import { removeTicket } from '../controllers/tickets/delete.js';

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
  {
    method: 'PATCH',
    path: '/tickets/:id/close',
    controller: updateStatus,
  },
  {
    method: 'DELETE',
    path: '/tickets/:id',
    controller: removeTicket,
  }
];
