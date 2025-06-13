import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Code, Lightbulb, Users } from 'lucide-react';

const aboutPoints = [
	{
		icon: Lightbulb,
		title: 'Our Mission',
		description:
			'To make secure communication fun and accessible to everyone through creative emoji encryption that adds a playful layer to your private messages.',
	},
	{
		icon: Code,
		title: 'How We Built It',
		description:
			'Playcrypt was built using modern web technologies like React, TypeScript, and Tailwind CSS, with a focus on performance, security, and user experience.',
	},
	{
		icon: Users,
		title: "Who It's For",
		description:
			'Playcrypt is designed for anyone who wants to add a layer of privacy to their messages while having fun with emojis - from friends sharing inside jokes to privacy-conscious communicators.',
	},
	{
		icon: Heart,
		title: 'Why We Made It',
		description:
			'We believe that security doesn\'t have to be boring. Playcrypt was born from the idea that protecting your messages can be both effective and enjoyable.',
	},
];

const About = () => {
	return (
		<section className="py-12 sm:py-16 md:py-20">
			<div className="container px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 sm:mb-12 md:mb-16">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
						About Playcrypt
					</h1>
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
						The story behind our emoji encryption tool
					</p>
				</div>

				<div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
					<Card className="shadow-lg border-2">
						<CardContent className="p-6 sm:p-8 md:p-10">
							<div className="flex justify-center mb-8">
								<div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-primary/10 flex items-center justify-center">
									<span className="text-4xl sm:text-5xl md:text-6xl">🔐</span>
								</div>
							</div>

							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed text-center max-w-3xl mx-auto">
								Playcrypt began as a creative experiment to combine encryption
								with the universal language of emojis. What started as a fun
								weekend project has evolved into a tool that brings joy to secure
								communication.
							</p>

							<p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
								Our team of developers and designers are passionate about creating
								tools that make privacy accessible and enjoyable for everyone.
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
					{aboutPoints.map((point, index) => (
						<Card
							key={index}
							className="hover:glow-effect transition-all duration-300 shadow-lg hover:shadow-xl border-2 hover:border-primary/20"
						>
							<CardContent className="p-6 sm:p-8 md:p-10">
								<div className="flex flex-col items-start gap-4">
									<div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110">
										<point.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
									</div>
									<div>
										<h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
											{point.title}
										</h3>
										<p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
											{point.description}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="max-w-4xl mx-auto">
					<Card className="shadow-lg border-2">
						<CardContent className="p-6 sm:p-8 md:p-10">
							<h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
								Our Values
							</h2>

							<div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 mb-8">
								<div className="text-center">
									<div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<span className="text-2xl sm:text-3xl">🔒</span>
									</div>
									<h3 className="text-lg font-medium mb-2">Privacy First</h3>
									<p className="text-sm sm:text-base text-muted-foreground">
										We believe your messages should remain private and secure at all
										times.
									</p>
								</div>

								<div className="text-center">
									<div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<span className="text-2xl sm:text-3xl">😊</span>
									</div>
									<h3 className="text-lg font-medium mb-2">User-Friendly</h3>
									<p className="text-sm sm:text-base text-muted-foreground">
										Security tools should be accessible and easy to use for everyone.
									</p>
								</div>

								<div className="text-center">
									<div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<span className="text-2xl sm:text-3xl">🚀</span>
									</div>
									<h3 className="text-lg font-medium mb-2">Innovation</h3>
									<p className="text-sm sm:text-base text-muted-foreground">
										We&apos;re constantly exploring new ways to make encryption more
										engaging.
									</p>
								</div>

								<div className="text-center">
									<div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<span className="text-2xl sm:text-3xl">🌐</span>
									</div>
									<h3 className="text-lg font-medium mb-2">Inclusivity</h3>
									<p className="text-sm sm:text-base text-muted-foreground">
										Emojis are a universal language that transcends barriers.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default About;