import Image from 'next/image';

import { Section } from '@/components/layout/Section';
import { getTeam } from '@/lib/sanity';

export const metadata = {
  title: 'Over ons',
  description: 'Van bar naar bottling. Team DCC bouwt aan de toekomst van cocktails.'
};

export default async function AboutPage() {
  const team = await getTeam();

  return (
    <div className="space-y-16">
      <Section kicker="Story" title="Van bar naar bottle" description="Ons team komt uit award-winning bars en supply chain powerhouses.">
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <div key={member._id} className="rounded-[32px] border border-white/10 bg-white/5 p-6">
              <div className="relative h-48 w-full overflow-hidden rounded-3xl">
                <Image
                  src={member.photo ?? 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39'}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 font-serif text-2xl">{member.name}</h3>
              <p className="text-sm text-white/60">{member.role}</p>
              <p className="mt-2 text-sm text-white/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section kicker="Waarden" title="Wat ons drijft">
        <div className="grid gap-6 md:grid-cols-3">
          {['Smaak boven alles', 'Radicale transparantie', 'Operational care'].map((value) => (
            <div key={value} className="rounded-[32px] border border-white/10 bg-white/5 p-6">
              <h3 className="font-serif text-2xl">{value}</h3>
              <p className="mt-2 text-sm text-white/70">
                We ontwikkelen blends met eerlijke ingrediënten, meten elke batch en delen data met partners.
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
