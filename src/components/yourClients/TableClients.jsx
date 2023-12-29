import React from 'react';

const TableClients = ({ allClients }) => {
  return (
    <table className="tableClients__contianer">
      <thead>
        <tr>
          <th>Perfil</th>
          <th>Nombre y Apellido</th>
          <th>Email</th>
          <th>Dni</th>
          <th>Celular</th>
          <th>Ver Mas</th>
        </tr>
      </thead>
      <tbody>
        {allClients?.clients.map((client) => (
          <tr key={client.id}>
            <td>
              <img src={client.clientImg} alt="" />
            </td>
            <td>
              {client.name} {client.lastName}
            </td>
            <td>{client.email}</td>
            <td>{client.dni}</td>
            <td>{client.phoneNumber}</td>
            <td>ver mas</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableClients;
