// src/components/TicketsList.js
import React from 'react';

const ticketsData = [
  {
    assignee: 'David Grey',
    subject: 'Fund is not received',
    status: 'DONE',
    lastUpdate: 'Dec 5, 2017',
    trackingId: 'WD-123456',
  },
  {
    assignee: 'Stella Johnson',
    subject: 'High loading time',
    status: 'PROGRESS',
    lastUpdate: 'Dec 5, 2017',
    trackingId: 'WD-12345',
  },
  {
    assignee: 'Marina Michel',
    subject: 'Website down for one week',
    status: 'ON HOLD',
    lastUpdate: 'Dec 5, 2017',
    trackingId: 'WD-12347',
  },
  {
    assignee: 'John Doe',
    subject: 'Losing control on server',
    status: 'REJECTED',
    lastUpdate: 'Dec 5, 2017',
    trackingId: 'WD-12348',
  },
];

const TicketsList = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <h3 className="text-lg font-semibold p-4 border-b">Recent Tickets</h3>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Assignee</th>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Last Update</th>
            <th className="px-4 py-2">Tracking ID</th>
          </tr>
        </thead>
        <tbody>
          {ticketsData.map((ticket, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{ticket.assignee}</td>
              <td className="px-4 py-2">{ticket.subject}</td>
              <td className="px-4 py-2">{ticket.status}</td>
              <td className="px-4 py-2">{ticket.lastUpdate}</td>
              <td className="px-4 py-2">{ticket.trackingId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsList;