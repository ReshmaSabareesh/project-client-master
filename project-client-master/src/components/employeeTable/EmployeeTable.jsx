import React from "react";

export default function EmployeeTable({ data }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Contact</th>
          </tr>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>
                {item.email}
                <br />
                {item.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
