import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Link as LinkIcon, CheckCircle, Target, Zap, Award } from 'lucide-react';

const EmergingTechRadar: React.FC = () => {
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

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Title */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                <LinkIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Emerging Tech Radar
                </h1>
                <p className="text-lg text-gray-300 mt-2">OphoTech-Specific Case Study</p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl max-w-md w-full">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Emerging Tech Radar"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Case Study Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Case Study: Identifying and Adopting Generative AI for Process Automation in Financial Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto"></div>
          </div>

          {/* Client Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Client</h3>
              <p className="text-gray-300">Mid-sized Financial Services Company</p>
              <p className="text-primary-400 text-sm">(Pan-India operations)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Increasing customer onboarding time and manual compliance checks; lagging behind in AI adoption
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                OphoTech's Emerging Tech Radar identified early-stage GenAI document processing tools and auto-KYC solutions from global startups (USA, Israel, and Singapore) through its pulse monitoring system.
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
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <h4 className="text-xl font-bold text-white">Tech Sensing</h4>
                    </div>
                    <p className="text-gray-300">Tracked 30+ global GenAI tools over 3 months using AI-powered landscape mapping</p>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>

                {/* Step 2 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <h4 className="text-xl font-bold text-white">Evaluation Framework</h4>
                    </div>
                    <p className="text-gray-300">Shortlisted top 5 tools based on compliance, scalability, and cost</p>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>

                {/* Step 3 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <h4 className="text-xl font-bold text-white">Pilot Testing</h4>
                    </div>
                    <p className="text-gray-300">Integrated a selected GenAI tool for onboarding + e-KYC process</p>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>

                {/* Step 4 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <h4 className="text-xl font-bold text-white">Go-Live</h4>
                    </div>
                    <p className="text-gray-300">Deployed the solution across 3 business units with change enablement and governance</p>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Business Impact</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">70%</div>
                <p className="text-gray-300">reduction in customer onboarding time (from 10 days to 3 days)</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">90%</div>
                <p className="text-gray-300">accuracy in document classification and fraud detection using GenAI</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">40%</div>
                <p className="text-gray-300">reduction in manual compliance workload</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">Award</div>
                <p className="text-gray-300">Recognized by an industry forum for "Most Innovative FinTech Process 2024"</p>
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
                  <span className="text-white font-semibold">Customer Onboarding Time</span>
                  <span className="text-primary-400 font-bold">3 days</span>
                </div>
                <div className="text-sm text-gray-400">Before: 10 days → After: 3 days</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Document Processing Accuracy</span>
                  <span className="text-primary-400 font-bold">90%+</span>
                </div>
                <div className="text-sm text-gray-400">Before: 70% → After: 90%+</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Compliance Review Time</span>
                  <span className="text-primary-400 font-bold">1 hour/file</span>
                </div>
                <div className="text-sm text-gray-400">Before: 5 hours/file → After: 1 hour/file</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Tech Discovery Time</span>
                  <span className="text-primary-400 font-bold">Automated (10 days)</span>
                </div>
                <div className="text-sm text-gray-400">Before: Manual (8 weeks) → After: Automated (10 days)</div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-lg border border-white/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Metric</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Before</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">After Using OphoTech's Emerging Tech Radar</th>
                  </tr>
                </thead>
                <tbody className="bg-white/5">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Customer Onboarding Time</td>
                    <td className="px-6 py-4 text-gray-300">10 days</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">3 days</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Document Processing Accuracy</td>
                    <td className="px-6 py-4 text-gray-300">70%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">90%+</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Compliance Review Time</td>
                    <td className="px-6 py-4 text-gray-300">5 hours/file</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">1 hour/file</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300 font-medium">Tech Discovery Time</td>
                    <td className="px-6 py-4 text-gray-300">Manual (8 weeks)</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">Automated (10 days)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Key Takeaways for Website</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Early access to the most relevant and emerging tech solutions</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Rapid evaluation framework to move from discovery to deployment</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Domain-matched innovation—not generic scouting</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Proven savings and acceleration metrics across mid-size to enterprise clients</p>
              </div>
            </div>
          </div>

          {/* Success Metrics Highlight */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full px-8 py-4 border border-primary-500/30">
              <Award className="w-6 h-6 text-primary-400" />
              <span className="text-white font-semibold">Most Innovative FinTech Process 2024</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergingTechRadar;