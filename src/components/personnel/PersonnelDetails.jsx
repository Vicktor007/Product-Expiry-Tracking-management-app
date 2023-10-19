// import React from "react";

// export default function PersonalDetails({ selectedPerson }) {
//   const { first_name, last_name, date_of_birth, yearly_leave_days, requested_leave_days, remaining_leave_days } =
//     selectedPerson;
//   return (
//     <section>
//       <h2 className="alert alert-accept ">
//         {first_name} {last_name}
//       </h2>
//       <div className="card">
//         <h2 className="fs-md">Personnel details</h2>
//         <div className="card-text">
//           <p>Date of birth: {date_of_birth}</p>
//           <p>Age: {calculateAge(JSON.stringify(date_of_birth))}</p>
//           <p>Total leave days: {yearly_leave_days}</p>
//           <p>Requested leave days:{requested_leave_days}</p>
//           <p>Remaining leave days:{remaining_leave_days}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Utility function

// // function calculateAge(dateOfBirth) {
// //   const today = new Date();
// //   const birthDate = new Date(dateOfBirth);
// //   let age = today.getFullYear() - birthDate.getFullYear();
// //   const month = today.getMonth() - birthDate.getMonth();
// //   if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
// //     age--;
// //   }
// //   return age;
// // }



// function calculateAge(dateOfExpiry) {
//   const today = new Date();
//   const expiryDate = new Date(dateOfExpiry);
//   let years = expiryDate.getFullYear() - today.getFullYear();
//   let months = expiryDate.getMonth() - today.getMonth();
//   let days = expiryDate.getDate() - today.getDate();

//   if (days < 0) {
//     months--;
//     days += new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
//   }

//   if (months < 0) {
//     years--;
//     months += 12;
//   }

//   if (years < 0 || (years === 0 && months < 0) || (years === 0 && months === 0 && days < 0)) {
//     return "expired";
//   } else {
//     return { years, months, days };
//   }
// }

// function calculateAge(dateOfExpiry) {
//   const today = new Date();
//   const expiryDate = new Date(dateOfExpiry);
//   let timeDiff = expiryDate.getTime() - today.getTime();
//   let days = Math.ceil(timeDiff / (1000 * 3600 * 24));
//   let years = Math.floor(days / 365);
//   days -= years * 365;
//   let months = Math.floor(days / 30);
//   days -= months * 30;

//   if (timeDiff < 0) {
//     return "expired";
//   } else {
//     return { years, months, days };
//   }
// }



import React from "react";

// function calculateAge(dateOfExpiry) {
//   const today = new Date();
//   const expiryDate = new Date(dateOfExpiry);
//   let timeDiff = expiryDate.getTime() - today.getTime();
//   let days = Math.ceil(timeDiff / (1000 * 3600 * 24));
//   let years = Math.floor(days / 365);
//   days -= years * 365;
//   let months = Math.floor(days / 30);
//   days -= months * 30;

//   if (timeDiff < 0) {
//     return "expired";
//   } else {
//     return { years, months, days };
//   }
// }

// export default function PersonalDetails({ selectedPerson }) {
//   const { first_name, last_name, date_of_birth, yearly_leave_days, requested_leave_days, remaining_leave_days } =
//     selectedPerson;
//   const age = calculateAge(JSON.stringify(date_of_birth));
//   const remainingDays = calculateAge(JSON.stringify(remaining_leave_days));
  
//   return (
//     <section>
//       <h2 className="alert alert-accept ">
//         {first_name} {last_name}
//       </h2>
//       <div className="card">
//         <h2 className="fs-md">Personnel details</h2>
//         <div className="card-text">
//           <p>Date of birth: {date_of_birth}</p>
//           <p>Age: {age === "expired" ? "expired" : `${age.years} years, ${age.months} months, and ${age.days} days`}</p>
//           <p>Total leave days: {yearly_leave_days}</p>
//           <p>Requested leave days:{requested_leave_days}</p>
//           <p>Remaining leave days: {remainingDays === "expired" ? "expired" : `${remainingDays.years} years, ${remainingDays.months} months, and ${remainingDays.days} days`}</p>
//         </div>
//       </div>
//     </section>
//   );
// }


function calculateAge(dateOfExpiry) {
  const today = new Date();
  const expiryDate = new Date(dateOfExpiry);
  let timeDiff = expiryDate.getTime() - today.getTime();
  let days = Math.ceil(timeDiff / (1000 * 3600 * 24));
  let years = Math.floor(days / 365);
  days -= years * 365;
  let months = Math.floor(days / 30);
  days -= months * 30;

  if (timeDiff < 0) {
    return "expired";
  } else {
    return { years, months, days };
  }
}

export default function PersonalDetails({ selectedPerson }) {
  const { first_name, last_name, date_of_birth, yearly_leave_days, requested_leave_days, remaining_leave_days } =
    selectedPerson;
  const age = calculateAge(JSON.stringify(date_of_birth));
  // const remainingDays = calculateAge(JSON.stringify(remaining_leave_days));
  
  return (
    <section>
      <h2 className="alert alert-accept ">
        {first_name} {last_name}
      </h2>
      <div className="card">
        <h2 className="fs-md">Personnel details</h2>
        <div className="card-text">
          <p>Date of Manufacture: {date_of_birth}</p>
          <p>Age: {age === "expired" ? "expired" : `${age.years} years, ${age.months} months, and ${age.days} days`}</p>
          {/* <p>Remaining leave days: {remainingDays.years} years, {remainingDays.months} months, and {remainingDays.days} days</p> */}
        
          
          {/* <p>Total leave days: {yearly_leave_days}</p>
          <p>Requested leave days:{requested_leave_days}</p> */}
          </div>
      </div>
    </section>
  );
}

