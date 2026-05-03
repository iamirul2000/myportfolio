import Link from 'next/link';
import { Wallet, Wrench, ArrowRight, ExternalLink, Utensils } from 'lucide-react';

export default function DemoPage() {
  const demos = [
    {
      title: 'MoneyPlan Budget Planner',
      description: 'A comprehensive personal finance and budget planning application with income tracking, expense management, savings goals, debt tracking, and subscription management.',
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
      description: 'A workshop management system for repair shops with job tracking, customer management, technician assignment, inventory control, and billing.',
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
      title: 'RestaurantStarter',
      description: 'A modern restaurant landing page template with food-first presentation, direct ordering CTAs, and a warm cafe-style visual system for local food businesses.',
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
        bg: 'from-teal-500 to-teal-600',
        icon: 'bg-teal-100 text-teal-600',
        button: 'bg-teal-600 hover:bg-teal-700',
        badge: 'bg-teal-50 text-teal-700 border-teal-200',
      },
      blue: {
        bg: 'from-blue-500 to-blue-600',
        icon: 'bg-blue-100 text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        badge: 'bg-blue-50 text-blue-700 border-blue-200',
      },
      orange: {
        bg: 'from-orange-500 to-orange-600',
        icon: 'bg-orange-100 text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
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
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {demos.map((demo) => {
            const Icon = demo.icon;
            const colors = getColorClasses(demo.color);

            return (
              <div
                key={demo.href}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-border/50 flex flex-col"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${colors.bg} p-6 text-white h-[220px] flex items-start`}>
                  <div className="flex items-start gap-4 w-full">
                    <div className={`p-3 rounded-lg ${colors.icon} flex-shrink-0`}>
                      <Icon size={32} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl font-bold mb-2">{demo.title}</h2>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {demo.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className={`text-center p-3 rounded-lg border ${colors.badge}`}>
                      <p className="text-xs font-semibold mb-1">Sections</p>
                      <p className="text-sm font-bold">{demo.stats.sections}</p>
                    </div>
                    <div className={`text-center p-3 rounded-lg border ${colors.badge}`}>
                      <p className="text-xs font-semibold mb-1">Features</p>
                      <p className="text-sm font-bold">{demo.stats.features}</p>
                    </div>
                    <div className={`text-center p-3 rounded-lg border ${colors.badge}`}>
                      <p className="text-xs font-semibold mb-1">Data</p>
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
