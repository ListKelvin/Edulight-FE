import { z } from 'zod';

export const UserValidation = z.object({
  username: z.string().min(1),
  email: z.string().min(1),
  birthdate: z.string().min(1),
});

export const EditGuestbookValidation = z.object({
  id: z.coerce.number(),
  username: z.string().min(1),
  body: z.string().min(1),
});

export const DeleteGuestbookValidation = z.object({
  id: z.coerce.number(),
});
