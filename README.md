# swe432_doctor_appointment

Collaborators: Kien Nguyen, Pyoung Kang Kim

Project Description

     This project will create a web application that allow clients to make an
     appointment for a medical service with a group of doctors and for
     doctors to keep track of their daily schedule.

  Clients

     [1] To make an appointment, a client will select a date and the type of
     health issue, then pick the name of the physician/doctor he/she wants.
     The program will diplay a list of services that the doctor/physician
     provides, along with the cost and the time available for the client's
     selected date.

     [2] The client picks the service he needs, then uses his/her phone or
     email to confirm his decision. The web program will send the
     confirmation to the client's email or through a text message.

     [3] The client can search their appointments page to check their
     appointment. The web program will email or text the client a reminder
     when the appointment is a day away.

     [4] The client can later log into their account and CANCEL or MOVE their
     appointment schedule.

  Doctor/Physicians.

     [1] Doctors can log in to check their schedule. After logging in, the
     doctor can either VIEW their schedule on particular date, or CANCEL or
     request to MOVE a client's appointment. In case of moving, client will
     receive a notification and need to confirm with the new schedule so it
     can be effective.

     [2] Doctors can also ADD/REMOVE/UPDATE any other schedule (that they
     received outside the program) manually.

     [3] Doctors can also turn on/off their reminder function.

Project requirements

     This project will use D3js to add some visual effects on presenting a
     calendar and list of schedule for clients and doctors. It will also use
     either a Texting API such as "Textingly", or an email Validation API
     such as "Email Hippo Email Validation" to verify/remind the client for
     their appointment. The webapp also will use a database on the server
     side to store important schemas and to render appropriate information
     such as the doctor information or new appointments onto the client side.

