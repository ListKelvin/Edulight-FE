'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { UserValidation } from '@/validations/GuestbookValidation';

type IUserFormProps =
  | {
      edit: true;
      id: number;
      defaultValues: z.infer<typeof UserValidation>;
      onValid: SubmitHandler<z.infer<typeof UserValidation>>;
    }
  | {
      edit?: false;
      onValid: SubmitHandler<z.infer<typeof UserValidation>>;
    };

const UserForm = (props: IUserFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: props.edit ? props.defaultValues : undefined,
  });
  const router = useRouter();
  const t = useTranslations('GuestbookForm');

  const handleCreate = handleSubmit(async (data) => {
    await props.onValid(data);

    reset();
    router.refresh();
  });

  return (
    <form onSubmit={handleCreate}>
      <div className="mt-3">
        <label
          className="text-sm font-bold text-gray-700"
          htmlFor={`body${props.edit ? `-${props.id}` : ''}`}
        >
          email
          <input
            id={`body${props.edit ? `-${props.id}` : ''}`}
            className="mt-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
            {...register('email')}
          />
        </label>
        <label
          className="text-sm font-bold text-gray-700"
          htmlFor={`body${props.edit ? `-${props.id}` : ''}`}
        >
          username
          <input
            id={`body${props.edit ? `-${props.id}` : ''}`}
            className="mt-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
            {...register('username')}
          />
        </label>{' '}
        <label
          className="text-sm font-bold text-gray-700"
          htmlFor={`body${props.edit ? `-${props.id}` : ''}`}
        >
          birthdate
          <input
            id={`body${props.edit ? `-${props.id}` : ''}`}
            className="mt-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
            {...register('birthdate')}
          />
        </label>
        {errors.email?.message && (
          <div className="my-2 text-xs italic text-red-500">
            {errors.email?.message}
          </div>
        )}
      </div>

      <div className="mt-5">
        <button
          className="rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300/50"
          type="submit"
        >
          {t('save')}
        </button>
      </div>
    </form>
  );
};

export { UserForm };
