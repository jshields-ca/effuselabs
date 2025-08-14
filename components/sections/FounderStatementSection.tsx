'use client'

import React from 'react'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, Text } from '@/components/ui'
import { LightweightAnimatedContainer as Animated } from '@/components/ui/LightweightAnimatedContainer'

interface FounderStatementSectionProps {
	id?: string
	heading?: string
	body?: string
	imageSrc?: string
	imageAlt?: string
}

const DEFAULT_BODY = `"As a developer and a federally-recognized person with a disability, I have experienced firsthand how poorly designed software can create barriers. I founded Effuse Labs on a simple, unwavering belief: that the power of technology should be a source of liberation, not frustration.\n\nOur purpose is to pour out a continuous stream of elegant, accessible, and truly intuitive tools that empower local businesses to not just compete, but to thrive. We're here to lift the operational burden, illuminate the path to growth, and build a more accessible digital future for everyone."\n\n— Jeremy Shields, Founder`

const FounderStatementSection: React.FC<FounderStatementSectionProps> = ({
	id = 'founder',
	heading = 'Technology for People, Not the Other Way Around.',
	body = DEFAULT_BODY,
	imageSrc,
	imageAlt = 'Portrait of Jeremy Shields',
}) => {
	return (
		<SectionContainer id={id} background="dark" padding="lg">
			<Animated animation="slideUp">
				<div className="grid gap-10 md:grid-cols-2 md:items-center">
					{/* Visual area: photo or signature mark */}
					<div className="order-2 md:order-1">
						<div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center">
							{imageSrc ? (
								<img
									src={imageSrc}
									alt={imageAlt}
									className="mx-auto h-72 w-full max-w-md object-cover grayscale"
								/>
							) : (
								<div className="flex h-72 items-center justify-center">
									{/* Decorative signature squiggle */}
									<svg aria-hidden viewBox="0 0 400 120" className="h-24 w-80 text-brand-gold">
										<path
											d="M10 80 C 80 10, 120 110, 190 40 S 320 110, 390 30"
											fill="none"
											stroke="currentColor"
											strokeWidth="6"
											strokeLinecap="round"
										/>
									</svg>
								</div>
							)}
						</div>
					</div>

				{/* Copy */}
				<div className="order-1 md:order-2">
					<H2 className="text-white mb-4">{heading}</H2>
					<blockquote className="space-y-4">
						{body.split('\n').map((para, idx) => (
							<Text key={idx} className="text-light-grey">
								{para}
							</Text>
						))}
					</blockquote>
				</div>
			</div>
			</Animated>
		</SectionContainer>
	)
}

export default FounderStatementSection


