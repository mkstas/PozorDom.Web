'use client';

import type { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { userService } from '@/services/user.service';
import { cn, UiButton, UiForm, UiInput } from '@/shared/components';

interface UserEmailData {
  email: string;
}

interface Props extends UserEmailData {
  className?: string;
}

export const UserEmailForm: FC<Props> = ({ className, email = '' }) => {
  const { control, formState, handleSubmit } = useForm<UserEmailData>({
    mode: 'onChange',
  });

  const onSubmitForm = async (formData: UserEmailData) => {
    const res = await userService.updateEmail(formData.email);

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
        control={control}
        name='email'
        defaultValue={email}
        rules={{
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Неверный формат почты',
          },
        }}
        render={({ field }) => (
          <UiInput
            className='flex-1'
            type='text'
            id='title'
            error={formState.errors.email?.message}
            {...field}
          />
        )}
      />
      <UiButton type='submit'>Сохранить</UiButton>
    </UiForm>
  );
};
