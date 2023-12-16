import React from 'react';

const ElementsTable = ({ elements }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Scale</th>
        </tr>
      </thead>
      <tbody>
        {elements.map((element) => (
          <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.type}</td>
            <td>{parseFloat(element.scale).toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ElementsTable;
