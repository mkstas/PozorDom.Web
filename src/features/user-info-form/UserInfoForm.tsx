'use client';

import type { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { userService } from '@/services/user.service';
import { cn, UiButton, UiForm, UiInput } from '@/shared/components';

interface UserInfoData {
  fullName: string;
}

interface Props extends UserInfoData {
  className?: string;
}

export const UserInfoForm: FC<Props> = ({ className, fullName = '' }) => {
  const { control, formState, handleSubmit } = useForm<UserInfoData>({
    mode: 'onChange',
  });

  const onSubmitForm = async (formData: UserInfoData) => {
    const res = await userService.updateInfo(formData.fullName);

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
        name='fullName'
        defaultValue={fullName}
        rules={{
          maxLength: {
            value: 64,
            message: 'Не более 64 символов',
          },
        }}
        render={({ field }) => (
          <UiInput
            className='flex-1'
            type='text'
            id='title'
            error={formState.errors.fullName?.message}
            {...field}
          />
        )}
      />
      <UiButton type='submit'>Сохранить</UiButton>
    </UiForm>
  );
};
