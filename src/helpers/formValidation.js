import * as Yup from 'yup';

export const changePassword = Yup.object().shape({
  oldPassword: Yup.string()
    .min(8, 'Old Password at least 8 character')
    .required('Old password is required'),
  newPassword: Yup.string()
    .min(8, 'New Password at least 8 character')
    .required('New password is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Password must match')
    .required('Repeat password is Required'),
});

export const adressSchema = Yup.object().shape({
  saveAs: Yup.string().trim().required('Save as is required'),
  recipient: Yup.string().min(4, 'To sort').required('Recipient is required'),
  adress: Yup.string()
    .trim()
    .min(20, 'Adress to sort')
    .required('Adress is required'),
  city: Yup.string().min(4, 'City to sirt').required('City is required'),
  postalCode: Yup.string()
    .min(5, 'Invalid code')
    .max(5, 'Invalid code')
    .required('Postal Code is required'),
  phoneNumber: Yup.string()
    .min(12, 'Invalid number')
    .max(13, 'Invalid number')
    .required('Phone number is required'),
});
