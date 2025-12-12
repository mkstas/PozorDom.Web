import type { Metadata } from 'next';
import { UiButton, UiForm, UiInput, UiSheet } from '@/shared/ui';
import { UiLogo } from '@/shared/ui/ui-logo/ui-logo';

export const metadata: Metadata = {
  title: 'Позор Дом | Вход',
};

export default function LoginPage() {
  return (
    <div className='space-y-8'>
      <UiLogo />
      <UiSheet>
        <UiForm className='grid gap-y-3'>
          <UiInput
            label='Номер телефона'
            id='phone_number'
            error='error'
            placeholder='+7 (900) 000-00-00'
          />
          <UiButton>Войти</UiButton>
        </UiForm>
      </UiSheet>
    </div>
  );
}
