import React from "react";
import Table from "react-bootstrap/Table";

function VizinhosList() {
  // Dados fictícios para exemplo
  const vizinhos = [
    { id: 1, nome: "João Silva", apartamento: "101" },
    { id: 2, nome: "Maria Oliveira", apartamento: "102" },
    { id: 3, nome: "Carlos Souza", apartamento: "201" },
    { id: 4, nome: "Ana Pereira", apartamento: "305" },
  ];

  return (
    <div className="mt-4">
      <h3>Lista de Vizinhos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Apartamento</th>
          </tr>
        </thead>
        <tbody>
          {vizinhos.map((vizinho) => (
            <tr key={vizinho.id}>
              <td>{vizinho.id}</td>
              <td>{vizinho.nome}</td>
              <td>{vizinho.apartamento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default VizinhosList;
