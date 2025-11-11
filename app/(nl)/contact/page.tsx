import { LeadForm } from '@/components/forms/LeadForm';
import { Section } from '@/components/layout/Section';

export const metadata = {
  title: 'Contact',
  description: 'Neem contact op met Dutch Cocktail Club.'
};

export default function ContactPage() {
  return (
    <Section kicker="Contact" title="Plan een tasting" description="We reageren binnen 24 uur met een voorstel.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <h3 className="font-serif text-2xl">Bel of mail</h3>
          <p className="mt-2 text-sm text-white/70">+31 (0)20 123 4567</p>
          <p className="text-sm text-white/70">hi@dutchcocktailclub.com</p>
          <p className="mt-4 text-sm text-white/60">HQ: Amsterdam / fulfillment: Utrecht</p>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <LeadForm />
        </div>
      </div>
    </Section>
  );
}
