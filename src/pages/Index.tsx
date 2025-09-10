import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const investmentOpportunities = [
  {
    title: "Недвижимость",
    subtitle: "Коммерческая недвижимость",
    description: "Инвестируйте в коммерческие объекты с низким входным порогом",
    yield: "12.5%",
    minInvestment: "50 000 ₽",
    progress: 78,
    category: "Недвижимость",
    icon: "Building2"
  },
  {
    title: "P2P кредитование",
    subtitle: "Потребительские займы",
    description: "Диверсифицированный портфель займов физических лиц",
    yield: "15.2%",
    minInvestment: "10 000 ₽",
    progress: 92,
    category: "P2P",
    icon: "Users"
  },
  {
    title: "Акции дивидендных компаний",
    subtitle: "Голубые фишки",
    description: "Стабильные дивидендные выплаты от проверенных эмитентов",
    yield: "8.7%",
    minInvestment: "25 000 ₽",
    progress: 65,
    category: "Акции",
    icon: "TrendingUp"
  }
];

const portfolioData = [
  { name: "Активы", value: "2 450 000 ₽", change: "+12.3%", icon: "Wallet" },
  { name: "Доходность", value: "11.8%", change: "+2.1%", icon: "TrendingUp" },
  { name: "Прибыль", value: "+287 500 ₽", change: "+8.9%", icon: "DollarSign" },
  { name: "Активные инвестиции", value: "8", change: "+2", icon: "Target" }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                <span className="text-xl font-bold text-foreground">InvestPro</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Портфель</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Аналитика</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Войти</Button>
              <Button>Начать инвестировать</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              ПАССИВНЫЙ ДОХОД
              <span className="block text-primary">ОТ ИНВЕСТИЦИЙ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Исследуйте разнообразные инвестиционные возможности. 
              Инвестируйте разумно и наблюдайте, как растет ваше состояние 
              с помощью наших курируемых стратегий пассивного дохода.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Play" size={20} className="mr-2" />
                Начать инвестировать
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Обзор портфеля</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={item.icon} size={24} className="text-primary" />
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                      {item.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.name}</p>
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Инвестиционные возможности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={opportunity.icon} size={32} className="text-primary" />
                    <Badge>{opportunity.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{opportunity.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {opportunity.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Доходность</span>
                      <span className="text-lg font-semibold text-secondary">{opportunity.yield}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Мин. инвестиция</span>
                      <span className="text-sm font-medium">{opportunity.minInvestment}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Собрано</span>
                        <span>{opportunity.progress}%</span>
                      </div>
                      <Progress value={opportunity.progress} className="h-2" />
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                        <Icon name="ArrowRight" size={16} className="mr-2" />
                        Инвестировать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Инструменты отслеживания</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "DollarSign", title: "Отслеживание прибыли", desc: "Мониторинг доходности в реальном времени" },
              { icon: "BarChart3", title: "Аналитика роста", desc: "Детальная аналитика портфеля" },
              { icon: "Calculator", title: "Калькулятор доходности", desc: "Прогнозирование будущих доходов" },
              { icon: "Shield", title: "Управление рисками", desc: "Диверсификация и защита активов" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать зарабатывать пассивный доход?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Присоединяйтесь к тысячам инвесторов, которые уже получают стабильный доход
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="User" size={20} className="mr-2" />
              Создать аккаунт
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                <span className="text-lg font-bold">InvestPro</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Платформа для умного инвестирования и создания пассивного дохода.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Инвестиции</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Недвижимость</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">P2P кредитование</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Акции</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Облигации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><Icon name="Mail" size={16} className="mr-2" />info@investpro.ru</li>
                <li className="flex items-center"><Icon name="Phone" size={16} className="mr-2" />+7 (495) 123-45-67</li>
                <li className="flex items-center"><Icon name="MapPin" size={16} className="mr-2" />Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 InvestPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}