// import React, { useState } from "react";


// export function Signup() {
//   const [fields, handleFieldChange] = useFormFields({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     confirmationCode: "",
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

 
//   function renderForm() {
//     return (
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <label>Email</label>
//           <FormControl
//             autoFocus
//             type="email"
//             value={fields.email}
//             onChange={handleFieldChange}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <label>Password</label>
//           <FormControl
//             type="password"
//             value={fields.password}
//             onChange={handleFieldChange}
//           />
//         </FormGroup>
//         <FormGroup controlId="confirmPassword" bsSize="large">
//           <label>Confirm Password</label>
//           <FormControl
//             type="password"
//             onChange={handleFieldChange}
//             value={fields.confirmPassword}
//           />
//         </FormGroup>
//         <LoaderButton
//           block
//           type="submit"
//           bsSize="large"
//           isLoading={isLoading}
//           disabled={!validateForm()}
//         >
//           Signup
//         </LoaderButton>
//       </form>
//     );
//   }

//   return (
//     <div className="Signup">
//       {newUser === null ? renderForm() : renderConfirmationForm()}
//     </div>
//   );
// }