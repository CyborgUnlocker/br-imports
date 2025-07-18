import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Aqui você implementaria a lógica para processar o webhook do Stripe
  // Por exemplo, verificar a assinatura do webhook, atualizar o status do pedido no Supabase, etc.
  console.log('Webhook Stripe recebido!');
  const body = await req.text(); // Webhooks geralmente enviam texto ou JSON
  console.log(body);

  return NextResponse.json({ received: true }, { status: 200 });
}
