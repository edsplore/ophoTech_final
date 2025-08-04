import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, CheckCircle, Target, Zap, Award } from 'lucide-react';

const CollaborativeInnovation: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <button
          onClick={() => {
            window.location.href = '/#technology-scouting';
          }}
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Technology Scouting
        </button>
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
                  Collaborative{' '}
                  <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                    Innovation
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed animate-fade-in-up animation-delay-200">
                  OphoTech-Specific Case Study: Co-Creating a Low-Code AI Risk Engine for the Insurance Industry
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
                    src="https://images.unsplash.com/photo-1734328819658-0c3ceef27c46?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Collaborative Innovation with Experts"
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
              Case Study: Co-Creating a Low-Code AI Risk Engine for the Insurance Industry
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
              <p className="text-gray-300">Regional Insurance Provider</p>
              <p className="text-primary-400 text-sm">(serving 1 million+ policyholders)</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Risk profiling and claims assessment processes were inconsistent, slow, and prone to bias due to manual evaluations
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                OphoTech partnered with actuarial consultants and internal IT teams to co-create a low-code AI-powered risk engine, using a collaborative co-innovation model with shared IP rights and field-specific inputs
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
                        <h4 className="text-xl font-bold text-white">Partner Onboarding</h4>
                      </div>
                      <p className="text-gray-300">Engaged insurance risk experts, data scientists, and low-code platform providers</p>
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
                        <h4 className="text-xl font-bold text-white">Design Sprint</h4>
                      </div>
                      <p className="text-gray-300">Conducted 3-week co-innovation bootcamp with joint design, simulation, and prototyping</p>
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
                        <h4 className="text-xl font-bold text-white">Agile Co-Build</h4>
                      </div>
                      <p className="text-gray-300">Developed a modular risk engine that calculates fraud scores, underwriting risk, and premium adjustment suggestions</p>
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
                        <h4 className="text-xl font-bold text-white">Deploy + Scale</h4>
                      </div>
                      <p className="text-gray-300">Launched across 4 regional zones with internal training and system-level integration</p>
                    </div>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Business Impact</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">45%</div>
                <p className="text-gray-300 text-sm leading-relaxed">faster claims processing time (from 11 days to 6 days avg.)</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">28%</div>
                <p className="text-gray-300 text-sm leading-relaxed">increase in fraud detection accuracy</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">60%</div>
                <p className="text-gray-300 text-sm leading-relaxed">less dependency on manual underwriting</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">Award</div>
                <p className="text-gray-300 text-sm leading-relaxed">Recognized as a "Top 10 InsurTech Co-Innovation" finalist by a global insurance think tank</p>
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
                  <span className="text-white font-semibold">Claims Processing Time</span>
                  <span className="text-primary-400 font-bold">6 Days Avg</span>
                </div>
                <div className="text-sm text-gray-400">Before: 11 Days Avg → After: 6 Days Avg</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Manual Underwriting</span>
                  <span className="text-primary-400 font-bold">{"<30% dependency"}</span>
                </div>
                <div className="text-sm text-gray-400">Before: 90% dependency → After: {"<30% dependency"}</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Fraud Detection Accuracy</span>
                  <span className="text-primary-400 font-bold">{">93%"}</span>
                </div>
                <div className="text-sm text-gray-400">Before: 65% → After: {">93%"}</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Tech Ownership</span>
                  <span className="text-primary-400 font-bold">Joint IP Co-Owned</span>
                </div>
                <div className="text-sm text-gray-400">Before: Vendor Locked → After: Joint IP Co-Owned</div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-lg border border-white/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Impact Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Before Co-Innovation</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">After OphoTech Collaboration</th>
                  </tr>
                </thead>
                <tbody className="bg-white/5">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Claims Processing Time</td>
                    <td className="px-6 py-4 text-gray-300">11 Days Avg</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">6 Days Avg</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Manual Underwriting</td>
                    <td className="px-6 py-4 text-gray-300">90% dependency</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">{"<30% dependency"}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Fraud Detection Accuracy</td>
                    <td className="px-6 py-4 text-gray-300">65%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">{">93%"}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300 font-medium">Tech Ownership</td>
                    <td className="px-6 py-4 text-gray-300">Vendor Locked</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">Joint IP Co-Owned</td>
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
                <p className="text-gray-300">Create <strong>industry-specific solutions faster</strong> through expert partnerships</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300"><strong>Own and control IP</strong> without starting from scratch</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Reduce time, cost, and risk with <strong>collaborative development</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Turn expert insights into working, scalable tech products</p>
              </div>
            </div>
          </div>

          {/* Suggested Tagline */}
          <div className="text-center">
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full px-8 py-4 border border-primary-500/30">
                <Award className="w-6 h-6 text-primary-400" />
                <span className="text-white font-semibold">"Don't Just Buy Innovation—Co-Create It. Partner With Experts, Build What Matters."</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollaborativeInnovation;