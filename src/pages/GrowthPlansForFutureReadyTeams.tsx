import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, CheckCircle, Target, Zap, Award } from 'lucide-react';

const GrowthPlansForFutureReadyTeams: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link
          to="/#capability-gaps"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Capability Gaps
        </Link>
      </div>

      {/* Enhanced Hero Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Content - Show first on mobile */}
            <div className="order-1 lg:order-1 space-y-6 lg:space-y-8">
              {/* Icon and Decorative Elements */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex items-center">
                  <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full mx-3"></div>
                  <div className="w-4 md:w-6 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
                </div>
              </div>

              {/* Main Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 animate-fade-in-up leading-tight">
                  Growth Plans for{' '}
                  <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                    Future-Ready Teams
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed animate-fade-in-up animation-delay-200">
                  OphoTech-Specific Case Study: Creating a Future-Ready Workforce for Cloud Transformation in a BFSI Enterprise
                </p>
              </div>

              {/* Bottom Decorative Element */}
              <div className="flex items-center">
                <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
                <div className="w-3 md:w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Enhanced Image - Show second on mobile */}
            <div className="order-2 lg:order-2">
              <div className="relative group">
                <div className="glass-effect rounded-3xl overflow-hidden border border-white/20 backdrop-blur-xl shadow-2xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1688678097910-706dbce46fa4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2xvdWQlMjBTZXJ2aWNlJTIwZGVwbG95bWVudHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Growth Plans for Future-Ready Teams"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500/30 to-accent-cyan/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-accent-cyan/30 to-primary-500/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Case Study Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Case Study: Creating a Future-Ready Workforce for Cloud Transformation in a BFSI Enterprise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto"></div>
          </div>

          {/* Client Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Client</h3>
              <p className="text-gray-300">Large Private-Sector Bank in India</p>
              <p className="text-primary-400 text-sm">(Digital team: 3,500+ members)</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The bank initiated a major cloud transformation strategy (hybrid AWS + Azure), but 80% of the existing IT team lacked certifications, migration skills, and cloud-native architecture understanding. Talent churn increased due to tech insecurity.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                OphoTech designed a custom Growth & Upskill Roadmap covering career progression, learning pathways, and role-based certification plans—delivered in partnership with cloud providers and internal L&D units.
              </p>
            </div>
          </div>

          {/* Enablement Process Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Enablement Process</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-400 hidden lg:block"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        <h4 className="text-xl font-bold text-white">Gap Assessment</h4>
                      </div>
                      <p className="text-gray-300">Mapped current roles, certifications, and cloud project readiness of 3,000+ employees</p>
                    </div>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>

                {/* Step 2 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <h4 className="text-xl font-bold text-white">Growth Pathway Design</h4>
                      </div>
                      <p className="text-gray-300">Created tiered roadmaps (Beginner → Intermediate → Architect) aligned with actual business initiatives (e.g., cloud migration, DevSecOps)</p>
                    </div>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>

                {/* Step 3 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          3
                        </div>
                        <h4 className="text-xl font-bold text-white">Modular Learning Rollout</h4>
                      </div>
                      <p className="text-gray-300">Delivered learning via blended methods (e-learning, labs, bootcamps)</p>
                    </div>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>

                {/* Step 4 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          4
                        </div>
                        <h4 className="text-xl font-bold text-white">Mentoring & Real-World Labs</h4>
                      </div>
                      <p className="text-gray-300">Paired top learners with internal cloud leads and sandbox environments</p>
                    </div>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>

                {/* Step 5 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          5
                        </div>
                        <h4 className="text-xl font-bold text-white">Success Benchmarking</h4>
                      </div>
                      <p className="text-gray-300">Tracked progress with dashboards linked to internal promotions, performance, and business outcomes</p>
                    </div>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Business Impact</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">72%</div>
                <p className="text-gray-300 text-sm leading-relaxed">of workforce became cloud-certified within 6 months</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">40%</div>
                <p className="text-gray-300 text-sm leading-relaxed">increase in internal mobility (engineers moved to cloud and DevOps roles)</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">2x</div>
                <p className="text-gray-300 text-sm leading-relaxed">faster cloud project delivery with in-house teams</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">69</div>
                <p className="text-gray-300 text-sm leading-relaxed">Employee NPS improved from 38 to 69 in 6 months (confidence and career clarity)</p>
              </div>
            </div>
          </div>

          {/* Website-Ready Metrics Summary */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Website-Ready Metrics Summary</h3>
            
            {/* Mobile-First Responsive Design */}
            <div className="space-y-6 lg:hidden">
              {/* Mobile Cards */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Cloud Certification Rate</span>
                  <span className="text-primary-400 font-bold">72%</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Roadmap: 18% → After Growth Enablement: 72%</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Internal Role Mobility</span>
                  <span className="text-primary-400 font-bold">62%</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Roadmap: 22% → After Growth Enablement: 62%</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Cloud Project Completion</span>
                  <span className="text-primary-400 font-bold">2x faster execution</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Roadmap: 60% delays → After Growth Enablement: 2x faster execution</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Employee Confidence (NPS)</span>
                  <span className="text-primary-400 font-bold">69</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Roadmap: 38 → After Growth Enablement: 69</div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-lg border border-white/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Impact Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Before OphoTech Roadmap</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">After Growth Enablement</th>
                  </tr>
                </thead>
                <tbody className="bg-white/5">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Cloud Certification Rate</td>
                    <td className="px-6 py-4 text-gray-300">18%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">72%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Internal Role Mobility</td>
                    <td className="px-6 py-4 text-gray-300">22%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">62%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Cloud Project Completion</td>
                    <td className="px-6 py-4 text-gray-300">60% delays</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">2x faster execution</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300 font-medium">Employee Confidence (NPS)</td>
                    <td className="px-6 py-4 text-gray-300">38</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">69</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Value */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Strategic Value for Clients</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Prevent skill obsolescence in <strong>fast-changing tech environments</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Retain and elevate internal talent <strong>instead of rehiring</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Build a <strong>future-ready workforce aligned with business priorities</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Strengthen employer branding with <strong>clear growth paths</strong></p>
              </div>
            </div>
          </div>

          {/* Suggested Tagline */}
          <div className="text-center">
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full px-8 py-4 border border-primary-500/30">
                <Award className="w-6 h-6 text-primary-400" />
                <span className="text-white font-semibold">"Train to Transform. Build the Teams Your Future Demands."</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrowthPlansForFutureReadyTeams;