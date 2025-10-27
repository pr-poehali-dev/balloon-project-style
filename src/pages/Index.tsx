import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const balloonSets = [
  {
    id: 1,
    title: 'День рождения',
    description: 'Яркий набор для праздника',
    price: '3 500',
    image: 'https://cdn.poehali.dev/projects/7f561bf5-655b-4506-acd9-40e10edb078f/files/f9c0de70-8a4b-416f-8b13-a8182a58c62e.jpg',
    items: ['15 гелиевых шаров', '5 фольгированных', 'Ленты и грузики']
  },
  {
    id: 2,
    title: 'Свадебная арка',
    description: 'Нежная композиция для церемонии',
    price: '12 000',
    image: 'https://cdn.poehali.dev/projects/7f561bf5-655b-4506-acd9-40e10edb078f/files/6fad7774-e31b-4ae1-be74-4c1fecc206c3.jpg',
    items: ['Арка 3м', 'Цветочный декор', 'Установка включена']
  },
  {
    id: 3,
    title: 'Корпоратив',
    description: 'Стильное оформление для бизнеса',
    price: '8 500',
    image: 'https://cdn.poehali.dev/projects/7f561bf5-655b-4506-acd9-40e10edb078f/files/1c76f642-4c35-4f69-8c3c-04b8262b63aa.jpg',
    items: ['30 шаров в брендинге', 'Фигуры из шаров', 'Доставка по городу']
  }
];

const priceList = [
  { category: 'Гелиевые шары', item: 'Латексный 30см', price: '150' },
  { category: 'Гелиевые шары', item: 'Фольгированный сердце', price: '350' },
  { category: 'Композиции', item: 'Букет из 7 шаров', price: '1 200' },
  { category: 'Композиции', item: 'Фонтан из 15 шаров', price: '2 500' },
  { category: 'Арки', item: 'Арка классическая 2м', price: '6 000' },
  { category: 'Арки', item: 'Арка премиум 3м', price: '10 000' }
];

const faqs = [
  {
    question: 'Как долго держатся гелиевые шары?',
    answer: 'Латексные шары с гелием держатся 8-12 часов. Фольгированные - до 2 недель. Мы используем HI-FLOAT для увеличения времени полета до 24 часов.'
  },
  {
    question: 'Доставляете ли вы в день заказа?',
    answer: 'Да, при наличии свободного времени возможна доставка в день заказа. Рекомендуем оформлять заказ за 1-2 дня для гарантии.'
  },
  {
    question: 'Можно ли заказать шары с индивидуальным дизайном?',
    answer: 'Конечно! Мы печатаем логотипы, надписи и изображения на заказ. Срок изготовления - от 3 рабочих дней.'
  },
  {
    question: 'Какая зона доставки?',
    answer: 'Доставляем по всему городу. Стоимость зависит от района: центр - бесплатно при заказе от 3000₽, удаленные районы - 500₽.'
  }
];

const gallery = [
  'https://cdn.poehali.dev/projects/7f561bf5-655b-4506-acd9-40e10edb078f/files/f9c0de70-8a4b-416f-8b13-a8182a58c62e.jpg',
  'https://cdn.poehali.dev/projects/7f561bf5-655b-4506-acd9-40e10edb078f/files/6fad7774-e31b-4ae1-be74-4c1fecc206c3.jpg',
  'https://cdn.poehali.dev/projects/7f561bf5-655b-4506-acd9-40e10edb078f/files/1c76f642-4c35-4f69-8c3c-04b8262b63aa.jpg'
];

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    event: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎈",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', event: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Шарик Варик 🎈</h1>
          <div className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#price" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="animate-scale-in">
            <a href="#contact">Заказать</a>
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/20 to-white">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Воздушное настроение<br />
            <span className="text-primary">для вашего праздника</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаём незабываемые композиции из воздушных шаров для любого повода
          </p>
          <Button size="lg" className="text-lg px-8 py-6 animate-scale-in">
            <a href="#catalog">Выбрать набор</a>
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Готовые наборы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {balloonSets.map((set, index) => (
              <Card 
                key={set.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in border-pink-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={set.image} 
                    alt={set.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{set.title}</CardTitle>
                  <CardDescription>{set.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {set.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{set.price} ₽</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Прайс-лист</h2>
          <Card className="border-pink-100">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/30">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Категория</th>
                      <th className="px-6 py-4 text-left font-semibold">Товар</th>
                      <th className="px-6 py-4 text-right font-semibold">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceList.map((item, index) => (
                      <tr key={index} className="border-b border-pink-50 hover:bg-secondary/5 transition-colors">
                        <td className="px-6 py-4 text-muted-foreground">{item.category}</td>
                        <td className="px-6 py-4">{item.item}</td>
                        <td className="px-6 py-4 text-right font-semibold text-primary">{item.price} ₽</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-pink-100 rounded-lg px-6 bg-white"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Оформить заказ</h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму и мы свяжемся с вами в течение 15 минут
          </p>
          <Card className="border-pink-100">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Анна"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип мероприятия</label>
                  <Input 
                    placeholder="День рождения"
                    value={formData.event}
                    onChange={(e) => setFormData({...formData, event: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Пожелания к заказу</label>
                  <Textarea 
                    placeholder="Расскажите о ваших пожеланиях..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-lg">
              <Icon name="Phone" size={20} className="text-primary" />
              <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                +7 (999) 123-45-67
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Icon name="Mail" size={20} className="text-primary" />
              <a href="mailto:info@sharikvarik.ru" className="hover:text-primary transition-colors">
                info@sharikvarik.ru
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span>г. Москва, ул. Праздничная, 10</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Шарик Варик 🎈</h3>
          <p className="text-white/70 mb-6">Воздушное настроение с 2020 года</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Send" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
          </div>
          <p className="text-sm text-white/50">© 2024 Шарик Варик. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}
