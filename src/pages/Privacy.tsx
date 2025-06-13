import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Server, Clock } from 'lucide-react';

const privacyPoints = [
	{
		icon: Shield,
		title: 'Data Security',
		description:
			'All encryption and decryption happens directly in your browser. Your original text and passwords are never sent to our servers, ensuring complete privacy.',
	},
	{
		icon: Eye,
		title: 'No Tracking',
		description:
			'We don\'t use cookies or tracking technologies to monitor your activity. Your privacy is respected at all times when using Playcrypt.',
	},
	{
		icon: Server,
		title: 'No Data Storage',
		description:
			'We don\'t store your encrypted or decrypted messages. Once you leave the page, your data is gone unless you\'ve saved it elsewhere.',
	},
	{
		icon: Clock,
		title: 'Limited Logs',
		description:
			'Our servers maintain minimal access logs for security and maintenance purposes only. These logs don\'t contain any of your encrypted or decrypted content.',
	},
];

const Privacy = () => {
	return (
		<section className="py-12 sm:py-16 md:py-20">
			<div className="container px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 sm:mb-12 md:mb-16">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
						Privacy Policy
					</h1>
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
						How we protect your data and respect your privacy
					</p>
				</div>

				<div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
					<Card className="shadow-lg border-2">
						<CardContent className="p-6 sm:p-8 md:p-10">
							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
								At Playcrypt, we take your privacy seriously. This Privacy Policy
								explains how we handle your data when you use our emoji encryption
								service. By using Playcrypt, you agree to the practices described in
								this policy.
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
					{privacyPoints.map((point, index) => (
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
								Information We Don't Collect
							</h2>
							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
								We do not collect, store, or process:
							</p>
							<ul className="list-disc pl-6 text-sm sm:text-base md:text-lg mb-8 space-y-2 text-muted-foreground">
								<li>Your original text messages</li>
								<li>Your encrypted emoji messages</li>
								<li>
									Personal information such as names, email addresses, or location
									data
								</li>
							</ul>

							<h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">
							Information We May Collect
							</h2>
							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
								We may collect minimal anonymous usage data, including:
							</p>
							<ul className="list-disc pl-6 text-sm sm:text-base md:text-lg mb-8 space-y-2 text-muted-foreground">
								<li>Anonymous usage statistics (number of visits, page views)</li>
								<li>Browser type and version</li>
								<li>Operating system information</li>
								<li>Referring website</li>
							</ul>

							<h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">
								Changes to This Policy
							</h2>
							<p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
								We may update our Privacy Policy from time to time. We will notify
								you of any changes by posting the new Privacy Policy on this page
								and updating the "Last Updated" date.
							</p>

							<h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">
								Contact Us
							</h2>
							<p className="text-sm sm:text-base md:text-lg leading-relaxed">
								If you have any questions about this Privacy Policy, please contact
								us at privacy@playcrypt.example.com.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Privacy;