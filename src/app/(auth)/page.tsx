import type { Metadata } from 'next';
import { LoginForm } from '@/features/login-form';
import { UiLogo, UiLogoBadge, UiSheet } from '@/shared/ui';

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
        <LoginForm />
      </UiSheet>
      <div className='mx-auto max-w-sm text-center text-sm text-gray-400'>
        Нажимая «Войти», вы соглашаетесь с условиями использования и политикой конфиденциальности.
      </div>
    </div>
  );
}
