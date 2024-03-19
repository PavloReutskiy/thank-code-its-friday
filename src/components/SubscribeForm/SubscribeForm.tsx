'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { TextField, Button } from '@mui/material';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validationSchema = Yup.object({
  email: Yup
    .string()
    .matches(emailRegex, 'Enter a valid email')
    .required('Email is required'),
});

export const SubscribeForm: FC = (): JSX.Element => {
  const t = useTranslations('Footer');

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(`${values.email} subscribed successfully!`);
      resetForm();
    },
  });

  return (
    <>
      <h3 className='font-sans text-2xl font-bold text-text_color mb-3'>{t('heading')}</h3>
      <p className='font-sans text-lg font-light text-text_color mb-4'>{t('text')}</p>
      <form onSubmit={formik.handleSubmit} className='grid grid-cols-1 gap-5 sm:grid-cols-[2fr_1fr] sm:gap-1'>
        <TextField
          sx={{
            height: '3.5rem',
            fontFamily: 'Inter',
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '1.25rem',
            },
            '& .MuiInputBase-input': {
              fontFamily: 'Inter',
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
              bgcolor: 'primary.main',
              color: '#fff',
              fontFamily: 'Inter',
              textTransform: 'capitalize',
              height: '3.5rem',
              borderRadius: '1.25rem',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              fontSize: '1rem',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              ['@media (min-width: 951px)']: {
                '&:hover': {
                  bgcolor: '#D0E3F7',
                  color: '#000',
                },
              },
            },
          }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          {t('subscribe')}
        </Button>
      </form>
    </>
  );
};
