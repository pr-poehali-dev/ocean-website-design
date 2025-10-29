import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center shadow-lg shadow-[#0A84FF]/30">
              <Icon name="MonitorDot" size={22} className="text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Nexus</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#security" className="text-sm text-white/70 hover:text-white transition-colors">Security</a>
            <a href="#how" className="text-sm text-white/70 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</a>
            <a href="#login" className="text-sm text-white/70 hover:text-white transition-colors">Login</a>
          </div>
          <Button className="bg-[#0A84FF] hover:bg-[#0066CC] text-white shadow-lg shadow-[#0A84FF]/30">
            Get Started
          </Button>
        </nav>
      </header>

      <section
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/ee1051d3-7def-4477-ac4f-f6b174d4bafd/files/299ece07-cbc2-4487-b7e2-46e4cac6648b.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A84FF]/10 via-transparent to-transparent"></div>
        
        <div className="relative container mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            Most Powerful<br />
            <span className="bg-gradient-to-r from-[#0A84FF] to-[#0066FF] bg-clip-text text-transparent">
              Remote Control Tool
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Мгновенный доступ, кристальное качество, абсолютная безопасность — всё в одном клике.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0A84FF] to-[#0066CC] hover:from-[#0066CC] hover:to-[#0052A3] text-white text-lg px-10 py-7 shadow-2xl shadow-[#0A84FF]/50 animate-glow mt-8"
          >
            Start Free Trial
            <Icon name="ArrowRight" size={22} className="ml-2" />
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/50" />
        </div>
      </section>

      <section id="features" className="py-32 px-6 bg-gradient-to-b from-black via-[#0A0A0A] to-black">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">See Why</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Nexus объединяет скорость, качество и безопасность в одном решении
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur border-white/10 p-10 space-y-6 hover:bg-white/10 hover:border-[#0A84FF]/50 transition-all group animate-slide-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center shadow-xl shadow-[#0A84FF]/30 group-hover:scale-110 transition-transform">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Speed</h3>
              <p className="text-white/70 leading-relaxed">
                Мгновенное подключение без задержек. Скорость отклика менее 10ms для максимальной производительности.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur border-white/10 p-10 space-y-6 hover:bg-white/10 hover:border-[#0A84FF]/50 transition-all group animate-slide-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center shadow-xl shadow-[#0A84FF]/30 group-hover:scale-110 transition-transform">
                <Icon name="Sparkles" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Quality</h3>
              <p className="text-white/70 leading-relaxed">
                4K-поток с адаптивным сжатием. Кристально чистая картинка при любом качестве соединения.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur border-white/10 p-10 space-y-6 hover:bg-white/10 hover:border-[#0A84FF]/50 transition-all group animate-slide-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center shadow-xl shadow-[#0A84FF]/30 group-hover:scale-110 transition-transform">
                <Icon name="ShieldCheck" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Security</h3>
              <p className="text-white/70 leading-relaxed">
                End-to-end шифрование и защита от перехвата. Ваши данные под надёжной защитой военного уровня.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur border-white/10 p-10 space-y-6 hover:bg-white/10 hover:border-[#0A84FF]/50 transition-all group animate-slide-in" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center shadow-xl shadow-[#0A84FF]/30 group-hover:scale-110 transition-transform">
                <Icon name="BrainCircuit" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">AI Guard</h3>
              <p className="text-white/70 leading-relaxed">
                ИИ-детектор аномалий и читов в реальном времени. Умная система обнаруживает подозрительное поведение мгновенно.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur border-white/10 p-10 space-y-6 hover:bg-white/10 hover:border-[#0A84FF]/50 transition-all group animate-slide-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center shadow-xl shadow-[#0A84FF]/30 group-hover:scale-110 transition-transform">
                <Icon name="MousePointerClick" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Control</h3>
              <p className="text-white/70 leading-relaxed">
                Полный контроль над сессией с мгновенным откликом. Управляйте удалённым устройством как своим.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="security" className="py-32 px-6 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              A Reliable Solution<br />Against Cheaters
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Комплексная защита вашей игровой среды от любых угроз
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "ScanEye", title: "Cheater Tracing", desc: "Автоматическое отслеживание подозрительной активности игроков в реальном времени" },
              { icon: "BrainCircuit", title: "AI Detection", desc: "Нейросетевой анализ паттернов поведения для выявления читов" },
              { icon: "Headset", title: "Active Support", desc: "Круглосуточная техническая поддержка и помощь модераторам" },
              { icon: "Users", title: "Big Community", desc: "Более 50,000 активных администраторов и модераторов" },
              { icon: "BookOpen", title: "Documentation", desc: "Подробная документация и гайды по настройке системы" },
              { icon: "Lock", title: "Secure Sessions", desc: "Защищённые сессии с шифрованием и контролем доступа" },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur border-white/10 p-8 space-y-4 hover:bg-white/10 hover:border-[#0A84FF]/30 transition-all animate-fade-in"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-[#0A84FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0A84FF10_0%,_transparent_70%)]"></div>
        
        <div className="container mx-auto relative">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">How Nexus Works</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Простая настройка. Мгновенный результат. Полная безопасность.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-6 animate-fade-in">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center shadow-2xl shadow-[#0A84FF]/40">
                <Icon name="Download" size={40} className="text-white" />
              </div>
              <div className="space-y-3">
                <div className="text-sm font-bold text-[#0A84FF] tracking-wider">STEP 1</div>
                <h3 className="text-3xl font-bold">Downloading</h3>
                <p className="text-white/70 leading-relaxed">
                  Установите Nexus за 10 секунд. Лёгкий установщик без лишних вопросов.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center shadow-2xl shadow-[#0A84FF]/40">
                <Icon name="Cable" size={40} className="text-white" />
              </div>
              <div className="space-y-3">
                <div className="text-sm font-bold text-[#0A84FF] tracking-wider">STEP 2</div>
                <h3 className="text-3xl font-bold">Connecting</h3>
                <p className="text-white/70 leading-relaxed">
                  Подключитесь одним кликом. Введите ID устройства или выберите из списка.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#FFB800] to-[#FF8C00] flex items-center justify-center shadow-2xl shadow-[#FFB800]/40">
                <Icon name="ScanSearch" size={40} className="text-white" />
              </div>
              <div className="space-y-3">
                <div className="text-sm font-bold text-[#FFB800] tracking-wider">STEP 3</div>
                <h3 className="text-3xl font-bold">Scanning & Control</h3>
                <p className="text-white/70 leading-relaxed">
                  ИИ автоматически сканирует систему, вы получаете полный контроль.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <img
              src="https://cdn.poehali.dev/projects/ee1051d3-7def-4477-ac4f-f6b174d4bafd/files/a1a1b69c-55aa-45de-99e7-b21d2aa39d75.jpg"
              alt="Nexus Interface"
              className="rounded-3xl border border-white/10 shadow-2xl max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/80 backdrop-blur py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center shadow-lg shadow-[#0A84FF]/30">
                  <Icon name="MonitorDot" size={22} className="text-white" />
                </div>
                <span className="text-2xl font-bold">Nexus</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Most powerful remote control and anti-cheat monitoring tool.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Download</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#0A84FF] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© 2025 Nexus. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <button className="hover:text-white transition-colors">EN</button>
              <span>/</span>
              <button className="hover:text-white transition-colors">RU</button>
            </div>
          </div>
        </div>
      </footer>

      <Button
        size="lg"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#0A84FF] to-[#0066CC] hover:from-[#0066CC] hover:to-[#0052A3] text-white shadow-2xl shadow-[#0A84FF]/50 animate-glow z-40"
      >
        <Icon name="Play" size={20} className="mr-2" />
        Try Demo
      </Button>
    </div>
  );
};

export default Index;
