import { LeadForm } from '@/components/forms/LeadForm';
import { Section } from '@/components/layout/Section';

export const metadata = {
  title: 'Partner worden',
  description: 'Word distributie- of activatiepartner van Dutch Cocktail Club.'
};

export default function PartnerPage() {
  return (
    <Section kicker="Partners" title="Scale met ons mee" description="We zoeken bar-consultants, distributeurs en cateraars.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
        <LeadForm />
      </div>
    </Section>
  );
}
