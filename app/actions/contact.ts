'use server'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactFormResponse> {
  // Log the form data on the server
  console.log('Contact Form Submission:', {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    timestamp: new Date().toISOString(),
  })

  // TODO: Add actual email sending or database storage here
  // For now, just return success

  return {
    success: true,
    message: 'Mesajınız alındı! En kısa sürede size dönüş yapacağız.',
  }
}

