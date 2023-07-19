import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const response: MessageTypes.SystemMessageProps = {
    message: 'Choose',
    options: [
      {
        label: 'Do you want to apply for a loan?',
        href: '/apply-loan',
        hrefLabel: 'Apply for a loan now!',
        content: 'Aplly for a loan',
      },
      {
        label: 'Loan conditions',
        href: '/loan-conditions',
        hrefLabel: 'Know Loan conditions',
        content: 'Loan conditions',
      },
      {
        label: 'Help',
        href: '/help',
        hrefLabel: 'Help',
        content: 'Help',
      }
    ],
    sentBy: 'system'
  };
  return NextResponse.json(response);
}
