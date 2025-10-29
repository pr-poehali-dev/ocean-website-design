import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F1C] via-[#1A1F2C] to-[#0A0F1C]">
      <header className="fixed top-0 w-full z-50 bg-[#0A0F1C]/80 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Ocean</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQs</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white">
            Download
          </Button>
        </nav>
      </header>

      <main className="pt-24">
        <section id="home" className="container mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Stop Cheaters.<br />
                <span className="bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
                  Protect Your Game.
                </span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Ocean is the cutting-edge anti-cheat solution that detects and prevents all types of cheating in real-time. Built for speed, security, and reliability.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0369A1] text-white text-lg px-8 py-6 animate-glow"
              >
                Start Detecting Cheaters
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <div className="flex gap-8 pt-4">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-white/60">Detection Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">&lt;5ms</div>
                  <div className="text-sm text-white/60">Response Time</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/60">Protection</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/20 to-[#0284C7]/20 blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/ee1051d3-7def-4477-ac4f-f6b174d4bafd/files/c1ea35e0-edc5-4d51-a59b-bf770101b9c7.jpg" 
                alt="Ocean Anti-Cheat Dashboard"
                className="relative rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="features" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Powerful Features
            </h2>
            <p className="text-xl text-white/60">
              Everything you need to keep your game secure
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur border-white/10 p-8 space-y-4 hover:bg-white/10 transition-all animate-slide-in">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center">
                <Icon name="Search" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Detect All Cheats</h3>
              <p className="text-white/70">
                Advanced scanning technology identifies every type of cheat in any game, from aimbots to wallhacks.
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur border-white/10 p-8 space-y-4 hover:bg-white/10 transition-all animate-slide-in" style={{animationDelay: '0.1s'}}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center">
                <Icon name="Users" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Protect Community</h3>
              <p className="text-white/70">
                Create a fair gaming environment and build trust with your player base through reliable protection.
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur border-white/10 p-8 space-y-4 hover:bg-white/10 transition-all animate-slide-in" style={{animationDelay: '0.2s'}}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center">
                <Icon name="Zap" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Boost Performance</h3>
              <p className="text-white/70">
                Lightweight design ensures zero impact on game performance while maintaining maximum protection.
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur border-white/10 p-8 space-y-4 hover:bg-white/10 transition-all animate-slide-in" style={{animationDelay: '0.3s'}}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center">
                <Icon name="Lock" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Military-Grade Security</h3>
              <p className="text-white/70">
                Bank-level encryption and security protocols protect your game and player data from any threats.
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur border-white/10 p-8 space-y-4 hover:bg-white/10 transition-all animate-slide-in" style={{animationDelay: '0.4s'}}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center">
                <Icon name="Gauge" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Real-Time Detection</h3>
              <p className="text-white/70">
                Instant cheat detection and ban system keeps your game clean without any delays or false positives.
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur border-white/10 p-8 space-y-4 hover:bg-white/10 transition-all animate-slide-in" style={{animationDelay: '0.5s'}}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center">
                <Icon name="Settings" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Customizable Platform</h3>
              <p className="text-white/70">
                Flexible API and dashboard allow seamless integration with any game engine or platform.
              </p>
            </Card>
          </div>
        </section>

        <section id="faq" className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/60">
                Everything you need to know about Ocean
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white/5 backdrop-blur border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-lg">
                  Why should you choose Ocean?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base">
                  Ocean combines industry-leading detection rates with minimal performance impact. Our AI-powered system adapts to new cheats instantly, while our transparent reporting gives you complete visibility. With 24/7 support and regular updates, we're committed to keeping your game secure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white/5 backdrop-blur border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-lg">
                  What types of games does Ocean protect?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base">
                  Ocean works with all major game engines including Unity, Unreal Engine, and custom engines. We support FPS, MOBA, Battle Royale, MMO, and strategy games across PC, console, and mobile platforms. Our flexible integration works with both competitive and casual games.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white/5 backdrop-blur border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-lg">
                  How quickly can Ocean detect cheats?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base">
                  Ocean operates in real-time with sub-5ms response times. Our system continuously monitors game sessions and instantly flags suspicious behavior. Most cheats are detected within seconds of activation, allowing for immediate action to protect fair gameplay.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white/5 backdrop-blur border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-lg">
                  Will Ocean impact my game's performance?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base">
                  No. Ocean is designed to be extremely lightweight, using less than 1% of system resources. Our optimized algorithms run efficiently in the background without affecting FPS, latency, or player experience. Most users won't even notice Ocean is running.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white/5 backdrop-blur border-white/10 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-lg">
                  How do I integrate Ocean into my game?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base">
                  Integration is simple with our SDK and comprehensive documentation. Most developers complete basic integration in under an hour. We provide plugins for popular engines, REST APIs for custom solutions, and a dedicated support team to help with any technical questions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Secure Your Game?
            </h2>
            <p className="text-xl text-white/70">
              Join thousands of game developers protecting their communities with Ocean
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0369A1] text-white text-lg px-8 py-6"
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0A0F1C]/50 backdrop-blur mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center">
                  <Icon name="Shield" size={18} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">Ocean</span>
              </div>
              <p className="text-white/60 text-sm">
                The most advanced anti-cheat solution for modern games.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
            © 2024 Ocean Anti-Cheat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
