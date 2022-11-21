import * as yup from 'yup';

const EmployeeSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(6, 'First Name must be at least 6 characters')
    .max(10, 'First Name must be at most 10 characters')
    .required('First Name is a required field')
    .matches(/^[a-zA-Z]+$/, 'Invalid first name'),
  last_name: yup
    .string()
    .min(6, 'Last Name must be at least 6 characters')
    .max(10, 'Last Name must be at most 10 characters')
    .required('Last Name is a required field')
    .matches(/^[a-zA-Z]+$/, 'Invalid last name'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is a required field'),
  number: yup
    .string()
    .min(12, 'Phone Number must be at least 12 characters')
    .max(12, 'Phone Number must be at most 12 characters')
    .required('Phone Number is a required field')
    .matches(
      /^(?:\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/,
      'Invalid phone number'
    ),
  gender: yup.string().required('Gender is a required field'),
});

export default EmployeeSchema;
