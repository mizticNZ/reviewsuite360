import { ArrowRight, CheckCircle2, PlayCircle, Star, Gift, Zap, Video, TrendingUp, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const AFFILIATE_LINK = "https://jvz3.com/c/158567/434579/"; // Replace with your actual approved affiliate link
  const BUNDLE_LINK = "https://jvz7.com/c/158567/434783/"; // Bundle deal affiliate link

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Banner */}
      <div className="bg-orange-600 text-white text-center py-3 px-4 text-sm font-bold uppercase tracking-wider">
        ⚠️ Warning: This exclusive bonus package will be removed once the timer hits zero!
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abstract/1920/1080?blur=10')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 font-semibold mb-8 border border-orange-500/20">
            <Star className="w-4 h-4 fill-orange-400" />
            <span>ReviewSuite 360 Exclusive Review & Bonus</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            The First AI App That Builds Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Entire Faceless YouTube Review</span> + Bonuses + Bonus Page In Minutes!
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-medium">
            Built on the exact review + bonus method used to generate over $250k from FREE YouTube traffic. Compete from day one!
          </p>

          {/* Video Placeholder */}
          <div className="relative max-w-4xl mx-auto aspect-video bg-slate-900 rounded-2xl shadow-2xl shadow-orange-500/10 border border-slate-800 overflow-hidden mb-12 group cursor-pointer flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>
            <PlayCircle className="w-20 h-20 text-orange-500 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 z-10" />
            <p className="absolute bottom-6 text-slate-400 font-medium z-10">Click to watch my full ReviewSuite 360 review</p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-4">
            <Link 
              href={AFFILIATE_LINK}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative">Click Here To Get ReviewSuite 360 + My MEGA Bonus</span>
              <ArrowRight className="relative w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Secure Checkout via JVZoo
            </p>
          </div>
        </div>
      </header>

      {/* Mega Bonus Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-orange-500">MEGA</span> Bonus</h2>
            <p className="text-xl text-slate-400">You won&apos;t find this anywhere else. I&apos;ve partnered with Jono Armstrong to give you this exclusive gift.</p>
          </div>

          <div className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-orange-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-bold text-sm mb-6 border border-orange-500/30">
                  REAL WORLD VALUE: $1,497.00
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Ministry of Freedom 2.0</h3>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  When you pick up ReviewSuite 360 through my link today, you&apos;re getting <strong>FREE access</strong> to Jono Armstrong&apos;s flagship mentoring program, Ministry of Freedom 2.0.
                </p>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  This is the exact course he currently sells for $1,497. It&apos;s a complete A-Z blueprint on how to build a highly profitable affiliate marketing business from scratch.
                </p>
                <ul className="space-y-4">
                  {[
                    "Complete step-by-step video training",
                    "Live Q&A calls and community support",
                    "Advanced traffic strategies (Free & Paid)",
                    "Product creation and launch secrets"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                      <span className="text-slate-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <Image 
                  src="https://picsum.photos/seed/course/800/600" 
                  alt="Ministry of Freedom 2.0" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <span className="bg-orange-600 text-white font-bold px-6 py-2 rounded-full shadow-lg inline-block text-lg">
                    Included FREE Today!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Bonuses Section */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Plus My <span className="text-orange-500">5 Exclusive Custom Bonuses</span></h2>
            <p className="text-xl text-slate-400">Custom-built to help you dominate your affiliate campaigns and maximize your ReviewSuite 360 results.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "The \"Launch Jacking\" Authority Kit", 
                subtitle: "How to Build, Rank, and Profit from Affiliate Reviews",
                desc: "A complete blueprint on how to build, rank, and profit from affiliate reviews. Discover my 48-hour pre-launch checklist, SEO sniper formula, and exact 7-day workflow to dominate any launch." 
              },
              { 
                title: "The \"Million Dollar\" Review Script Library", 
                subtitle: "3 Proven Templates for Maximum Conversions",
                desc: "Three proven, fill-in-the-blank script templates designed for maximum conversions. Whether you're doing a comparison, problem/solution, or live demo, these scripts tell you exactly what to say." 
              },
              { 
                title: "The \"Unlimited Traffic\" Rolodex", 
                subtitle: "Where to find buyers when you have zero followers",
                desc: "Discover exactly where to find hungry buyers even if you have zero followers. Uncover hidden traffic hubs, syndication secrets, and copy-paste outreach scripts to drive free traffic." 
              },
              { 
                title: "The \"High-Conversion\" Asset Suite", 
                subtitle: "Professional Tools to Make You Look Like an Expert",
                desc: "Professional tools and psychological triggers to make you look like an expert. Learn the secrets behind high-CTR thumbnails, color psychology for buttons, and how to design assets that demand clicks." 
              },
              { 
                title: "The \"Launch Case Study\" Masterclass", 
                subtitle: "Behind-the-scenes look at my exact launch strategy",
                desc: "A behind-the-scenes look at my exact launch strategy. Learn how to analyze JV documents for hidden opportunities, my rapid 3-page setup process, and the 24-hour ranking method to trigger the YouTube algorithm." 
              }
            ].map((bonus, i) => (
              <div key={i} className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-orange-500/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[50px] rounded-full group-hover:bg-orange-500/10 transition-colors"></div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 font-bold text-xl mb-6 border border-orange-500/20">
                  #{i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-100">{bonus.title}</h3>
                <p className="text-orange-400 text-sm font-semibold mb-4 uppercase tracking-wider">{bonus.subtitle}</p>
                <p className="text-slate-400 leading-relaxed">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is ReviewSuite 360 */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Exactly Is <span className="text-orange-500">ReviewSuite 360?</span></h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                ReviewSuite 360 is an all-in-one launch jacking software built with AI. It writes your script for you, lets you stay anonymous with built-in video filters, builds your high-converting bonus page, creates and designs your bonuses at the push of a button, and delivers everything automatically.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Video, title: "Inbuilt Video Recording & Editing", desc: "Teleprompter & smart AI editing built right in." },
                  { icon: Zap, title: "AI-Generated Scripts", desc: "Ready to record in minutes based on proven methods." },
                  { icon: ShieldCheck, title: "Faceless Options", desc: "Built-in video filters & done-for-you B-roll so you can stay anonymous." },
                  { icon: TrendingUp, title: "Bonus Page Builder", desc: "Complete AI-powered high-converting bonus page builder." },
                  { icon: Gift, title: "Push-Button Bonus Creation", desc: "Strategic stacking handled inside the app." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-200 mb-1">{feature.title}</h4>
                      <p className="text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 opacity-20 blur-2xl rounded-[3rem]"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
                <Image 
                  src="https://picsum.photos/seed/dashboard/1024/768" 
                  alt="ReviewSuite 360 Dashboard" 
                  fill 
                  className="object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-slate-950/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-800 text-center">
                    <p className="text-orange-400 font-bold text-lg mb-1">Launch Jacking</p>
                    <p className="text-white font-medium">Simplified & Automated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Bonuses */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Plus All These <span className="text-orange-500">Vendor Bonuses</span></h2>
            <p className="text-xl text-slate-400">You get all of these automatically delivered when you purchase today.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Launch Calendar Intelligence Vault", value: "$27", desc: "A curated, continuously updated launch calendar showing upcoming HOT product releases." },
              { title: "10 High-Converting Review Video Templates", value: "$67", desc: "Proven Hook–Problem–Solution–Demo–CTA structures you can plug into ReviewSuite 360." },
              { title: "YouTube Ranking & Buyer-Intent Optimization Guide", value: "$197", desc: "A step-by-step blueprint showing how to structure titles, descriptions, tags, and thumbnails." },
              { title: "Contest Leaderboard Domination Playbook", value: "$197", desc: "A short training revealing how to position your campaign during Day 1–2 launch momentum." }
            ].map((bonus, i) => (
              <div key={i} className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-orange-500/50 transition-colors group">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                  <Gift className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-200">{bonus.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{bonus.desc}</p>
                <div className="mt-auto inline-block px-3 py-1 rounded-md bg-slate-900 text-orange-400 text-sm font-semibold border border-slate-800">
                  Value: {bonus.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Funnel */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing & <span className="text-orange-500">Upgrades</span></h2>
            <p className="text-xl text-slate-400">Choose the package that best fits your goals.</p>
          </div>

          {/* Bundle Deal */}
          <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-1 mb-12 shadow-2xl shadow-orange-500/20">
            <div className="bg-slate-950 rounded-[1.4rem] p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                <div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-bold text-sm mb-4 border border-orange-500/30">
                    BEST VALUE
                  </div>
                  <h3 className="text-3xl font-bold text-white">ReviewSuite 360 BUNDLE</h3>
                  <p className="text-slate-400 mt-2">Get EVERYTHING for one low price.</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-slate-400 line-through text-lg">$445.00</p>
                  <p className="text-5xl font-extrabold text-white">$317<span className="text-2xl text-slate-400 font-medium">.00</span></p>
                  <p className="text-orange-400 text-sm font-bold mt-2">Use Coupon: Suite360 for $50 OFF!</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "ReviewSuite360 Core (normally $37)",
                  "ReviewSuite360 Pro (normally $67)",
                  "ReviewSuite360 Professional (normally $97)",
                  "ReviewSuite360 Done-For-You (normally $147)",
                  "ReviewSuite360 100% Resellers License (normally $97)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href={BUNDLE_LINK}
                className="block w-full py-4 text-center text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all"
              >
                Get The Bundle Deal Now
              </Link>
            </div>
          </div>

          {/* Funnel Breakdown */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Front End: ReviewSuite 360", price: "$37.00", desc: "The core all-in-one launch jacking software built with AI. 5 projects/month." },
              { title: "BUMP: Inbuilt Bonus Library", price: "$27.00", desc: "Unlock 25 high-converting, desirable ready-to-use bonuses pre-loaded." },
              { title: "OTO 1: Pro", price: "$67.00", desc: "Launch up to 30 complete review campaigns per month." },
              { title: "OTO 2: Professional", price: "$97.00", desc: "100-bonus high-converting library pre-loaded inside your dashboard." },
              { title: "OTO 3: Done-For-You", price: "$147.00", desc: "One complete launch campaign deployed for you every week for 52 weeks." },
              { title: "OTO 4: Resellers", price: "$97.00", desc: "Own 100% of every commission generated across the entire offer." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-slate-200 pr-4">{item.title}</h4>
                  <span className="text-orange-400 font-bold whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-slate-400 text-sm mt-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Don&apos;t Miss Out On This <span className="text-orange-500">Incredible Offer</span></h2>
          <p className="text-xl text-slate-400 mb-12">
            Remember, when you purchase through my link, you get ReviewSuite 360, all vendor bonuses, AND my exclusive Mega Bonus: Ministry of Freedom 2.0 (Worth $1,497).
          </p>
          
          <Link 
            href={AFFILIATE_LINK}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 text-2xl font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative">Secure Your Copy & Bonuses Now</span>
            <ArrowRight className="relative w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
          <p className="mt-6 text-slate-500 text-sm">Your bonuses will be delivered automatically inside your JVZoo purchase receipt.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4">© {new Date().getFullYear()} ReviewSuite 360 Bonus Page. All rights reserved.</p>
          <p className="max-w-3xl mx-auto text-xs">
            Disclaimer: I am an independent affiliate, not an employee. I receive referral payments from the vendor. The opinions expressed here are my own and are not official statements of the vendor.
          </p>
        </div>
      </footer>
    </div>
  );
}
