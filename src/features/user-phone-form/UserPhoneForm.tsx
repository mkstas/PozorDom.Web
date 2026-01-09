'use client';

import type { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { userService } from '@/services/user.service';
import { cn, UiButton, UiForm } from '@/shared/components';

interface UserPhoneData {
  phoneNumber: string;
}

interface Props extends UserPhoneData {
  className?: string;
}

export const UserPhoneForm: FC<Props> = ({ className, phoneNumber }) => {
  const { control, handleSubmit } = useForm<UserPhoneData>({
    mode: 'onChange',
  });

  const onSubmitForm = async (formData: UserPhoneData) => {
    const phoneNumber = formData.phoneNumber.replace(/[^\d+]/g, '');
    const res = await userService.updatePhone(phoneNumber);

    if (res.ok) {
      // toast implementation
    }
  };

  return (
    <UiForm
      className={cn('flex flex-col gap-3 md:flex-row md:items-center', className)}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <Controller
        name='phoneNumber'
        control={control}
        defaultValue={phoneNumber}
        rules={{
          required: 'Номер телефона обязателен',
          validate: value =>
            value.replace(/\D/g, '').length === 11 || 'Введите корректный номер телефона',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className='grid flex-1'>
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
            {error && <div className='mt-1 text-sm font-medium text-rose-500'>{error.message}</div>}
          </div>
        )}
      />
      <UiButton type='submit'>Сохранить</UiButton>
    </UiForm>
  );
};
