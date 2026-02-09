export const tickets = [
  // Criar Ticket
  {
    method: 'POST',
    path: '/tickets',
    controller: (req, res) => {
      res.end('Criado com sucesso');
    },
  },

  {
    method: 'GET',
    path: '/tickets',
    controller: (req, res) => {
      res.end('Listado com Sucesso');
    },
  },
];
