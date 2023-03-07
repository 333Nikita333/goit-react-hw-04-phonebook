// *Form using the Formik library

import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { FormBox, InputName, InputTel, Button } from './Form.styled';

const initialValues = {
  name: '',
  number: '',
};

const userSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export default function ContactForm({ onSubmit }) {
  function handleSubmit({ name, number }, { resetForm }) {
    onSubmit(name, number);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <label>
          <span>Name</span>
          <InputName type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          <span>Tel</span>
          <InputTel type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//*Vanilla Form
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { FormBox, InputName, InputTel, Button } from './Form.styled';

// export default function Form({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   function handleChange(e) {
//     const { name, value } = e.currentTarget;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         console.warn(`Field type name - ${name} not processed`);
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     onSubmit(name, number);
//     setName('');
//     setNumber('');
//   }

//   return (
//     <FormBox onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         <span>Name</span>
//         <InputName
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces.
//       For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         <span>Tel</span>
//         <InputTel
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={handleChange}
//         />
//       </label>
//       <Button type="submit">Add contact</Button>
//     </FormBox>
//   );
// }

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
