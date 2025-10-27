import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Tell us your name.'),
  email: z.string().email('We need a valid email to reach you.'),
  company: z.string().min(2, 'Add your company or initiative.'),
  message: z.string().min(12, 'Share a bit more about your vision.'),
  budget: z.string().optional()
})

export type ContactFormData = z.infer<typeof contactSchema>
