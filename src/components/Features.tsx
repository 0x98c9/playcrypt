import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Copy, Smartphone } from 'lucide-react';

const features = [
	{
		icon: Shield,
		title: 'Secure Encryption',
		description:
			'Your text is converted using a secure emoji mapping system that keeps your messages private and fun.',
	},
	{
		icon: Zap,
		title: 'Lightning Fast',
		description:
			'Instant conversion between text and emojis with real-time processing and immediate results.',
	},
	{
		icon: Copy,
		title: 'Easy Copying',
		description:
			'One-click copy functionality to quickly share your encrypted emoji messages anywhere.',
	},
	{
		icon: Smartphone,
		title: 'Mobile Friendly',
		description:
			'Fully responsive design that works perfectly on all devices, from desktop to mobile.',
	},
];

const Features = () => {
	return (
		<section className="py-12 sm:py-16 md:py-20 bg-muted/30">
			<div className="container px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 sm:mb-12 md:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
						Why Choose Playcrypt?
					</h2>
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
						Discover the features that make Playcrypt the perfect tool for fun and
						secure text encryption.
					</p>
				</div>

				<div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="text-center hover:glow-effect transition-all duration-300 h-full shadow-lg hover:shadow-xl border-2 hover:border-primary/20"
						>
							<CardHeader className="pb-4 sm:pb-6">
								<div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 hover:scale-110">
									<feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
								</div>
								<CardTitle className="text-lg sm:text-xl md:text-2xl">
									{feature.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0 px-4 sm:px-6">
								<p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
