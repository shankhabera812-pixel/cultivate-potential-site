import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCursorGradient } from '@/hooks/useCursorGradient';

const services = [
  'Landscape Design',
  'Hardscaping',
  'Garden Installation',
  'Irrigation Systems',
  'Outdoor Lighting',
  'Lawn Maintenance',
];

interface FormData {
  services: string[];
  address: string;
  name: string;
  phone: string;
}

const EstimateForm = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useScrollReveal();
  const cursorRef = useCursorGradient<HTMLElement>();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const onSubmit = (data: FormData) => {
    const fullData = { ...data, services: selectedServices };
    console.log('Estimate form submitted:', fullData);
    setSubmitted(true);
  };

  const canProceedStep1 = selectedServices.length > 0;
  const progressWidth = submitted ? 100 : ((step - 1) / 3) * 100 + (step === 3 ? 33 : 0);

  if (submitted) {
    return (
      <section
        id="estimate"
        className="py-24 bg-primary text-primary-foreground"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201,169,110,0.08), transparent 50%), hsl(153, 38%, 17%)',
        }}
      >
        <div className="container mx-auto px-4 text-center max-w-lg">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">You&apos;re All Set!</h2>
          <p className="text-primary-foreground/70 font-body leading-relaxed">
            We&apos;ll call you within 2 hours to schedule your free on-site consultation. Keep an eye on your phone!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="estimate"
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (cursorRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="relative py-24 bg-primary text-primary-foreground overflow-hidden"
      style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201,169,110,0.08), transparent 50%), hsl(153, 38%, 17%)',
      }}
    >
      <div className="container mx-auto px-4 max-w-xl">
        <div className="reveal text-center mb-4">
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Free Consultation</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Get Your Free Estimate</h2>
        </div>

        <div className="reveal text-center mb-8">
          <div className="inline-flex items-center gap-2 text-sm text-accent font-body">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            3 slots remaining for April
          </div>
          <div className="mt-2">
            <a href="tel:5125550147" className="inline-flex items-center gap-1.5 text-primary-foreground/50 hover:text-accent text-sm font-body transition-colors">
              <Phone className="w-3.5 h-3.5" />
              Prefer to talk? Call (512) 555-0147
            </a>
          </div>
        </div>

        {/* Progress bar */}
        <div className="reveal mb-8">
          <div className="flex justify-between text-xs text-primary-foreground/50 font-body mb-2">
            <span className={step >= 1 ? 'text-accent' : ''}>Services</span>
            <span className={step >= 2 ? 'text-accent' : ''}>Location</span>
            <span className={step >= 3 ? 'text-accent' : ''}>Contact</span>
          </div>
          <div className="h-1.5 bg-primary-foreground/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="reveal">
          {/* Step 1: Services */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-primary-foreground/70 font-body text-center mb-4">What can we help you with?</p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`relative px-4 py-3 rounded-lg border text-sm font-body transition-all duration-200 text-left ${
                      selectedServices.includes(service)
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-primary-foreground/20 text-primary-foreground/70 hover:border-primary-foreground/40'
                    }`}
                  >
                    {selectedServices.includes(service) && (
                      <Check className="absolute top-2 right-2 w-3.5 h-3.5 text-accent" />
                    )}
                    {service}
                  </button>
                ))}
              </div>
              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
                className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-body font-bold"
              >
                Continue
              </Button>
            </div>
          )}

          {/* Step 2: Address */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-primary-foreground/70 font-body text-center mb-4">Where&apos;s your property?</p>
              <Input
                {...register('address', { required: 'Please enter your address' })}
                placeholder="Street address or neighborhood"
                className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body"
              />
              {errors.address && <p className="text-sm text-red-400 font-body">{errors.address.message}</p>}
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 font-body"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-body font-bold"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-primary-foreground/70 font-body text-center mb-4">How can we reach you?</p>
              <Input
                {...register('name', { required: 'Please enter your name' })}
                placeholder="Your name"
                className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body"
              />
              {errors.name && <p className="text-sm text-red-400 font-body">{errors.name.message}</p>}
              <Input
                {...register('phone', { required: 'Please enter your phone number' })}
                placeholder="Phone number"
                type="tel"
                className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body"
              />
              {errors.phone && <p className="text-sm text-red-400 font-body">{errors.phone.message}</p>}
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 font-body"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-body font-bold"
                >
                  Get My Free Estimate
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default EstimateForm;
