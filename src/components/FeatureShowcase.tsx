export function FeatureShowcase() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            bg-[#123158]/5
            rounded-3xl
            px-12
            py-16
            relative overflow-hidden
          "
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: content */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Enterprise-grade support for mission-critical systems
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  TrueSoft provides dedicated ERPNext, CRM, and cloud support with enterprise-level reliability. Our engineering team ensures your systems run securely, efficiently, and without interruption.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Left feature block */}
                <div
                  className="
                    bg-white/80
                    backdrop-blur-sm
                    border border-gray-200/50
                    rounded-2xl
                    p-6
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                    transition-all
                    duration-300
                  "
                >
                  <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                    24/7 Expert Support
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Access experienced engineers whenever you need assistance with your ERP, CRM, or cloud infrastructure.
                  </p>
                </div>
                {/* Right feature block */}
                <div
                  className="
                    bg-white/80
                    backdrop-blur-sm
                    border border-gray-200/50
                    rounded-2xl
                    p-6
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                    transition-all
                    duration-300
                  "
                >
                  <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                    Certified ERPNext Specialists
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Work with certified professionals specializing in ERPNext implementation, optimization, and enterprise deployments.
                  </p>
                </div>
              </div>
            </div>
            {/* Right: illustration */}
            <div
              className="
                flex items-center justify-center
                relative
              "
            >
              <img
                src="/illustrations/support-team.svg"
                alt="TrueSoft Support Team"
                className="
                  w-full
                  max-w-lg
                  object-contain
                  relative z-10
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
