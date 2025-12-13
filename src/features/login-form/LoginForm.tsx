'use client';

import { redirect } from 'next/navigation';
import type { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { userService } from '@/entities/user';
import { ROUTES } from '@/shared/config';
import { UiButton, UiForm, UiInput } from '@/shared/ui';

interface Props {
  className?: string;
}

interface LoginData {
  phoneNumber: string;
}

export const LoginForm: FC<Props> = ({ className }) => {
  const { control, formState, handleSubmit, setError } = useForm<LoginData>({ mode: 'onChange' });

  const onSubmitForm = async (formData: LoginData) => {
    const res = await userService.login(formData.phoneNumber);

    if (res.ok) {
      redirect(ROUTES.HOME);
    } else {
      setError('phoneNumber', { message: 'Ошибка входа' });
    }
  };

  return (
    <UiForm className={className} onSubmit={handleSubmit(onSubmitForm)}>
      <Controller
        control={control}
        name='phoneNumber'
        defaultValue={''}
        rules={{
          required: 'Номер телефона обязателен',
          validate: value =>
            value.replace(/\D/g, '').length === 11 || 'Введите корректный номер телефона',
        }}
        render={({ field }) => (
          <UiInput
            type='text'
            label='Номер телефона'
            id='phone_number'
            placeholder='+7 (900) 000-00-00'
            autoComplete='tel'
            error={formState.errors.phoneNumber?.message}
            {...field}
          />
        )}
      />
      <UiButton type='submit' className='mt-2 w-full'>
        Войти
      </UiButton>
    </UiForm>
  );
};
