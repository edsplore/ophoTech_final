import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Pause, ChevronLeft, ChevronRight, ExternalLink, Download } from 'lucide-react';

interface CaseStudy {
  industry: string;
  title: string;
  story: string;
  metric: string;
  quote: string;
  author: string;
  position: string;
}

interface ServiceData {
  title: string;
  fullDescription: string;
  heroImage: string;
  caseStudies: CaseStudy[];
  beforeAfterKPIs: {
    [key: string]: { before: string; after: string; label: string };
  };
}

const ServiceDetail: React.FC = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const navigate = useNavigate();
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBefore, setShowBefore] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesData: { [key: string]: ServiceData } = {
    'ai-threat-intelligence': {
      title: 'AI-Powered Threat Intelligence',
      fullDescription: 'Our AI-powered threat intelligence platform leverages advanced machine learning algorithms to detect, analyze, and predict cyber threats in real-time. By processing millions of data points from global threat feeds, network traffic, and behavioral patterns, we provide proactive security intelligence that helps organizations stay ahead of emerging attacks and sophisticated threat actors.',
      heroImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caseStudies: [
        {
          industry: 'Retail',
          title: 'E-commerce Revenue Optimization',
          story: 'A major retail chain implemented our AI analytics to optimize inventory management and customer personalization. Through predictive modeling and real-time data processing, they reduced stockouts by 35% while increasing customer satisfaction scores. The system now processes over 2 million transactions daily, providing instant insights for strategic decisions.',
          metric: '40% increase in revenue',
          quote: 'The AI analytics platform transformed how we understand our customers and manage inventory.',
          author: 'Sarah Johnson',
          position: 'VP of Operations'
        },
        {
          industry: 'FinTech',
          title: 'Fraud Detection Enhancement',
          story: 'A financial services company deployed our cloud AI solution to enhance fraud detection capabilities. The system analyzes transaction patterns in real-time, reducing false positives by 60% while catching 95% more fraudulent activities. Machine learning models continuously adapt to new fraud patterns, ensuring robust protection.',
          metric: '95% fraud detection rate',
          quote: 'Our fraud losses decreased by 80% within the first quarter of implementation.',
          author: 'Michael Chen',
          position: 'Chief Security Officer'
        },
        {
          industry: 'Healthcare',
          title: 'Patient Care Optimization',
          story: 'A healthcare network utilized our AI analytics to optimize patient flow and resource allocation. The system predicts patient admission rates, optimizes staff scheduling, and identifies high-risk patients early. This resulted in 25% shorter wait times and improved patient outcomes across all facilities.',
          metric: '25% reduction in wait times',
          quote: 'Patient satisfaction scores reached an all-time high thanks to the predictive insights.',
          author: 'Dr. Emily Rodriguez',
          position: 'Chief Medical Officer'
        }
      ],
      beforeAfterKPIs: {
        processing: { before: '24 hours', after: '2 minutes', label: 'Data Processing Time' },
        accuracy: { before: '72%', after: '94%', label: 'Prediction Accuracy' },
        costs: { before: '$50K/month', after: '$18K/month', label: 'Infrastructure Costs' }
      }
    },
    'secure-digital-transformation': {
      title: 'Secure Digital Transformation',
      fullDescription: 'Our secure digital transformation services ensure your business modernization journey maintains the highest standards of security and compliance. We integrate security-by-design principles into every aspect of your digital transformation, from cloud migration to process automation, ensuring your organization can innovate safely and confidently.',
      heroImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caseStudies: [
        {
          industry: 'Retail',
          title: 'Multi-Channel Analytics Dashboard',
          story: 'A retail conglomerate needed unified visibility across online and offline channels. We built comprehensive BI dashboards that integrate POS, e-commerce, and inventory data. Real-time analytics now drive pricing strategies, promotional campaigns, and inventory decisions across 200+ locations.',
          metric: '60% faster reporting',
          quote: 'We can now make data-driven decisions in minutes instead of days.',
          author: 'David Park',
          position: 'Director of Analytics'
        },
        {
          industry: 'FinTech',
          title: 'Risk Management Dashboard',
          story: 'A lending platform implemented our BI solution to monitor loan performance and risk metrics. Automated reporting reduced manual work by 80%, while predictive dashboards help identify potential defaults early. The system processes millions of data points to provide actionable insights for risk management.',
          metric: '80% reduction in manual work',
          quote: 'Our risk assessment accuracy improved dramatically with real-time insights.',
          author: 'Lisa Wang',
          position: 'Risk Management Director'
        },
        {
          industry: 'Healthcare',
          title: 'Operational Excellence Dashboard',
          story: 'A hospital system deployed our BI platform to track operational metrics across departments. The solution provides real-time visibility into patient flow, resource utilization, and financial performance. Automated alerts help administrators respond quickly to operational challenges.',
          metric: '45% improvement in efficiency',
          quote: 'The dashboards give us unprecedented visibility into our operations.',
          author: 'Dr. James Miller',
          position: 'Chief Operations Officer'
        }
      ],
      beforeAfterKPIs: {
        reporting: { before: '5 days', after: '30 minutes', label: 'Report Generation Time' },
        accuracy: { before: '85%', after: '98%', label: 'Data Accuracy' },
        decisions: { before: '2 weeks', after: '2 hours', label: 'Decision Making Speed' }
      }
    },
    'smartops-platform': {
      title: 'SmartOps Platform',
      fullDescription: 'Our SmartOps platform revolutionizes IT operations through intelligent automation and predictive analytics. By combining AI-driven insights with automated workflows, we help organizations optimize resource allocation, reduce operational overhead, and achieve unprecedented levels of operational efficiency and reliability.',
      heroImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caseStudies: [
        {
          industry: 'Retail',
          title: 'E-commerce Platform Migration',
          story: 'A growing e-commerce company migrated their entire infrastructure to AWS with our guidance. We designed a scalable architecture that handles traffic spikes during sales events. The new cloud setup reduced infrastructure costs by 45% while improving site performance and reliability.',
          metric: '45% cost reduction',
          quote: 'The cloud migration exceeded our expectations in both cost savings and performance.',
          author: 'Rachel Green',
          position: 'CTO'
        },
        {
          industry: 'FinTech',
          title: 'Multi-Cloud Security Implementation',
          story: 'A financial services firm needed a secure, compliant cloud environment across multiple regions. We implemented a multi-cloud strategy with robust security controls, ensuring regulatory compliance while maintaining high availability. The solution supports millions of transactions with 99.99% uptime.',
          metric: '99.99% uptime achieved',
          quote: 'Our regulatory audits now pass with flying colors thanks to the robust cloud architecture.',
          author: 'Thomas Anderson',
          position: 'Chief Compliance Officer'
        },
        {
          industry: 'Healthcare',
          title: 'HIPAA-Compliant Cloud Migration',
          story: 'A healthcare provider migrated patient data systems to a HIPAA-compliant cloud infrastructure. We ensured data security, implemented disaster recovery, and optimized costs. The new system supports telemedicine services and provides better patient data accessibility for healthcare providers.',
          metric: '50% faster data access',
          quote: 'Patient care improved significantly with faster access to medical records.',
          author: 'Dr. Maria Santos',
          position: 'Chief Information Officer'
        }
      ],
      beforeAfterKPIs: {
        costs: { before: '$120K/month', after: '$60K/month', label: 'Infrastructure Costs' },
        uptime: { before: '99.5%', after: '99.99%', label: 'System Uptime' },
        deployment: { before: '2 weeks', after: '2 hours', label: 'Deployment Time' }
      }
    },
    'neural-cyber-defense': {
      title: 'Neural Cyber Defense',
      fullDescription: 'Our neural cyber defense system represents the next generation of cybersecurity, powered by advanced neural networks that learn and adapt to counter sophisticated cyber attacks. This intelligent defense mechanism provides real-time threat detection, automated response capabilities, and continuous learning to stay ahead of evolving security threats.',
      heroImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caseStudies: [
        {
          industry: 'Retail',
          title: 'AI-Powered Customer Service',
          story: 'A retail chain deployed our AI chatbot to handle customer inquiries across multiple channels. The AI handles 80% of customer queries automatically, providing instant responses 24/7. Customer satisfaction increased while support costs decreased by 60%. The system learns from each interaction to improve responses.',
          metric: '80% query automation',
          quote: 'Customer satisfaction scores reached new highs with instant AI support.',
          author: 'Jennifer Lee',
          position: 'Customer Experience Director'
        },
        {
          industry: 'FinTech',
          title: 'Intelligent Document Processing',
          story: 'A financial institution implemented our AI solution to process loan applications and compliance documents. The system extracts key information, validates data, and flags potential issues automatically. Processing time reduced from days to minutes while maintaining 99% accuracy in data extraction.',
          metric: '99% accuracy in processing',
          quote: 'Loan approval times decreased dramatically while maintaining strict compliance standards.',
          author: 'Robert Kim',
          position: 'Operations Manager'
        },
        {
          industry: 'Healthcare',
          title: 'Medical Image Analysis AI',
          story: 'A radiology department deployed our AI system to assist with medical image analysis. The AI helps radiologists identify potential abnormalities faster and more accurately. Diagnostic accuracy improved by 15% while reducing analysis time by 40%, enabling faster patient care.',
          metric: '15% accuracy improvement',
          quote: 'The AI assistant has become an invaluable tool for our radiologists.',
          author: 'Dr. Susan Taylor',
          position: 'Chief Radiologist'
        }
      ],
      beforeAfterKPIs: {
        automation: { before: '20%', after: '85%', label: 'Process Automation' },
        response: { before: '4 hours', after: '30 seconds', label: 'Response Time' },
        accuracy: { before: '78%', after: '96%', label: 'Task Accuracy' }
      }
    },
    'predictive-maintenance-ai': {
      title: 'Predictive Maintenance AI',
      fullDescription: 'Our predictive maintenance AI solution transforms traditional maintenance approaches by analyzing equipment data, sensor readings, and operational patterns to predict failures before they occur. This proactive approach reduces downtime, optimizes maintenance schedules, and significantly extends equipment lifespan while reducing operational costs.',
      heroImage: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caseStudies: [
        {
          industry: 'Retail',
          title: 'Customer Churn Prediction',
          story: 'A subscription-based retailer implemented our churn prediction model to identify at-risk customers. The system analyzes purchase patterns, engagement metrics, and behavioral data to predict churn probability. Proactive retention campaigns reduced churn by 35% and increased customer lifetime value.',
          metric: '35% churn reduction',
          quote: 'We can now retain customers before they even think about leaving.',
          author: 'Mark Thompson',
          position: 'VP of Customer Success'
        },
        {
          industry: 'FinTech',
          title: 'Credit Risk Modeling',
          story: 'A lending platform enhanced their credit risk assessment using our advanced data science models. By analyzing alternative data sources and behavioral patterns, the model improved risk prediction accuracy by 25%. This enabled better lending decisions and reduced default rates significantly.',
          metric: '25% better risk prediction',
          quote: 'Our loan portfolio performance improved dramatically with better risk models.',
          author: 'Angela Davis',
          position: 'Chief Risk Officer'
        },
        {
          industry: 'Healthcare',
          title: 'Treatment Outcome Prediction',
          story: 'A healthcare network used our data science platform to predict treatment outcomes for chronic conditions. The models analyze patient history, treatment protocols, and outcomes to recommend optimal care paths. Patient outcomes improved by 20% while reducing treatment costs.',
          metric: '20% better outcomes',
          quote: 'Predictive insights help us provide more personalized and effective care.',
          author: 'Dr. Kevin Brown',
          position: 'Director of Clinical Research'
        }
      ],
      beforeAfterKPIs: {
        prediction: { before: '65%', after: '92%', label: 'Prediction Accuracy' },
        insights: { before: '2 weeks', after: '2 days', label: 'Time to Insights' },
        decisions: { before: '40%', after: '85%', label: 'Data-Driven Decisions' }
      }
    },
    'llm-compliance-agents': {
      title: 'LLM Agents for Compliance',
      fullDescription: 'Our Large Language Model agents are specifically designed for regulatory compliance, automating complex compliance monitoring, reporting, and documentation processes. These intelligent agents understand regulatory requirements across multiple industries and ensure continuous adherence to evolving compliance standards while reducing manual oversight burden.',
      heroImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caseStudies: [
        {
          industry: 'Retail',
          title: 'PCI DSS Compliance Implementation',
          story: 'A retail chain needed to secure customer payment data and achieve PCI DSS compliance. We implemented comprehensive network security controls, including encryption, access controls, and monitoring systems. The solution protects millions of transactions while maintaining seamless customer experience.',
          metric: '100% PCI compliance',
          quote: 'We achieved full compliance while actually improving our system performance.',
          author: 'Steven Wilson',
          position: 'IT Security Manager'
        },
        {
          industry: 'FinTech',
          title: 'Zero-Trust Security Architecture',
          story: 'A financial services company implemented our zero-trust security model to protect sensitive financial data. The solution includes multi-factor authentication, micro-segmentation, and continuous monitoring. Security incidents decreased by 90% while maintaining user productivity.',
          metric: '90% fewer security incidents',
          quote: 'Zero-trust architecture gave us confidence in our security posture.',
          author: 'Patricia Martinez',
          position: 'CISO'
        },
        {
          industry: 'Healthcare',
          title: 'HIPAA Security Framework',
          story: 'A healthcare organization needed robust security to protect patient data and ensure HIPAA compliance. We deployed comprehensive security controls including encryption, access management, and audit logging. The system now protects millions of patient records with zero security breaches.',
          metric: 'Zero security breaches',
          quote: 'Patient data security is now our strongest competitive advantage.',
          author: 'Dr. Richard Clark',
          position: 'Chief Security Officer'
        }
      ],
      beforeAfterKPIs: {
        incidents: { before: '15/month', after: '1/month', label: 'Security Incidents' },
        compliance: { before: '75%', after: '100%', label: 'Compliance Score' },
        response: { before: '4 hours', after: '15 minutes', label: 'Incident Response Time' }
      }
    }
  };

  const currentService = servicesData[solutionId || ''];

  if (!currentService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Solution Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % currentService.caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + currentService.caseStudies.length) % currentService.caseStudies.length);
  };

  React.useEffect(() => {
    let interval: number | undefined;
    if (isPlaying) {
      interval = window.setInterval(nextCaseStudy, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, currentService.caseStudies.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Hero Section with Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="order-2 lg:order-1">
              {/* Decorative line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                <div className="w-2 h-2 bg-primary-500 rounded-full mx-3"></div>
                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {currentService.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                {currentService.fullDescription}
              </p>

              {/* Bottom decorative element */}
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
                <div className="w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="glass-effect rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl">
                  <img
                    src={currentService.heroImage}
                    alt={currentService.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300">
              Real results from real clients across different industries
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">
                {currentService.caseStudies[currentCaseStudy].industry} Case Study
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <button
                  onClick={prevCaseStudy}
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextCaseStudy}
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h4 className="text-xl font-bold text-white mb-4">
                  {currentService.caseStudies[currentCaseStudy].title}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {currentService.caseStudies[currentCaseStudy].story}
                </p>
                <button className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  Read Full Case Study
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary-400 mb-2">
                    {currentService.caseStudies[currentCaseStudy].metric}
                  </div>
                  <div className="text-sm text-gray-400">Key Result</div>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <blockquote className="text-white italic mb-4">
                    "{currentService.caseStudies[currentCaseStudy].quote}"
                  </blockquote>
                  <div className="text-sm text-gray-400">
                    <div className="font-semibold text-white">
                      {currentService.caseStudies[currentCaseStudy].author}
                    </div>
                    {currentService.caseStudies[currentCaseStudy].position}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                {currentService.caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCaseStudy(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentCaseStudy ? 'bg-primary-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After KPI Toggle */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Impact
            </h2>
            <p className="text-lg text-gray-300">
              See the difference our solutions make
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20">
            <div className="flex justify-center mb-8">
              <div className="bg-gray-700 rounded-lg p-1 flex">
                <button
                  onClick={() => setShowBefore(true)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    showBefore ? 'bg-red-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowBefore(false)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    !showBefore ? 'bg-green-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  After
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(currentService.beforeAfterKPIs).map(([key, kpi]) => (
                <div key={key} className="text-center">
                  <div className={`text-4xl font-bold mb-2 transition-all duration-300 ${
                    showBefore ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {showBefore ? kpi.before : kpi.after}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how {currentService.title.toLowerCase()} can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/engagement-model')}
              className="btn-primary"
            >
              Start Your Project
            </button>
            <button className="btn-secondary">
              <Download className="w-5 h-5" />
              Download Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;