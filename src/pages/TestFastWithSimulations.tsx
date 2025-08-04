import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, CheckCircle, Target, Award } from 'lucide-react';

const TestFastWithSimulations: React.FC = () => {
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
          to="/#enterprise-solutions"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Enterprise Solutions
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
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
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
                  Test Fast with{' '}
                  <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                    Real Use-Case Simulations
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed animate-fade-in-up animation-delay-200">
                  OphoTech-Specific Case Study: Rapid POC for Real-Time Demand Forecasting in a Retail Chain
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
                    src="https://plus.unsplash.com/premium_photo-1678705961917-7bbbdbe80d68?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFRlc3QlMjBGYXN0JTIwJTNBfGVufDB8fDB8fHww"
                    alt="Test Fast with Real Use-Case Simulations"
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
              Case Study: Rapid POC for Real-Time Demand Forecasting in a Retail Chain
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
              <p className="text-gray-300">National Retail Chain with 150+ Stores and Centralized Warehouse Operations</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Inventory mismatches across locations, slow demand prediction, and seasonal overstocking led to high holding costs and missed revenue opportunities. Leadership was hesitant to commit to a full-scale AI solution without tangible proof.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                OphoTech built a sandbox-based Proof of Concept (POC) in just 4 weeks—using historical sales data, promotions, regional trends, and external variables (weather, festivals) to simulate real-time demand forecasting for 5 pilot stores.
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
                        <h4 className="text-xl font-bold text-white">Data Ingestion</h4>
                      </div>
                      <p className="text-gray-300">Integrated past 18 months of sales, inventory, and promotions data from POS and ERP systems</p>
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
                        <h4 className="text-xl font-bold text-white">Sandbox Environment Setup</h4>
                      </div>
                      <p className="text-gray-300">Created a secure, isolated test environment with dummy transactions, configurable models</p>
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
                        <h4 className="text-xl font-bold text-white">AI Simulation</h4>
                      </div>
                      <p className="text-gray-300">Ran multiple AI/ML models (XGBoost, Prophet, LSTM) to predict product-level demand for 14-day cycles</p>
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
                        <h4 className="text-xl font-bold text-white">Business Review</h4>
                      </div>
                      <p className="text-gray-300">Delivered simulation dashboards, side-by-side comparisons (forecast vs actual), and decision impact scenarios</p>
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
                        <h4 className="text-xl font-bold text-white">Go/No-Go Decision</h4>
                      </div>
                      <p className="text-gray-300">Leadership greenlit full-scale rollout after success of the simulation</p>
                    </div>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Business Impact (from POC alone)</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">20%</div>
                <p className="text-gray-300 text-sm leading-relaxed">reduction in deadstock (per simulation results in 2 test cycles)</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">95%+</div>
                <p className="text-gray-300 text-sm leading-relaxed">forecast accuracy for top 100 SKUs</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">3x</div>
                <p className="text-gray-300 text-sm leading-relaxed">faster decision-making by merchandising team</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">70%</div>
                <p className="text-gray-300 text-sm leading-relaxed">reduced tech evaluation time (vs traditional vendor RFP process)</p>
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
                  <span className="text-white font-semibold">Forecast Accuracy (Top SKUs)</span>
                  <span className="text-primary-400 font-bold">95%+</span>
                </div>
                <div className="text-sm text-gray-400">Before POC Simulation: 68% → After OphoTech Sandbox POC: 95%+</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Inventory Wastage (Deadstock)</span>
                  <span className="text-primary-400 font-bold">20% reduction</span>
                </div>
                <div className="text-sm text-gray-400">Before POC Simulation: High → After OphoTech Sandbox POC: 20% reduction</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Project Evaluation Time</span>
                  <span className="text-primary-400 font-bold">3 weeks</span>
                </div>
                <div className="text-sm text-gray-400">Before POC Simulation: ~10 weeks → After OphoTech Sandbox POC: 3 weeks</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Decision Cycle (Tech Approval)</span>
                  <span className="text-primary-400 font-bold">2 weeks</span>
                </div>
                <div className="text-sm text-gray-400">Before POC Simulation: 6 weeks → After OphoTech Sandbox POC: 2 weeks</div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-lg border border-white/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Impact Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Before POC Simulation</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">After OphoTech Sandbox POC</th>
                  </tr>
                </thead>
                <tbody className="bg-white/5">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Forecast Accuracy (Top SKUs)</td>
                    <td className="px-6 py-4 text-gray-300">68%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">95%+</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Inventory Wastage (Deadstock)</td>
                    <td className="px-6 py-4 text-gray-300">High</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">20% reduction</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Project Evaluation Time</td>
                    <td className="px-6 py-4 text-gray-300">~10 weeks</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">3 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300 font-medium">Decision Cycle (Tech Approval)</td>
                    <td className="px-6 py-4 text-gray-300">6 weeks</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">2 weeks</td>
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
                <p className="text-gray-300">Quickly <strong>validate complex solutions in a safe, isolated environment</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Reduce investment risk with <strong>working simulations</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Enable business teams to <strong>see impact before committing</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Avoid long procurement cycles and blind tech adoption</p>
              </div>
            </div>
          </div>

          {/* Suggested Tagline */}
          <div className="text-center">
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full px-8 py-4 border border-primary-500/30">
                <Award className="w-6 h-6 text-primary-400" />
                <span className="text-white font-semibold">"Don't Guess. Simulate. Validate Real Results Before You Scale."</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestFastWithSimulations;