import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { CartItem } from '@/types/index';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { items, success_url, cancel_url } = body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'boleto'],
    mode: 'payment',
    line_items: items.map((i: CartItem) => ({
      price_data: {
        currency: 'brl',
        product_data: { name: i.name, images: [i.images[0]] },
        unit_amount: i.price,
      },
      quantity: i.qty,
    })),
    success_url,
    cancel_url,
    shipping_address_collection: { allowed_countries: ['BR'] },
  });

  return NextResponse.json({ id: session.id });
}
