export const healthCareAddress= "0xC8f52FaBFB9B5b5D376099326fecAf039CC4A23E"
export const healthCareAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"patientID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"appointmentIndex","type":"uint256"}],"name":"AppointmentAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"patientID","type":"uint256"}],"name":"BillingInformationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"patientID","type":"uint256"}],"name":"ConsentFormSigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"patientID","type":"uint256"}],"name":"InsuranceInformationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"patientID","type":"uint256"}],"name":"MedicalRecordAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"patientID","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"PatientRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"patientID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prescriptionIndex","type":"uint256"}],"name":"PrescriptionAdded","type":"event"},{"inputs":[{"internalType":"uint256","name":"patientID","type":"uint256"},{"internalType":"uint256","name":"dateTime","type":"uint256"},{"internalType":"address","name":"healthcareProviderID","type":"address"},{"internalType":"string","name":"purposeOfVisit","type":"string"},{"internalType":"string","name":"notes","type":"string"}],"name":"addAppointment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientID","type":"uint256"},{"internalType":"string[]","name":"invoices","type":"string[]"},{"internalType":"string[]","name":"paymentHistory","type":"string[]"}],"name":"addBillingInformation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientID","type":"uint256"},{"internalType":"string","name":"insuranceID","type":"string"},{"internalType":"string","name":"policyNumber","type":"string"},{"internalType":"string","name":"insuranceProvider","type":"string"},{"internalType":"string[]","name":"claimsHistory","type":"string[]"}],"name":"addInsuranceInformation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientID","type":"uint256"},{"internalType":"string[]","name":"diagnosisCodes","type":"string[]"},{"internalType":"string[]","name":"treatmentHistory","type":"string[]"},{"internalType":"string[]","name":"medicationHistory","type":"string[]"},{"internalType":"string[]","name":"allergies","type":"string[]"},{"internalType":"string[]","name":"labTestResults","type":"string[]"},{"internalType":"string[]","name":"radiologyReports","type":"string[]"}],"name":"addMedicalRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientID","type":"uint256"},{"internalType":"string","name":"medicationName","type":"string"},{"internalType":"uint256","name":"dosage","type":"uint256"},{"internalType":"uint256","name":"prescriptionDate","type":"uint256"},{"internalType":"address","name":"healthcareProviderID","type":"address"}],"name":"addPrescription","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"appointments","outputs":[{"internalType":"uint256","name":"dateTime","type":"uint256"},{"internalType":"address","name":"healthcareProviderID","type":"address"},{"internalType":"string","name":"purposeOfVisit","type":"string"},{"internalType":"string","name":"notes","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"consentForms","outputs":[{"internalType":"bool","name":"dataSharingConsent","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientID","type":"uint256"}],"name":"getBillingInformation","outputs":[{"components":[{"internalType":"string[]","name":"invoices","type":"string[]"},{"internalType":"string[]","name":"paymentHistory","type":"string[]"}],"internalType":"struct HealthcareContract.BillingInformation","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientID","type":"uint256"}],"name":"getMedicalRecord","outputs":[{"components":[{"internalType":"string[]","name":"diagnosisCodes","type":"string[]"},{"internalType":"string[]","name":"treatmentHistory","type":"string[]"},{"internalType":"string[]","name":"medicationHistory","type":"string[]"},{"internalType":"string[]","name":"allergies","type":"string[]"},{"internalType":"string[]","name":"labTestResults","type":"string[]"},{"internalType":"string[]","name":"radiologyReports","type":"string[]"}],"internalType":"struct HealthcareContract.MedicalRecord","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"insuranceInformation","outputs":[{"internalType":"string","name":"insuranceID","type":"string"},{"internalType":"string","name":"policyNumber","type":"string"},{"internalType":"string","name":"insuranceProvider","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"patients","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"dateOfBirth","type":"uint256"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string","name":"addres","type":"string"},{"internalType":"string","name":"phoneNumber","type":"string"},{"internalType":"string","name":"emailAddress","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"prescriptions","outputs":[{"internalType":"string","name":"medicationName","type":"string"},{"internalType":"uint256","name":"dosage","type":"uint256"},{"internalType":"uint256","name":"prescriptionDate","type":"uint256"},{"internalType":"address","name":"healthcareProviderID","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientID","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"dateOfBirth","type":"uint256"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string","name":"addres","type":"string"},{"internalType":"string","name":"phoneNumber","type":"string"},{"internalType":"string","name":"emailAddress","type":"string"}],"name":"registerPatient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientID","type":"uint256"}],"name":"signConsentForm","outputs":[],"stateMutability":"nonpayable","type":"function"}]