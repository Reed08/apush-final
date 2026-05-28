import { Fragment } from 'react';
import Image from 'next/image';
import HeroQRCode from './_components/HeroQRCode';
import heroImg from '../../public/hero.webp';
import orsonWellesImg from '../../public/orson-welles.webp';
import fdrImg from '../../public/FDR.webp';
import rbImg from '../../public/R&B.webp';
import mapImg from '../../public/map.webp';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const timelineEvents = [
  {
    id: 1,
    date: '1899',
    description:
      'Italian inventor Guglielmo Marconi applies theories about electromagnetic waves by telegraphing the results of the America’s Cup yacht races from the sea to a ground station',
    group: 'invention',
  },
  {
    id: 2,
    date: '1901',
    description: 'Marconi founds a commercial broadcasting company and transmits the first transatlantic signal',
    group: 'invention',
  },
  {
    id: 3,
    date: '1906',
    description:
      'Physicist Reginald Fessenden sends the first long-distance transmission of human voices rather than Morse code',
    group: 'invention',
  },
  {
    id: 4,
    date: '1907',
    description:
      'American inventor Lee De Forest invents the Audion signal detector, allowing radio waves to be significantly amplified',
    group: 'invention',
  },
  { id: 5, date: '1920', description: 'KDKA becomes the first commercial radio station', group: 'invention' },
  {
    id: 6,
    date: '1922',
    description: 'The number of licensed radio stations in the U.S. jumps from 30 to over 500 in a single year',
    group: 'invention',
  },
  {
    id: 7,
    date: '1933',
    description: 'Edwin Armstrong, another American inventor, discovers how clearer FM broadcasts can be produced',
    group: 'invention',
  },
  {
    id: 8,
    date: '1920s',
    description:
      'Radio begins standardizing American speech patterns and accents, as announcers adopt a neutral “broadcast voice” heard coast to coast',
    group: 'impacts',
  },
  {
    id: 9,
    date: '1928',
    description: 'NBC’s “National Farm and Home Hour” debuts, bringing radio to more rural audiences',
    group: 'impacts',
  },
  {
    id: 10,
    date: '1938',
    description:
      'Radio reaches an estimated 80% of American households, making it the most widely shared cultural experience in the country’s history to that point',
    group: 'impacts',
  },
  {
    id: 11,
    date: '1940',
    description: 'Families are listening to radio for more than four hours per day on average',
    group: 'impacts',
  },
];

const definingMoments = [
  {
    timeRange: 'October 30, 1938',
    title: 'Orson Welles’ War of the Worlds',
    image: orsonWellesImg,
    imagePosition: 'object-top' as string | undefined,
    audio: undefined as string | undefined,
    paragraphs: [
      'On Halloween night of 1938, a radio reproduction of H. G. Well’s fantasy War of the Worlds (1898) brought panic to America. Orson Welles, the director of this program, had been working with the Mercury Theatre to bring reenactments of plays to the radio format. Together with Mercury chief writer Howard Koch, Welles modernized this classic as a Halloween special. One of their changes was to use present tense throughout the play.',
      'Although Welles made an announcement that the program was fictional before it began, his choice to use present tense and the unfortunate overlap of the beginning of his program with another popular broadcast caused many viewers to miss the disclaimer. Therefore, as the broadcast progressed and aliens took over Manhattan, true panic set in for Americans all across the country. During the intermission, CBS had to clarify that the broadcast was, indeed, fictional.',
      'After the extravaganza, Welles claimed that its events were only possible due to the importance of radio in society. He said that people automatically believed radio speakers as a sort of objective, all-knowing voice. War of the Worlds was a test of this assessment. Even though it wasn’t meant to be more than a simple Halloween experiment, the genuine terror that it incited proved just how influential radio had become in American life.',
    ],
    pullQuote: 'the genuine terror that it incited proved just how influential radio had become in American life.',
    caption: 'Orson Welles at the microphone during the 1938 broadcast of The War of the Worlds.',
  },
  {
    timeRange: '1933–1944',
    title: 'FDR’s Fireside Chats',
    image: fdrImg,
    audio: '/clip-one-beginning-of-first-chat-march-1933.wav',
    paragraphs: [
      'President Franklin D. Roosevelt’s Fireside Chat radio broadcasts, named as such for their conversational speaking style, connected the White House to ordinary American homes as never before. Rather than delivering obviously prepared and strategic speeches, Roosevelt spoke slowly and used common words. This allowed all of America’s diverse population to receive and understand his message, as radio did not require literacy to enjoy and those who did not have a radio could still listen in to a friend or neighbor’s. Additionally, by directly broadcasting on radio, Roosevelt was able to bypass the press and prevent the misquotation of his message.',
      'Roosevelt’s first Fireside Chat, the beginning of which is attached below, addressed the banking crisis of 1933. During the New Deal, FDR addressed the nation twice a year to defend government programs, answer critics, and express encouragement. Throughout World War II, his broadcasts became even more frequent, often occurring every 3 months as Roosevelt thought it was valuable to keep the public updated on the progress of the war.',
      'Roosevelt’s Fireside Chats were extremely successful in accomplishing their goal of uniting the nation. In one year, the total number of letters and packages that the White House received increased from 800 per day to 8,000 per day. Roosevelt’s followers not only saw the Fireside Chats as a source of comfort in tough times, but also an opportunity to express their own opinions more as they felt they were seen and valued by the president. This led to Roosevelt’s record-breaking four victories in presidential elections.',
    ],
    pullQuote:
      'Roosevelt’s followers not only saw the Fireside Chats as a source of comfort in tough times, but also an opportunity to express their own opinions more as they felt they were seen and valued by the president.',
    caption:
      'President Franklin D. Roosevelt’s radio talks connected Americans to the White House in a way no medium of communication had yet allowed.',
  },
  {
    timeRange: '1940s–1950s',
    title: 'Rhythm and Blues',
    image: rbImg,
    audio: undefined as string | undefined,
    paragraphs: [
      'In the 1940s and 50s, the United States was still extremely racially segregated. The landmark civil rights legislation of the time had not yet been passed, and even in less segregated areas, whites were suspicious of Blacks and generally unwilling to indulge any of their cultural traditions.',
      'However, something extraordinary happened. Rhythm and blues (R&B) music was rooted in African American culture. Despite this, though, radio allowed even the most racially segregated populations to experience R&B. Initially, stations that featured Black singers and DJs were only given limited air time often late at night. However, new stations proved the economic viability of R&B. Black Chicago DJ Al Benson played R&B on station WGES as early as 1945, and more stations soon followed suit. Memphis-based WDIA took it a step further, moving to all-Black programming in 1948.',
      'The power of radio in shaping American culture is evident in its ability to bypass cultural barriers and bring Black R&B to diverse audiences despite segregation. Because listeners often didn’t realize that the music they were hearing was linked to Black culture, they valued the music itself rather than worrying about where it came from. This was one of radio’s strengths: linking the many facets of America together into a unified, understanding identity as a springboard for novel ideas.',
    ],
    pullQuote:
      'This was one of radio’s strengths: linking the many facets of America together into a unified, understanding identity as a springboard for novel ideas.',
    caption:
      'A live remote broadcast of the "Hoppy Adams" show on July 15, 1956, brought out people from Maryland and beyond to Carr’s Beach in Anne Arundel County, where many notable rhythm and blues musicians performed during the 1950s and 1960s. Hoppy Adams was an influential radio personality with WANN in Annapolis, Maryland, for over 40 years.',
  },
];

const citations: string[][] = [
  [
    'Henderson, Amy. "Orson Welles and the 70th Anniversary of War of the Worlds." Face-To-Face,',
    'Smithsonian National Portrait Gallery, 28 Oct. 2008,',
    'npg.si.edu/blog/orson-welles-and-70th-anniversary-war-worlds. Accessed 25 May 2026.',
  ],
  [
    'Biser, Margaret. "The Fireside Chats: Roosevelt\'s Radio Talks." The White House Historical Association, 19 Aug. 2016,',
    'www.whitehousehistory.org/the-fireside-chats-roosevelts-radio-talks. Accessed 25 May 2026.',
  ],
  [
    'Digital Public Library of America. "Connecting America: The Radio at Home." DPLA,',
    'dp.la/exhibitions/radio-golden-age/radio-homefront?item=694. Accessed 25 May 2026.',
  ],
  [
    'Public Broadcasting Service. "The Development of Radio." PBS, 2024,',
    'www.pbs.org/wgbh/americanexperience/features/rescue-development-radio/. Accessed 25 May 2026.',
  ],
  [
    'Saraswati, Ginni. "Pay Your Respects to Radio, the Ancestor of Podcasting." Rolling Stone, 31 Mar. 2022,',
    'www.rollingstone.com/culture-council/articles/pay-your-respects-to-radio-ancestor-of-podcasting-1330010/. Accessed 25 May 2026.',
  ],
  [
    'The Smithsonian. "R&B on the Airwaves: Radio." Smithsonian Folklife Festival, 2011,',
    'festival.si.edu/2011/rhythm-and-blues/rnb-on-the-airwaves-radio/smithsonian. Accessed 25 May 2026.',
  ],
];

function CitationLine({ text }: { text: string }) {
  const match = text.match(/^(.+?)\. (Accessed .+)$/);
  if (match) {
    const url = match[1];
    const accessed = match[2];
    return (
      <>
        <a
          href={`https://${url}`}
          target='_blank'
          rel='noopener noreferrer'
          className='underline underline-offset-2 hover:text-foreground transition-colors break-all'
        >
          {url}
        </a>
        {'. '}
        {accessed}
      </>
    );
  }
  return <>{text}</>;
}

function Section({
  id,
  className,
  innerClassName,
  children,
}: {
  id: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn('py-24 px-6', className)}>
      <div className={cn('max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto', innerClassName)}>{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className='font-body text-sm text-muted-foreground uppercase tracking-widest mb-4'>{children}</p>;
}

function SectionHeading({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h2 className={cn('font-display text-4xl 2xl:text-5xl text-foreground mb-8', className)}>{children}</h2>;
}

function SectionIntro({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn('font-body text-foreground leading-relaxed max-w-prose xl:text-lg 2xl:text-xl', className)}>
      {children}
    </p>
  );
}

type TimelineEventData = (typeof timelineEvents)[number];

function TimelineGroupLabel({ children }: { children: React.ReactNode }) {
  return <p className='font-body text-xs text-muted-foreground uppercase tracking-widest mb-8 pl-12'>{children}</p>;
}

function TimelineEvent({ event }: { event: TimelineEventData }) {
  return (
    <div className='relative pl-12 mb-10'>
      <div className='absolute left-2.75 top-1.5 w-2.5 h-2.5 rounded-full bg-primary' />
      <p className='font-display text-primary text-sm font-semibold'>{event.date}</p>
      <p className='font-body text-foreground leading-relaxed mt-1 xl:text-lg 2xl:text-xl'>{event.description}</p>
    </div>
  );
}

function Timeline({ groups }: { groups: { label: string; events: TimelineEventData[] }[] }) {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute top-0 bottom-0 left-4 w-px bg-border' />
      {groups.map((group, i) => (
        <Fragment key={group.label}>
          {i > 0 && <Separator className='my-14 ml-12' decorative={false} aria-label={group.label} />}
          <TimelineGroupLabel>{group.label}</TimelineGroupLabel>
          {group.events.map((event) => (
            <TimelineEvent key={event.id} event={event} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}

type MomentData = (typeof definingMoments)[number];

function DefiningMomentCard({ moment, index }: { moment: MomentData; index: number }) {
  const isReversed = index % 2 === 1;
  const textBg = index % 2 === 0 ? 'bg-background' : 'bg-card';

  return (
    // Card gives semantic grouping, data-slot hooks, and overflow-hidden clipping.
    // We strip its visual defaults so it acts as an editorial full-width band.
    <Card
      className={cn(
        'rounded-none ring-0 shadow-none gap-0 py-0',
        'flex-col border-x-0 border-t-0 border-b border-border',
        'md:flex-row md:min-h-130',
        isReversed && 'md:flex-row-reverse'
      )}
    >
      {/* Image panel — no Card slot maps to a full-height side panel */}
      <div
        className={cn(
          'flex flex-col bg-muted h-64 md:h-auto shrink-0 md:w-[45%]',
          index === 0 && 'border-l-4 border-accent'
        )}
      >
        <div className='relative flex-1'>
          <Image
            src={moment.image}
            alt={moment.caption}
            fill
            className={cn('object-cover', moment.imagePosition ?? 'object-center')}
            sizes='45vw'
          />
        </div>
        <p className='font-body text-xs xl:text-sm italic text-muted-foreground text-center px-4 py-3'>
          {moment.caption}
        </p>
      </div>

      {/* CardContent keeps data-slot="card-content" for theme hooks */}
      <CardContent className={cn('flex flex-col gap-0 px-8 py-12 md:px-12 md:py-16 flex-1', textBg)}>
        <p className='font-display text-primary text-xs uppercase tracking-widest mb-3'>{moment.timeRange}</p>
        <h3 className='font-display text-3xl text-foreground mb-8'>{moment.title}</h3>
        {moment.paragraphs.map((p, i) => (
          <p
            key={i}
            className={`font-body text-foreground leading-loose 2xl:text-lg ${i === moment.paragraphs.length - 1 ? 'mb-8' : 'mb-4'}`}
          >
            {p}
          </p>
        ))}
        {moment.audio && (
          <audio controls className='w-full mb-8'>
            <source src={moment.audio} type='audio/wav' />
          </audio>
        )}
        <blockquote className='border-l-4 border-accent pl-4 font-display italic text-accent mt-auto 2xl:text-lg'>
          {moment.pullQuote}
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const timelineGroups = [
    { label: 'Invention & Spread', events: timelineEvents.filter((e) => e.group === 'invention') },
    { label: 'General Impacts', events: timelineEvents.filter((e) => e.group === 'impacts') },
  ];

  return (
    <main>
      <section
        id='hero'
        className='relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center md:pb-20'
      >
        <Image src={heroImg} alt='Vintage radio broadcast studio' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-foreground/80' />

        <div className='relative z-10 text-center px-6 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto'>
          <div className='hidden md:flex justify-center mb-8'>
            <HeroQRCode url='https://radio.reed920.xyz' />
          </div>
          <p className='font-display text-primary text-xs uppercase tracking-widest mb-6'>
            America at 250 · Defining American Identity
          </p>
          <h1 className='font-display text-background text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight mb-8'>
            Tune In: How Radio Defined America
          </h1>
          <p className='font-body text-background/70 text-xl 2xl:text-2xl leading-relaxed max-w-2xl mx-auto'>
            Radio transformed American identity by connecting people across barriers of race, literacy, and location.
          </p>
        </div>

        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 text-background/50 animate-bounce text-2xl select-none'>
          ↓
        </div>
      </section>

      <Section id='background'>
        <SectionLabel>Background</SectionLabel>
        <SectionHeading>A Nation Tunes In</SectionHeading>
        <SectionIntro className='mb-16'>
          Radio’s rise was extraordinary. Not only did it spread uniquely fast, but it was also surprisingly total.
          Radio reached Americans in a way previous mediums like newspapers and telegraphs never could; radio didn’t
          require literacy, a city address, or a subscription to connect the nation.
        </SectionIntro>
        <Timeline groups={timelineGroups} />
      </Section>

      {/* No Section wrapper — the cards must break out of the content column */}
      <section id='defining-moments' className='pt-24 border-t border-border'>
        <div className='max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-6 mb-16'>
          <SectionLabel>Defining Moments</SectionLabel>
          <SectionHeading>The Moments That Shaped America</SectionHeading>
          <SectionIntro>
            The growth of radio wasn’t simply a record of history; its impacts were felt in everyday society. The key
            moments in radio’s history not only advanced the technology, but changed what it meant to be American.
          </SectionIntro>
        </div>
        <div>
          {definingMoments.map((moment, i) => (
            <DefiningMomentCard key={i} moment={moment} index={i} />
          ))}
        </div>
      </section>

      <Section id='the-argument' className='bg-muted'>
        <SectionLabel>The Argument</SectionLabel>
        <SectionHeading className='text-5xl 2xl:text-6xl mb-12 leading-tight'>
          Why Radio Defined American Identity
        </SectionHeading>

        <p className='font-body text-foreground leading-loose xl:text-lg 2xl:text-xl mb-6'>
          When examining radio’s history and defining moments, one key thread jumps out. Throughout history, radio has
          dissolved barriers. Radio reached everyone simultaneously regardless of literacy, location, or race, and that
          caused Americans to develop a more unified national identity together.
        </p>

        <p className='font-body text-foreground leading-loose xl:text-lg 2xl:text-xl mb-6'>
          Roosevelt’s Fireside Chats allowed the president to bypass the media and speak directly to every citizen
          equally. This unified Americans in a never-before-seen way, drawing them closer to their executive than ever
          before. Building on this momentum, radio propelled the rhythm and blues music of Black culture into white
          living rooms despite a divided country. Racial segregation was still running rampant, yet radio’s unique
          quality of a faceless, naturally credible voice allowed R&B to spread without people even realizing its
          heritage, bringing America’s divided groups closer together. Finally, Orson Welles’s iconic performance of War
          on the Worlds provided evidence of just how much trust Americans had placed in radio. Because Americans valued
          radio’s contributions to society so much, they saw its voice as a source of objective truth; so, when aliens
          attacked Manhattan in Wells’s story, real panic followed in its wake.
        </p>

        <p className='font-body text-foreground leading-loose xl:text-lg 2xl:text-xl mb-6'>
          Together, these details drive home radio’s extraordinary role in defining American identity. By connecting the
          people together despite obstacles, radio allowed for an unprecedented mixing of tradition into one unified
          culture. No other technology is quite as pivotal as radio because radio was simply so all encompassing. The
          vast majority of the population lived through the music, comedy, suspense, and reality of radio broadcasts,
          enabling them to flourish together despite their differences.
        </p>

        <Card className='mx-auto max-w-xl gap-0 py-0'>
          <div className='relative h-80 rounded-t-lg overflow-hidden'>
            <Image
              src={mapImg}
              alt='Map of radio broadcast reach across America'
              fill
              sizes='(max-width: 672px) 100vw, 672px'
              className='object-cover'
            />
          </div>
          <CardContent className='border-t border-border py-3 px-4 text-center'>
            <p className='font-body text-xs xl:text-sm italic text-muted-foreground'>
              A 1927 map of American radio stations depicts radio’s wide reach in the country.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section id='modern-legacy'>
        <SectionLabel>Modern Legacy</SectionLabel>
        <SectionHeading>The Signal That Never Died</SectionHeading>
        <SectionIntro className='leading-loose mb-6'>
          While radio itself has decreased in popularity in recent years, we still feel its roots each and every day of
          our lives. Rather than dying out, radio actually evolved; it shaped itself into podcasts, a digitized form of
          many of the successes and learnings of the traditional radio industry.
        </SectionIntro>
        <SectionIntro className='leading-loose mb-6'>
          During the internet boom of the 1990s and 2000s, technologies like sound design and broadcasting became
          increasingly digital. With the introduction of Apple’s iPod and iTunes, releasing podcasts became cheaper and
          more accessible than radio had ever been. With these developments, younger listeners often came to podcasts
          first, and radio relied on an older audience. As time moves on, this audience has continued to shrink.
        </SectionIntro>
        <SectionIntro className='leading-loose'>
          However, examining modern podcasts reveals that the core of radio is still very much alive. Some of the most
          successful podcasts gained popularity by following the formula that Welles set out with War on the Worlds:
          technological evolution, captivating dialog, and immersive storytelling. Additionally, radio and podcasts are
          both designed to be intimate and often listened to alone, and they are both some of the only mediums that
          listeners can consume while multitasking. Through this lens, it is evident that radio continues to have wide
          reaching effects on the type of content, and, more broadly, quality of our culture, to this day.
        </SectionIntro>
      </Section>

      <Section id='works-cited' className='bg-card'>
        <SectionLabel>Works Cited</SectionLabel>
        <SectionHeading className='mb-12'>Sources</SectionHeading>
        <ul className='space-y-0'>
          {citations.map((lines, i) => (
            <li key={i} className='font-body text-sm text-muted-foreground leading-loose'>
              {lines.map((line, j) => (
                <span key={j} className={cn('block', j > 0 && 'pl-8')}>
                  <CitationLine text={line} />
                </span>
              ))}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
