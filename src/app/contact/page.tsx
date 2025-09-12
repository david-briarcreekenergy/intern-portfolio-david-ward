'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ButtonPrimary from '../components/ButtonPrimary';
import Particles from '../components/ui/Particles';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
    ).fromTo(
      formRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3',
    );

    // Add hover animation to submit button
    const submitButton = submitButtonRef.current;
    if (submitButton) {
      const handleMouseEnter = () => {
        gsap.to(submitButton, {
          y: -5,
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(submitButton, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      submitButton.addEventListener('mouseenter', handleMouseEnter);
      submitButton.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        submitButton.removeEventListener('mouseenter', handleMouseEnter);
        submitButton.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form submitted:', formData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form after successful submission
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    alert('Message sent successfully!');
  };

  const title = 'Contact Me';
  const description = ` Send me a message and I\'ll get back to you soon.`;

  return (
    <div className="min-h-[calc(100vh-108px)] flex flex-col items-center justify-center p-3 bg-gradient-to-tr from-neutral-800 via-neutral-950 to-black gap-4 sm:p-4 sm:gap-8 relative">
      {/* Full-screen particles background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={300}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <h1 className="relative z-10 font-mono text-2xl font-bold tracking-wide text-emerald-400 sm:text-4xl md:text-6xl">
        Contact Me
      </h1>
      <Card
        ref={cardRef}
        className="relative z-10 w-full max-w-sm opacity-0 sm:max-w-md bg-gradient-to-tr from-neutral-900 via-neutral-950 to-black"
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {title}{' '}
          </CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 opacity-0"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="text-gray-300"
              />
            </div>

            <ButtonPrimary ref={submitButtonRef}>
              <button
                type="submit"
                className="w-full py-2 text-sm font-medium sm:text-base sm:py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </ButtonPrimary>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
