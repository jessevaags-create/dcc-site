import { NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string(),
  role: z.string().optional(),
  country: z.string().optional(),
  message: z.string(),
  honeypot: z.string().optional()
});

export async function POST(request: Request) {
  const json = await request.json();
  const data = leadSchema.parse(json);
  if (data.honeypot) {
    return NextResponse.json({ success: true });
  }
  console.log('Lead captured', data);
  // Example to forward to CRM webhook:
  // await fetch('https://hooks.pipedrive.com/api/webhook', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // });
  return NextResponse.json({ success: true });
}
