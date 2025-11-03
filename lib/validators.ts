import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  businessType: z.string().min(1, 'Please select your business type'),
  callVolume: z.string().min(1, 'Please select your monthly call volume'),
  message: z.string().min(10, 'Please tell us more about your needs')
})

export type ContactFormData = z.infer<typeof contactSchema>
