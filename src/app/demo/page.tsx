import Link from 'next/link';
import { Wallet, Wrench, ArrowRight, ExternalLink, Utensils, Calendar } from 'lucide-react';

export default function DemoPage() {
  const demos = [
    {
      title: 'MoneyPlan Budget Planner',
      description: 'Personal finance and budget planning with income tracking, expense management, and savings goals.',
      href: '/demo/budget-planner',
      icon: Wallet,
      color: 'teal',
      type: 'internal',
      features: [
        'Dashboard with financial insights',
        'Income & expense tracking',
        'Savings goals with progress',
        'Debt payoff calculator',
        'Subscription management',
        'Smart financial insights',
      ],
      stats: {
        sections: '7 sections',
        features: '20+ features',
        data: 'Sample data included',
      },
    },
    {
      title: 'WorkshopFlow',
      description: 'Workshop management system for repair shops with job tracking, customer management, and billing.',
      href: '/demo/workshopflow',
      icon: Wrench,
      color: 'blue',
      type: 'internal',
      features: [
        'Job management & tracking',
        'Customer profiles',
        'Technician scheduling',
        'Inventory management',
        'Invoice & billing',
        'Real-time status updates',
      ],
      stats: {
        sections: '6 sections',
        features: '15+ features',
        data: 'Live demo data',
      },
    },
    {
      title: 'Clinic Booking',
      description: 'Clinic booking and management system with patient appointments, doctor scheduling, and admin dashboard.',
      href: '/demo/clinic-booking',
      icon: Calendar,
      color: 'green',
      type: 'internal',
      features: [
        'Patient appointment booking',
        'Doctor schedule management',
        'Service catalog',
        'Admin dashboard',
        'Appointment tracking',
        'Healthcare-focused UI',
      ],
      stats: {
        sections: '8 sections',
        features: '25+ features',
        data: 'Medical demo data',
      },
    },
    {
      title: 'RestaurantStarter',
      description: 'Modern restaurant landing page with food-first presentation and direct ordering CTAs.',
      href: 'https://restaurantstarter.vercel.app/',
      icon: Utensils,
      color: 'orange',
      type: 'external',
      features: [
        'Responsive landing page',
        'Menu showcase',
        'Direct ordering CTAs',
        'WhatsApp integration',
        'Location & hours',
        'Mobile-optimized design',
      ],
      stats: {
        sections: 'Live Site',
        features: 'Production',
        data: 'Real content',
      },
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: {
        bg: 'from-teal-400/80 to-teal-500/80',
        icon: 'bg-white/90 text-teal-600',
        button: 'bg-teal-500 hover:bg-teal-600',
        badge: 'bg-teal-50 text-teal-700 border-teal-200',
      },
      blue: {
        bg: 'from-blue-400/80 to-blue-500/80',
        icon: 'bg-white/90 text-blue-600',
        button: 'bg-blue-500 hover:bg-blue-600',
        badge: 'bg-blue-50 text-blue-700 border-blue-200',
      },
      green: {
        bg: 'from-emerald-400/80 to-emerald-500/80',
        icon: 'bg-white/90 text-emerald-600',
        button: 'bg-emerald-500 hover:bg-emerald-600',
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      },
      orange: {
        bg: 'from-orange-400/80 to-orange-500/80',
        icon: 'bg-white/90 text-orange-600',
        button: 'bg-orange-500 hover:bg-orange-600',
        badge: 'bg-orange-50 text-orange-700 border-orange-200',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-3">
              Interactive Demos
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore fully functional demos of my projects. Each demo includes sample data and interactive features you can try right in your browser.
            </p>
          </div>
        </div>
      </div>

      {/* Demos Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {demos.map((demo) => {
            const Icon = demo.icon;
            const colors = getColorClasses(demo.color);

            return (
              <div
                key={demo.href}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-border/50 flex flex-col"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${colors.bg} p-6 text-white min-h-[200px] flex items-start`}>
                  <div className="flex items-start gap-4 w-full">
                    <div className={`p-3 rounded-lg ${colors.icon} flex-shrink-0`}>
                      <Icon size={32} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl font-bold mb-2">{demo.title}</h2>
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
                        {demo.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className={`text-center p-2.5 rounded-lg border ${colors.badge}`}>
                      <p className="text-xs font-semibold mb-0.5">Sections</p>
                      <p className="text-sm font-bold">{demo.stats.sections}</p>
                    </div>
                    <div className={`text-center p-2.5 rounded-lg border ${colors.badge}`}>
                      <p className="text-xs font-semibold mb-0.5">Features</p>
                      <p className="text-sm font-bold">{demo.stats.features}</p>
                    </div>
                    <div className={`text-center p-2.5 rounded-lg border ${colors.badge}`}>
                      <p className="text-xs font-semibold mb-0.5">Data</p>
                      <p className="text-sm font-bold">{demo.stats.data}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <h3 className="text-sm font-bold mb-3">
                      Key Features:
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {demo.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                  {demo.type === 'external' ? (
                    <a
                      href={demo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full ${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                    >
                      Visit Live Site
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <Link
                      href={demo.href}
                      className={`flex items-center justify-center gap-2 w-full ${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                    >
                      Try Interactive Demo
                      <ArrowRight size={18} />
                    </Link>
                  )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="max-w-3xl mx-auto mt-12 bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-bold mb-3">
            About These Demos
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              ✨ <strong>Fully Interactive:</strong> All demos include working features you can interact with, including adding, editing, and deleting data.
            </p>
            <p>
              📊 <strong>Sample Data:</strong> Each demo comes pre-loaded with realistic sample data to showcase functionality.
            </p>
            <p>
              🚀 <strong>No Backend Required:</strong> Demos run entirely in your browser using client-side state management.
            </p>
            <p>
              📱 <strong>Responsive Design:</strong> All demos work seamlessly on desktop, tablet, and mobile devices.
            </p>
            <p>
              💾 <strong>Session-Based:</strong> Your changes persist during your session but reset when you refresh the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
