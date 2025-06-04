
import { LanguageType } from "@/contexts/LanguageContext";

export const heroTranslations: Record<LanguageType, {
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeText: string;
}> = {
  es: {
    welcomeTitle: "¡Hola! Soy Hugo Canaval.",
    welcomeSubtitle: "Del mundo comercial al mundo IT. Transformando negocios con datos, visión y tecnología.",
    welcomeText: "Durante más de seis años me enfoqué en el mundo comercial de empresas como Nielsen, Mondelēz, Bavaria (AB InBev) y British American Tobacco. Fui reconocido por alcanzar objetivos exigentes, utilizando los datos de forma inteligente, liderando equipos, negociando con grandes clientes y construyendo estrategias comerciales exitosas.\n\nPero algo me faltaba...\n\nQuería ir más allá. No solo usar los datos, sino crear con ellos, convertirlos en inteligencia y construir soluciones.\n\nAsí que me enfoqué en aprender y decidí dedicarme tiempo completo a estudiar ciencia de datos, machine learning e inteligencia artificial. Estoy transformando mi carrera desde las raíces para seguir el camino que verdaderamente me apasiona.\n\nMi objetivo es convertirme en un Data Scientist que combine lo mejor de dos mundos:\n🚀 Capacidades técnicas robustas + 🧠 Visión estratégica de negocio",
  },
  en: {
    welcomeTitle: "Hi! I'm Hugo Canaval.",
    welcomeSubtitle: "From the commercial world to IT. Transforming businesses with data, vision, and technology.",
    welcomeText: "For over six years I focused on the commercial side of companies like Nielsen, Mondelēz, Bavaria (AB InBev), and British American Tobacco. I was recognized for achieving ambitious goals by using data intelligently, leading teams, negotiating with major clients, and building successful commercial strategies.\n\nBut something was missing...\n\nI wanted to go further. Not just use data, but create with it, turn it into intelligence, and build real solutions.\n\nSo I committed to learning and decided to dedicate myself full-time to studying data science, machine learning, and artificial intelligence. I'm transforming my career from the ground up to follow the path I'm truly passionate about.\n\nMy goal is to become a Data Scientist who brings together the best of both worlds:\n🚀 Robust technical skills + 🧠 Strategic business vision",
  }
};
