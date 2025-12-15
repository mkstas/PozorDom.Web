'use client';

import { redirect } from 'next/navigation';
import type { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { userService } from '@/entities/user';
import { UiButton, UiForm } from '@/shared/components';
import { ROUTES } from '@/shared/config';

interface Props {
  className?: string;
}

interface LoginData {
  phoneNumber: string;
}

export const LoginForm: FC<Props> = ({ className }) => {
  const { control, handleSubmit, setError } = useForm<LoginData>({ mode: 'onChange' });

  const onSubmitForm = async (formData: LoginData) => {
    const phoneNumber = formData.phoneNumber.replace(/[^\d+]/g, '');
    const res = await userService.login(phoneNumber);

    if (res.ok) {
      redirect(ROUTES.HOME);
    } else {
      setError('phoneNumber', { message: 'Призошла ошибка входа' });
    }
  };

  return (
    <UiForm className={className} onSubmit={handleSubmit(onSubmitForm)}>
      <Controller
        name='phoneNumber'
        control={control}
        defaultValue=''
        rules={{
          required: 'Номер телефона обязателен',
          validate: value =>
            value.replace(/\D/g, '').length === 11 || 'Введите корректный номер телефона',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className='grid'>
            <label htmlFor='phone_number' className='pb-1 text-sm font-medium'>
              Номер телефона
            </label>
            <IMaskInput
              id='phone_number'
              className='rounded-xl bg-gray-700/50 px-4 py-2 text-white outline-0 placeholder:text-gray-500 focus:outline-1 focus:outline-amber-500'
              mask='+7 (000) 000-00-00'
              dispatch={(appended, dynamicMasked) => {
                (dynamicMasked.value + appended).replace(/\D/g, '');
                return dynamicMasked.compiledMasks[0];
              }}
              placeholder='+7 ( ___ ) ___ - __ - __'
              value={value}
              onAccept={value => onChange(value)}
            />
            {error && (
              <span className='mt-1 text-sm font-medium text-rose-500'>{error.message}</span>
            )}
          </div>
        )}
      />
      <UiButton type='submit' className='mt-2 w-full'>
        Войти
      </UiButton>
    </UiForm>
  );
};
