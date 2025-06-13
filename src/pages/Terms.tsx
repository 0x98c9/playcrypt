import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, AlertTriangle, Scale, Globe } from 'lucide-react';

const termsPoints = [
	{
		icon: FileText,
		title: 'Acceptable Use',
		description:
			'Playcrypt is provided for lawful communication purposes. Users must not use the service for illegal activities or to distribute harmful content.',
	},
	{
		icon: AlertTriangle,
		title: 'No Warranty',
		description:
			'Playcrypt is provided "as is" without warranties of any kind. We don\'t guarantee uninterrupted or error-free service.',
	},
	{
		icon: Scale,
		title: 'Limitation of Liability',
		description:
			'We are not liable for any damages arising from your use of Playcrypt, including data loss or security breaches beyond our control.',
	},
	{
		icon: Globe,
		title: 'Governing Law',
		description:
			'These terms are governed by the laws of the jurisdiction in which Playcrypt operates, without regard to conflict of law principles.',
	},
];

const Terms = () => {
	return (
		<section className="py-12 sm:py-16 md:py-20">
			<div className="container px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 sm:mb-12 md:mb-16">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
						Terms of Service
					</h1>
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
						The rules and guidelines for using Playcrypt
					</p>
				</div>

				<div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
					<Card className="shadow-lg border-2">
						<CardContent className="p-6 sm:p-8 md:p-10">
							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
								Welcome to Playcrypt! These Terms of Service ("Terms") govern your
								use of the Playcrypt emoji encryption service. By using Playcrypt,
								you agree to these Terms in their entirety.
							</p>

							<h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">
								Last Updated:{' '}
								{new Date().toLocaleDateString('en-US', {
									month: 'long',
									day: 'numeric',
									year: 'numeric',
								})}
							</h2>
						</CardContent>
					</Card>
				</div>

				<div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
					{termsPoints.map((point, index) => (
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
							<h2 className="text-xl sm:text-2xl font-semibold mb-4">
								Service Description
							</h2>
							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
								Playcrypt provides an emoji encryption service that allows users to
								convert text into emoji sequences and vice versa. The service is
								provided for entertainment and casual communication purposes.
							</p>

							<h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">
								User Responsibilities
							</h2>
							<p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
								As a user of Playcrypt, you agree to:
							</p>
							<ul className="list-disc pl-6 text-sm sm:text-base md:text-lg mb-8 space-y-2 text-muted-foreground">
								<li>
									Use the service in compliance with all applicable laws and
									regulations
								</li>
								<li>
									Not use the service to transmit illegal, harmful, threatening, or
									abusive content
								</li>
								<li>
									Not attempt to interfere with or disrupt the service or servers
								</li>
								<li>
									Not use automated systems or software to extract data from the
									service
								</li>
							</ul>

							<h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">
								Intellectual Property
							</h2>
							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
								All content, features, and functionality of Playcrypt, including
								but not limited to the design, code, and encryption algorithms,
								are owned by Playcrypt and are protected by copyright, trademark,
								and other intellectual property laws.
							</p>

							<h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">
								Termination
							</h2>
							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
								We reserve the right to terminate or suspend access to Playcrypt,
								without prior notice or liability, for any reason, including
								breach of these Terms.
							</p>

							<h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">
								Changes to Terms
							</h2>
							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
								We may revise these Terms at any time without notice. By
								continuing to use Playcrypt after any changes, you accept the
								revised Terms.
							</p>

							<h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">
								Contact Us
							</h2>
							<p className="text-sm sm:text-base md:text-lg leading-relaxed">
								If you have any questions about these Terms, please contact us at
								terms@playcrypt.example.com.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Terms;