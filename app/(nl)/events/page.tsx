import { LeadForm } from '@/components/forms/LeadForm';
import { Section } from '@/components/layout/Section';
import { Steps } from '@/components/Steps';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { SectionHeader } from '@/components/SectionHeader';
import { getTestimonials } from '@/lib/sanity';

export const metadata = {
  title: 'Events',
  description: 'Logistiek proof cocktailservice voor festivals, corporate events en cateraars.'
};

export default async function EventsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="space-y-16">
      <Section kicker="Events" title="Volumes zonder stress">
        <SectionHeader
          title="Event pack details"
          description="Bag-in-box (5-10L) + tap of batching stations. 4°C cold chain en kwaliteitsgarantie."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6">
            <h3 className="font-serif text-3xl">Event pack</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>• 5L & 10L bag-in-box (40 of 80 serves)</li>
              <li>• Tap-setup + koeltechniek optioneel</li>
              <li>• Mocktail & low-ABV varianten</li>
              <li>• On-site training & voorraad planning</li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <h3 className="font-serif text-3xl">Leadformulier</h3>
            <LeadForm />
          </div>
        </div>
      </Section>

      <Section kicker="Proces" title="Van aanvraag tot service">
        <Steps
          items={[
            { title: 'Intake', description: 'Volume, smaken en logistieke eisen bepalen.' },
            { title: 'Pilot batch', description: 'Samples + shelf-life test binnen 72u.' },
            { title: 'On-site support', description: 'Crew on-boarding en monitoring tijdens event.' }
          ]}
        />
      </Section>

      <Section kicker="Feedback" title="Event testimonials">
        <TestimonialCarousel items={testimonials} />
      </Section>
    </div>
  );
}
