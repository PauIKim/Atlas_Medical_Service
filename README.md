# swe432_doctor_appointment

Project description:
This project will create a web application that allow clients to make an appointment for a 
medical service with a group of doctors and for doctors to keep track of their daily schedule.

Client:
To make a appointment, a client choose a date, then pick a name of physicians/doctor he/she wants.
The program display diplay a list of service that doctor/physician can provide with cost and
the duration of time, as well as time available for the client's chosen date.

Client pick the service he needs, then using phone number to confirm his decision.  The web program then
send the confirmation to client's email (or phone) using web API.

Client can use their phone number to check their appointment. The web program will remind client when 
the appointment come.

Client can later log in to their acount using their phone number and either CANCEL or MOVE their appointment schedule.

Doctor/Physicians.
Doctors can log in using their phone number or user id to check their schedule. After log in, the doctor 
can choose either to VIEW their schedule on particular date, CANCEL or request to MOVE a client's schedule.
In case of moving, client will receive a notification and need to confirm with the new schedule so it can 
be effective.

Doctors can also update their schedule manually by logging in their accounts. 
