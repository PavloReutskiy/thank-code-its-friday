'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  className: string;
};

const validationSchema = Yup.object({
  email: Yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export const SubscribeForm: FC<Props> = ({ className }): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(
        values, null, 2,
      ));
    },
  });

  return (
    <>
      <h3 className=''>Explore More with Me</h3>
      <p>Dive into the dev world with me.</p>
      <form onSubmit={formik.handleSubmit} className={className}>
        <TextField
          sx={{
            height: '3.5rem',
            fontFamily: 'Roboto Condensed',
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '1.25rem',
            },
            '& .MuiInputBase-input': {
              fontFamily: 'Roboto Condensed',
            },
          }}
          fullWidth
          id="email"
          name="email"
          label="E-mail"
          value={formik.values.email}

          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button
          className="custom-button"
          sx={{
            '&.custom-button': {
              bgcolor: '#D0E3F7',
              color: '#000',
              fontFamily: 'Roboto Condensed',
              textTransform: 'capitalize',
              height: '3.5rem',
              borderRadius: '1.25rem',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              fontSize: '1rem',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'primary.main',
                color: '#fff',
              },
            },
          }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Subscribe
        </Button>
      </form>
    </>
  );
};
