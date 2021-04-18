import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ReactTable = ({ data }: { data: any }) => {
  return (
    <div>
      <Table className="Table" size="sm" hover borderless>
        <thead className="tableHeader">
          <tr>
            <th>TERMS</th>
            <th>% OF TOTAL POSTS</th>
            <th># OF POSTS</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, count }: { name: string; count: number }) => {
            return (
              <tr key={name}>
                <td>{name}</td>
                <td>
                  <Percentage count={count} />
                </td>
                <td>{count}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const Percentage = ({ count }: { count: number }) => {
  return (
    <main className="percentageCell">
      <progress max={100} value={count} />
      <span>{count}%</span>
    </main>
  );
};
