import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest';
import { RegisterForm } from './index';
import * as services from '@/services';
import * as nextAuth from 'next-auth/react';
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: mockPush }),
}));
vi.mock('next-auth/react', () => ({
  useSession: () => ({
    data: null,
    status: 'unauthenticated',
  }),
}));
vi.mock('@/services', () => ({
  adminRegister: vi.fn(),
}));
describe('RegisterForm unauthenticated user', () => {
  it('рендерится с полями и кнопкой', () => {
    render(<RegisterForm />);
    expect(
      screen.getByText('Регистрация пользователя с ролью admin'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /зарегистрироваться/i }),
    ).toBeInTheDocument();
  });

  it('пустое поле логин, так как нет сессии', () => {
    render(<RegisterForm />);
    const input = screen.getByPlaceholderText(
      /somename@domain.ru/i,
    ) as HTMLInputElement;
    expect(input.value).toBe('');
  });

  it('submit формы невозможен, так как отсутствует сессия', async () => {
    const adminRegisterMock = vi
      .spyOn(services, 'adminRegister')
      .mockRejectedValue(new Error('Ошибка регистрации'));

    render(<RegisterForm />);
    fireEvent.change(screen.getByPlaceholderText(/somename@domain.ru/i), {
      target: { value: 'test@mail.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/^пароль$/i), {
      target: { value: 'Password1' },
    });
    fireEvent.change(screen.getByPlaceholderText(/повтор пароля/i), {
      target: { value: 'Password1' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /зарегистрироваться/i }),
    );

    await waitFor(() => {
      expect(adminRegisterMock).toHaveBeenCalledWith({
        login: 'test@mail.com',
        password: 'Password1',
      });
      expect(mockPush).not.toHaveBeenCalledWith();
      expect(
        screen.getByText('Ошибка регистрации. Попробуйте еще раз'),
      ).toBeInTheDocument();
    });
  });
});

describe('RegisterForm authenticated user', () => {
  beforeEach(() => {
    vi.spyOn(nextAuth, 'useSession').mockReturnValue({
      data: { user: { email: 'test_email@gmail.com' } },
      status: 'authenticated',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
  });
  afterEach(() => {
    vi.restoreAllMocks();
    mockPush.mockReset();
  });
  it('рендерится с полями и кнопкой', () => {
    render(<RegisterForm />);
    expect(
      screen.getByText('Регистрация пользователя с ролью admin'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /зарегистрироваться/i }),
    ).toBeInTheDocument();
  });

  it('поле логин заполнено, так как есть сессия', () => {
    render(<RegisterForm />);
    const input = screen.getByPlaceholderText(
      /somename@domain.ru/i,
    ) as HTMLInputElement;
    expect(input.value).toBe('test_email@gmail.com');
  });

  it('submit формы возможен, так как присутствует сессия', async () => {
    const adminRegisterMock = vi
      .spyOn(services, 'adminRegister')
      .mockResolvedValue({});

    render(<RegisterForm />);
    const pswField1 = screen.getByPlaceholderText(/^пароль$/i);
    const pswField2 = screen.getByPlaceholderText(/повтор пароля/i);
    const submitBtn = screen.getByRole('button', {
      name: /зарегистрироваться/i,
    });
    fireEvent.change(pswField1, {
      target: { value: 'Password1' },
    });
    fireEvent.change(pswField2, {
      target: { value: 'Password1' },
    });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(adminRegisterMock).toHaveBeenCalledWith({
        login: 'test_email@gmail.com',
        password: 'Password1',
      });
      expect(mockPush).toHaveBeenCalledWith('/');
      expect(
        screen.queryByText('Ошибка регистрации. Попробуйте еще раз'),
      ).not.toBeInTheDocument();
    });
  });
});
