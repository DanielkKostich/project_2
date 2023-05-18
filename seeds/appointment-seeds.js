const { Appointment } = require('../models');

const appointmentData = [
  {
    date: '2023-12-25',
    time: '17:00:00',
    empid: 1,
    cusid: 1,
    notes: null,
  },
  {
    date: '2024-01-02',
    time: '16:45:00',
    empid: 0,
    cusid: 0,
    notes: 'lorem ipsum',
  },
  {
    date: '2024-01-05',
    time: '15:30:00',
    empid: 0,
    cusid: 1,
    notes: null,
  },
  {
    date: '2024-01-07',
    time: '16:11:00',
    empid: 0,
    cusid: 1,
    notes: null,
  },
];

const seedAppointments = () => Appointment.bulkCreate(appointmentData);

module.exports = seedAppointments;
