import { CTA } from '@/components/CTA';
import { LeadForm } from '@/components/forms/LeadForm';
import { Section } from '@/components/layout/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getFaq } from '@/lib/sanity';

export const metadata = {
  title: 'Proefbox',
  description: 'Sample flight met 4 cocktails en 1 mocktail.'
};

export default async function ProefboxPage() {
  const faq = await getFaq();
  return (
    <div className="space-y-12">
      <Section kicker="Proefbox" title="5 smaken, 1 box" description="Espresso Martini, Paloma, Piña Colada, Spritz en Virgin Mule.">
        <CTA
          kicker="Limited"
          title="Bestel proefbox"
          description="€39 ex btw, incl. verzending NL."
          primary={{ label: 'Koop via Shopify', href: '/shop' }}
          secondary={{ label: 'Vraag gratis sample', href: '/contact' }}
        />
      </Section>
      <Section kicker="Lead" title="Sample aanvraag">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <LeadForm />
        </div>
      </Section>
      <Section kicker="FAQ" title="Veelgestelde vragen">
        <Accordion type="single" collapsible className="w-full rounded-[32px] border border-white/10 bg-white/5 px-6">
          {faq.slice(0, 3).map((item) => (
            <AccordionItem key={item._id} value={item._id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </div>
  );
}
