import React, { useState } from 'react';
import './yourOrderStyle/tableOrders.css';

const TableOrders = ({
  allOrders,
  crud,
  setCrud,
  setselectOrder,
}) => {
  const getStatusLabel = (order) => {
    let backgroundColor, label;

    switch (order.statusOrder) {
      case 'onTheWay':
        backgroundColor = 'var(--body-yeloow)';
        label = 'Por Entregar';
        break;
      case 'delivered':
        backgroundColor = '#069d27';
        label = 'Entregado';
        break;
      case 'cancel':
        backgroundColor = 'var(--body-red)';
        label = 'Cancelado';
        break;
      default:
        return null;
    }

    return (
      <td
        onClick={() => {
          setselectOrder(order), setCrud(`updateOrder${order.id}`);
        }}
        style={{
          backgroundColor,
          padding: '8px',
          color: '#fff',
          textAlign: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        {label}
      </td>
    );
  };
  const sortedOrders = allOrders?.clientOrders?.sort((a, b) => {
    // Parsea las horas a objetos Date y compara para ordenar
    const dateA = new Date(`1970-01-01 ${a.hour}`);
    const dateB = new Date(`1970-01-01 ${b.hour}`);
    return dateB - dateA;
  });

  return (
    <table className="tableOrders__contianer">
      <thead>
        <tr>
          <th>N°</th>
          <th>Hora</th>
          <th>Cliente</th>
          <th>Contacto</th>
          <th>Pedido</th>
          <th>Delivery</th>
          <th>Mensaje</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {sortedOrders?.map((order, index) => (
          <tr key={order.id}>
            <td>{sortedOrders.length - index}</td>
            <td>{order.hour}</td>
            <td style={{ maxWidth: '200px' }}>{order.name}</td>
            <td style={{ maxWidth: '300px' }}>
              <ul>
                <li>correo: {order.email}</li>
                <li>celular: {order.phoneNumber}</li>
              </ul>
            </td>
            <td>
              {order?.orders.map((order, index) => (
                <ul key={order.id}>
                  <li style={{ marginTop: '-0.3em' }}>
                    Orden {index + 1}:
                  </li>
                  <li style={{ marginTop: '-0.3em' }}>
                    {order.numberOrder}, {order.name}, {order.option}
                  </li>
                  {order.extras.length > 0 ? (
                    <li style={{ marginTop: '-0.3em' }}>
                      {order.extras.map((extra) => extra.name)}
                    </li>
                  ) : (
                    ''
                  )}
                </ul>
              ))}
            </td>
            <td>
              <ul>
                <li>{order.deliveryName}</li>
                <li>Dirección: {order.address}</li>
                <li>Referencia: {order.reference}</li>
              </ul>
            </td>
            <td>{order.message}</td>
            {getStatusLabel(order)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableOrders;
