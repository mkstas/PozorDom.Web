import type { Metadata } from 'next';
import { UiButton, UiForm, UiInput, UiSheet } from '@/shared/ui';
import { UiLogoBadge } from '@/shared/ui/ui-logo-badge/ui-logo-badge';
import { UiLogo } from '@/shared/ui/ui-logo/ui-logo';

export const metadata: Metadata = {
  title: 'Позор Дом | Вход',
};

export default function LoginPage() {
  return (
    <div className='w-full max-w-md space-y-8'>
      <UiLogo />
      <div className='flex justify-center'>
        <UiLogoBadge />
      </div>
      <UiSheet className='p-8'>
        <h1 className='mb-2 text-center text-2xl font-bold text-white'>Добро пожаловать!</h1>
        <p className='mb-6 text-center text-sm text-gray-400'>
          Введите ваш номер телефона для входа
        </p>
        <UiForm>
          <UiInput
            label='Номер телефона'
            id='phone_number'
            name='phone'
            placeholder='+7 (900) 000-00-00'
            autoComplete='tel'
          />
          <UiButton type='submit' className='mt-2 w-full'>
            Войти
          </UiButton>
        </UiForm>
      </UiSheet>
      <div className='mx-auto max-w-sm text-center text-sm text-gray-400'>
        Нажимая «Войти», вы соглашаетесь с условиями использования и политикой конфиденциальности.
      </div>
    </div>
  );
}
