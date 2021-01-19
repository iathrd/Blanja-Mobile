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
