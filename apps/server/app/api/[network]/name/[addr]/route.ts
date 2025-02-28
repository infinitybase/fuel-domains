import { graphqlClient } from '@/services/graphql';
import { Address } from 'fuels';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const [, network, , addr] = req.nextUrl.pathname
    .split('/')
    .filter((a) => !!a);

  try {
    const { data } = await graphqlClient.sdk.name({
      address: Address.fromString(addr).toB256(),
      network: network.toUpperCase(),
    });

    const record = data.Records.at(0);
    return NextResponse.json({ name: record?.name ?? null });
  } catch (e) {
    return NextResponse.json(
      // @ts-ignore
      { error: e?.message ?? 'Internal Error' },
      { status: 400 }
    );
  }
}
