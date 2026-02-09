// Importa função para gerar IDs únicos
import { randomUUID } from 'node:crypto';

// Controller para criar um novo ticket de suporte
export function createTicket({ req, res, database }) {
  // Extrai os dados do corpo da requisição
  const { equipment, description, user_name } = req.body;

  // Monta o objeto do ticket com um ID único
  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: 'open',
    created_at: new Date(),
    updated_at: new Date(),
  };

  database.insert('tickets', ticket);

  // Retorna o ticket criado como JSON
  return res.writeHead(201).end(JSON.stringify(ticket));
}
