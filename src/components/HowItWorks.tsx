import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Lock, Unlock } from 'lucide-react';

const steps = [
	{
		icon: Lock,
		title: 'Enter Your Text',
		description: 'Type or paste the text you want to encrypt into the input field.',
		emoji: '📝'
	},
	{
		icon: ArrowRight,
		title: 'Convert to Emojis',
		description: 'Click the convert button to transform your text into a secret emoji code.',
		emoji: '🔄'
	},
	{
		icon: Unlock,
		title: 'Decrypt When Needed',
		description: 'To read an encrypted message, paste the emojis and convert them back to text.',
		emoji: '🔓'
	}
];

const HowItWorks = () => {
	return (
		<section className="py-12 sm:py-16 md:py-20">
			<div className="container px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 sm:mb-12 md:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
						How It Works
					</h2>
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
						Encrypting and decrypting messages with Playcrypt is simple and fun. Follow these steps:
					</p>
				</div>

				<div className="max-w-5xl mx-auto">
					{steps.map((step, index) => (
						<div key={index} className="mb-8 sm:mb-10 md:mb-12 last:mb-0">
							<Card className="relative hover:glow-effect transition-all duration-300 shadow-lg hover:shadow-xl border-2 hover:border-primary/20 overflow-hidden">
								<div className="absolute top-0 left-0 w-2 h-full bg-primary/70"></div>
								<CardContent className="p-6 sm:p-8 md:p-10">
									<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110">
												<step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
											</div>
										</div>
										<div className="flex-grow">
											<div className="flex items-center gap-2 mb-2 sm:mb-3">
												<span className="text-2xl sm:text-3xl md:text-4xl">{step.emoji}</span>
												<h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
													Step {index + 1}: {step.title}
												</h3>
											</div>
											<p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
												{step.description}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;