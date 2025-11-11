import { LeadForm } from '@/components/forms/LeadForm';
import { ROICalculator } from '@/components/ROICalculator';
import { Section } from '@/components/layout/Section';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { getCaseStudies } from '@/lib/sanity';

export const metadata = {
  title: 'Voor Horeca',
  description: 'Operational excellence voor bars, hotels en podia met ready-to-serve cocktails.'
};

export default async function HorecaPage() {
  const cases = await getCaseStudies();

  return (
    <div className="space-y-16">
      <Section kicker="Horeca" title="Boost service, verlaag kosten" description="Onze blends zijn ontwikkeld voor hoge volumes met minimale training.">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <ROICalculator />
            <Modal
              trigger={
                <Button variant="ghost" className="w-full">
                  Bekijk ROI uitleg
                </Button>
              }
              title="Hoe rekenen we?"
              description="Op basis van huidige serve-tijd, volume per avond en uurloon staff."
            >
              <p className="text-sm text-white/70">
                We gebruiken gemiddeld 25 avonden per maand en rekenen 10 seconden leakage voor garnishes. Pas de waarden aan in de calculator om je eigen scenario te bouwen.
              </p>
            </Modal>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <h3 className="font-serif text-3xl">Vraag demo / sample</h3>
            <p className="mt-2 text-sm text-white/70">Binnen 24 uur plannen we een tasting in je venue.</p>
            <LeadForm />
          </div>
        </div>
      </Section>

      <Section kicker="Cases" title="Bewijs in operatie">
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((caseStudy) => (
            <CaseStudyCard key={caseStudy._id} title={caseStudy.title} body={caseStudy.body ?? ''} metrics={caseStudy.metrics} logo={caseStudy.logo} />
          ))}
        </div>
      </Section>
    </div>
  );
}
