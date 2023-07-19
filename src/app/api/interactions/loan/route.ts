import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const response: MessageTypes.SystemMessageProps = {
    message: 'Click on the desired option below:',
    options: [
      {
        label: 'Do you want to apply for a loan?',
        href: `https://nubank.com.br/en/loans/`,
        hrefLabel: 'Click here and learn about Nubank Personal Loan!',
        content: `Nubank Personal Loan!
        First installment in up to 90 days and up to 24 months to pay, anticipation of installments with a discount, change of payment date, monitoring of installments via the Nubank app and autonomous renegotiation.`,
      },
      {
        label: 'Loan conditions',
        href: 'https://blog.nubank.com.br/como-fazer-emprestimo-no-nubank/',
        hrefLabel: 'Click here and choose the best type of Nubank loan for you!',
        content: 'The conditions for taking out a Nubank loan are having: a bank account, having pre-approved credit, and a regular CPF.',
      },
      {
        label: 'Help',
        href: 'https://blog.nubank.com.br/emprestimo-nubank-simular-contratar/',
        hrefLabel: 'Click here and learn all about the Nubank loan!',
        content: 'Learn how the whole Nubank loan process works, from contracting to paying installments. The entire process is done through the app. Before confirming, you can verify all information.',
      }
    ],
    sentBy: 'system'
  };
  return NextResponse.json(response);
}
