import { AccessibilityIcon } from 'lucide-react';
import type { Metadata } from 'next';
import { Rubik_Wet_Paint } from 'next/font/google';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { userService } from '@/services/user.service';
import { LoginForm } from '@/features/login-form';
import { cn, UiSheet } from '@/shared/components';
import { ROUTES } from '@/shared/config';

export const metadata: Metadata = {
  title: 'Позор Дом | Вход',
};

const rubikWetPaint = Rubik_Wet_Paint({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default async function LoginPage() {
  const jwtCookie = (await cookies()).get('very-non-secret-cookie');

  if (jwtCookie) {
    const res = await userService.getMe(jwtCookie.value);
    if (res.ok) redirect(ROUTES.HOME);
  }

  return (
    <div className='w-full max-w-md space-y-8'>
      <div className={cn(rubikWetPaint.className, 'text-center text-3xl text-rose-500')}>
        Позор Дом
      </div>
      <div className='flex justify-center'>
        <div className='rounded-full border border-rose-500 bg-rose-500/10 p-4 shadow-xl backdrop-blur-xl'>
          <AccessibilityIcon className='size-8 text-rose-500' />
        </div>
      </div>
      <UiSheet className='p-8'>
        <div className='mb-2 text-center text-2xl font-bold text-white'>Добро пожаловать!</div>
        <div className='mb-6 text-center text-sm text-gray-400'>
          Введите ваш номер телефона для входа
        </div>
        <LoginForm />
      </UiSheet>
      <div className='mx-auto max-w-sm text-center text-sm text-gray-400'>
        Нажимая «Войти», вы соглашаетесь с условиями использования и политикой конфиденциальности.
      </div>
    </div>
  );
}
