import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  return NextResponse.json({
    user: 'Tejapalamani',
    mesg: 'Next backend is working is fine!',
  });
}
