import React, { useEffect, useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container';
import H2 from './typography/H2';
import Paragraph from './typography/Paragraph';
import FaqItem from './FaqItem';
import { useRouter } from 'next/router';

const FaqSection = ({ data, mailId, revamp = false }) => {
  const [region, setRegion] = useState('us');
  const router = useRouter();

  useEffect(() => {
    const locale = router?.locale;
    if (locale === 'en-GB') {
      setRegion('uk');
    } else if (locale === 'en-AU') {
      setRegion('au');
    } else {
      setRegion('us');
    }
  }, [router?.locale]);

  const getContactEmail = mailId;

  return (
    <Section className="py-sm md:py-md pb-8 scroll-smooth scroll-m-16" id="faq">
      <Container>
        <div className={`flex ${revamp ? 'flex-col' : 'flex-col md:flex-row'} gap-10 lg:gap-20 w-full`}>
          <div className="flex justify-center w-full max-w-[320px] md:sticky top-28 self-start">
            <div className={`flex flex-col w-full ${revamp ? 'text-center' : 'text-left'} gap-4`}>
              <H2>Frequently Asked Questions</H2>
              <Paragraph>
                For queries contact 
                <a href={`mailto:${getContactEmail}`} className="text-vs-blue ml-1">
                  {getContactEmail}
                </a>
              </Paragraph>
            </div>
          </div>
          
          {/* FAQ Items Section */}
          <div className={`flex justify-center flex-grow max-w-[830px] ${revamp ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : ''}`}>
            <div className="flex flex-col w-full">
              {data?.map((faq, index) => (
                <FaqItem 
                  key={faq?._id}
                  index={index}
                  question={faq.question} 
                  answer={faq.answer} 
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FaqSection;
