const { Appointment } = require('../models');

const appointmentData = [
  {
    date: '2023-12-25',
    time: '17:00:00',
    employee_id: 1,
    customer_id: 1,
    notes: null,
  },
  {
    date: '2024-01-02',
    time: '16:45:00',
    employee_id: 2,
    customer_id: 3,
    notes: 'lorem ipsum',
  },
  {
    date: '2024-01-05',
    time: '15:30:00',
    employee_id: 3,
    customer_id: 2,
    notes: null,
  },
  {
    date: '2024-01-07',
    time: '16:11:00',
    employee_id: 4,
    customer_id: 1,
    notes: null,
  },
];

const seedAppointments = () => Appointment.bulkCreate(appointmentData);

module.exports = seedAppointments;
