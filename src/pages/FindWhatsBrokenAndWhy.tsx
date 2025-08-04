import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, CheckCircle, Target, Zap, Award } from 'lucide-react';

const FindWhatsBrokenAndWhy: React.FC = () => {
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
          to="/#feedback-loop"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Feedback Loop
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
                  <Search className="w-6 h-6 md:w-8 md:h-8 text-white" />
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
                  Find What's Broken{' '}
                  <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                    and Why
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed animate-fade-in-up animation-delay-200">
                  OphoTech-Specific Case Study: Uncovering Hidden Operational Gaps in a Large-Scale E-Commerce Supply Chain
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
                    src="https://images.unsplash.com/photo-1553451166-232112bda6f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmluZCUyMFdoYXQnc0Jyb2tlbiUyMGFuZFdoeSUzQXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Find What's Broken and Why"
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
              Case Study: Uncovering Hidden Operational Gaps in a Large-Scale E-Commerce Supply Chain
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
              <p className="text-gray-300">National E-Commerce Brand</p>
              <p className="text-primary-400 text-sm">(Warehouse + Delivery Network in 30+ Cities)</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Despite rapid growth, the company faced frequent delivery delays, customer complaints, and rising operational costs. The root causes were unclear—blame was shifting between tech, logistics, and customer support.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                OphoTech initiated a comprehensive internal audit and diagnostics program, blending analytics, interviews, and system trace logs to identify real bottlenecks across the order-to-delivery cycle.
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
                        <h4 className="text-xl font-bold text-white">Process Mapping</h4>
                      </div>
                      <p className="text-gray-300">Audited 12 critical workflows across order processing, inventory sync, last-mile tracking, and support</p>
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
                        <h4 className="text-xl font-bold text-white">Tech Log Analysis</h4>
                      </div>
                      <p className="text-gray-300">Applied diagnostic tools to trace API calls, downtime patterns, and failed transactions</p>
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
                        <h4 className="text-xl font-bold text-white">Employee Interviews</h4>
                      </div>
                      <p className="text-gray-300">Gathered insights from operations, tech, and call center teams</p>
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
                        <h4 className="text-xl font-bold text-white">Pain Point Report</h4>
                      </div>
                      <p className="text-gray-300">Delivered a heatmap showing high-friction zones by function, geography, and system</p>
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
                        <h4 className="text-xl font-bold text-white">Recommendation Brief</h4>
                      </div>
                      <p className="text-gray-300">Created a prioritized list of fixes (tech, process, policy)</p>
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
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">3</div>
                <p className="text-gray-300 text-sm leading-relaxed">core bottlenecks identified (API timeout during high-volume sales, misrouted warehouse dispatches, and delayed order sync from CRM to WMS)</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">25%</div>
                <p className="text-gray-300 text-sm leading-relaxed">decrease in customer complaints within 60 days of changes</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">40%</div>
                <p className="text-gray-300 text-sm leading-relaxed">faster resolution of delivery-related support tickets</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">Dashboard</div>
                <p className="text-gray-300 text-sm leading-relaxed">Built a centralized ops-health dashboard to monitor real-time deviations</p>
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
                  <span className="text-white font-semibold">Delivery SLA Violations</span>
                  <span className="text-primary-400 font-bold">{"<10%"}</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Audit: High (22%) → After Root Cause Discovery: {"<10%"}</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Ticket Resolution Time</span>
                  <span className="text-primary-400 font-bold">{"<29 hrs"}</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Audit: Avg 48 hrs → After Root Cause Discovery: {"<29 hrs"}</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Customer Complaints</span>
                  <span className="text-primary-400 font-bold">13,500/month</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Audit: 18,000/month → After Root Cause Discovery: 13,500/month</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Cross-Functional Clarity</span>
                  <span className="text-primary-400 font-bold">100% accountability map</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Audit: Low (blame game) → After Root Cause Discovery: 100% accountability map</div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-lg border border-white/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Impact Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Before OphoTech Audit</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">After Root Cause Discovery</th>
                  </tr>
                </thead>
                <tbody className="bg-white/5">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Delivery SLA Violations</td>
                    <td className="px-6 py-4 text-gray-300">High (22%)</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">{"<10%"}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Ticket Resolution Time</td>
                    <td className="px-6 py-4 text-gray-300">Avg 48 hrs</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">{"<29 hrs"}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Customer Complaints</td>
                    <td className="px-6 py-4 text-gray-300">18,000/month</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">13,500/month</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300 font-medium">Cross-Functional Clarity</td>
                    <td className="px-6 py-4 text-gray-300">Low (blame game)</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">100% accountability map</td>
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
                <p className="text-gray-300">Solve <strong>real problems</strong>, not assumptions</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Save costs by fixing root issues, not symptoms</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Unify teams through <strong>data-backed diagnosis</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Avoid chaos during growth or scale</p>
              </div>
            </div>
          </div>

          {/* Suggested Tagline */}
          <div className="text-center">
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full px-8 py-4 border border-primary-500/30">
                <Award className="w-6 h-6 text-primary-400" />
                <span className="text-white font-semibold">"Clarity First. Fix What Matters. Then Scale."</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindWhatsBrokenAndWhy;