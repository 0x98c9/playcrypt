import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Smartphone, FileText, CreditCard } from 'lucide-react';

const faqs = [
  {
    icon: HelpCircle,
    question: 'Is my encrypted data secure?',
    answer: 'Yes! Playcrypt uses a unique emoji mapping system to convert your text. We never store your original text on our servers.'
  },
  {
    icon: MessageCircle,
    question: 'Can I decrypt messages from others?',
    answer: 'Absolutely! Just paste the emoji message you received into the decrypt section.'
  },
  {
    icon: Smartphone,
    question: 'Does Playcrypt work on mobile devices?',
    answer: 'Yes! Playcrypt is fully responsive and works perfectly on smartphones, tablets, and desktop computers. Encrypt and decrypt your messages on any device with a web browser.'
  },
  {
    icon: FileText,
    question: 'Are there any limits to how much text I can encrypt?',
    answer: 'While there\'s no strict character limit, we recommend keeping your messages reasonably sized for the best experience. Very large texts may take longer to process and might be unwieldy when shared.'
  },
  {
    icon: CreditCard,
    question: 'Is Playcrypt free to use?',
    answer: 'Yes! Playcrypt is completely free to use with all features available to everyone. There are no premium tiers or hidden costs.'
  }
];

const FAQ = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Get answers to the most common questions about Playcrypt
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-2 hover:glow-effect transition-all duration-300">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 last:border-0 mb-2 sm:mb-3 last:mb-0">
                    <AccordionTrigger className="text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 hover:text-primary transition-colors">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <faq.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed pb-4 sm:pb-6 pl-11 sm:pl-14">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;