import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "nav": {
                "experience": "Experience",
                "skills": "Skills",
                "contact": "Contact",
            },
            "hero": {
                "status": "System Online",
                "greeting": "Hello, I'm",
                "name": "Zhanabek",
                "role": "Frontend <span className='highlight'>&amp;</span> DevOps Engineer",
                "desc": "I bridge the gap between building beautiful, interactive user interfaces and deploying highly available, scalable infrastructure. Passionate about <1>React.js</1>, <3>CI/CD</3> pipelines, and cloud architecture.",
                "contactMe": "Contact Me"
            },
            "skills": {
                "title": "skills",
                "frontend": "Frontend Development",
                "frontendDesc": "Building responsive, pixel-perfect, and highly interactive user interfaces.",
                "devops": "DevOps & Infrastructure",
                "devopsDesc": "Automating deployments, containerizing applications, and managing cloud infrastructure."
            },
            "projects": {
                "title": "Featured Projects",
                "items": {
                    "portfolio": "A highly interactive, multi-language developer portfolio featuring Framer Motion animations, interactive terminal, and 3D tilt effects.",
                    "cicd": "Automated microservices deployment pipeline using GitLab CI/CD, Docker containers, and Kubernetes orchestration.",
                    "ecommerce": "Modern e-commerce storefront with complex state management, real-time cart updates, and responsive design."
                }
            },
            "experience": {
                "title": "experience",
                "jobs": {
                    "exp1": {
                        "role": "DevOps Engineer",
                        "company": "Alatau City Bank",
                        "period": "Jun 2025 - Present",
                        "desc": "Managing and maintaining infrastructure using Linux, Docker, and Kubernetes. Building and optimizing CI/CD pipelines, and automating configuration management with Ansible."
                    },
                    "exp2": {
                        "role": "DevOps Engineer",
                        "company": "Jusan Bank",
                        "period": "Mar 2025 - Jul 2025",
                        "desc": "Transitioned to DevOps role. Supported development teams by improving CI/CD workflows, managing containerized environments, and ensuring system stability."
                    },
                    "exp3": {
                        "role": "Frontend Web Developer",
                        "company": "Jusan Bank",
                        "period": "Sep 2022 - Mar 2025",
                        "desc": "Developed complex web applications using React, Angular JS, JavaScript, HTML, and CSS. Implemented end-to-end testing with Cypress JS, handled backend integrations with PostgreSQL, and participated in Agile teamwork."
                    }
                }
            },
            "education": {
                "title": "education",
                "items": {
                    "edu1": {
                        "degree": "Master's degree, Computer Science",
                        "university": "International Information Technologies University (IITU)",
                        "period": "Aug 2022 - 2024"
                    },
                    "edu2": {
                        "degree": "Bachelor's degree, Computer Science",
                        "university": "Suleyman Demirel University (SDU)",
                        "period": "2018 - 2022"
                    }
                }
            },
            "contact": {
                "heading": "Let's build something scalable.",
                "desc": "Whether you need a pixel-perfect frontend interface or a robust CI/CD pipeline, I'm currently open for new opportunities and freelance projects.",
                "button": "Send Message",
                "rights": "Engineered with React & Vite. All rights reserved."
            }
        }
    },
    ru: {
        translation: {
            "nav": {
                "experience": "Опыт",
                "skills": "Навыки",
                "contact": "Связаться",
            },
            "hero": {
                "status": "В сети",
                "greeting": "Привет, я",
                "name": "Жанабек",
                "role": "Frontend <span className='highlight'>и</span> DevOps Инженер",
                "desc": "Я объединяю создание красивых интерактивных интерфейсов с развертыванием масштабируемой инфраструктуры. Увлекаюсь <1>React.js</1>, <3>CI/CD</3> процессами и облачной архитектурой.",
                "contactMe": "Связаться со мной"
            },
            "skills": {
                "title": "навыки",
                "frontend": "Фронтенд Разработка",
                "frontendDesc": "Создание адаптивных, до пикселя точных и высокоинтерактивных пользовательских интерфейсов.",
                "devops": "DevOps и Инфраструктура",
                "devopsDesc": "Автоматизация развертываний, контейнеризация приложений и управление облачной инфраструктурой."
            },
            "projects": {
                "title": "Мои Проекты",
                "items": {
                    "portfolio": "Интерактивное мультиязычное портфолио разработчика с анимациями Framer Motion, интерактивным терминалом и 3D-эффектами наклона.",
                    "cicd": "Автоматизированный пайплайн развертывания микросервисов с использованием GitLab CI/CD, Docker контейнеров и Kubernetes.",
                    "ecommerce": "Современный интернет-магазин со сложным управлением состоянием, корзиной в реальном времени и адаптивным дизайном."
                }
            },
            "experience": {
                "title": "опыт_работы",
                "jobs": {
                    "exp1": {
                        "role": "DevOps Инженер",
                        "company": "Alatau City Bank",
                        "period": "Июнь 2025 - Наст. время",
                        "desc": "Управление и поддержка инфраструктуры на базе Linux, Docker и Kubernetes. Построение CI/CD пайплайнов и автоматизация настройки серверов с помощью Ansible."
                    },
                    "exp2": {
                        "role": "DevOps Инженер",
                        "company": "Jusan Bank",
                        "period": "Март 2025 - Июль 2025",
                        "desc": "Поддержка команд разработки через улучшение CI/CD процессов, управление контейнерами и обеспечение стабильности систем."
                    },
                    "exp3": {
                        "role": "Фронтенд Веб-разработчик",
                        "company": "Jusan Bank",
                        "period": "Сен 2022 - Март 2025",
                        "desc": "Разработка веб-приложений на React, Angular JS, JavaScript, HTML и CSS. Написание E2E тестов на Cypress JS, интеграция с PostgreSQL и активная командная работа."
                    }
                }
            },
            "education": {
                "title": "образование",
                "items": {
                    "edu1": {
                        "degree": "Магистратура, Computer Science",
                        "university": "Международный Университет Информационных Технологий (IITU)",
                        "period": "Авг 2022 - 2024"
                    },
                    "edu2": {
                        "degree": "Бакалавриат, Computer Science",
                        "university": "Университет им. Сулеймана Демиреля (SDU)",
                        "period": "2018 - 2022"
                    }
                }
            },
            "contact": {
                "heading": "Давайте создавать масштабные проекты.",
                "desc": "Нужен идеальный фронтенд интерфейс или надежный CI/CD пайплайн? Я открыт к новым предложениям и freelance проектам.",
                "button": "Отправить сообщение",
                "rights": "Разработано на React & Vite. Все права защищены."
            }
        }
    },
    kk: {
        translation: {
            "nav": {
                "experience": "Тәжірибе",
                "skills": "Дағдылар",
                "contact": "Байланыс",
            },
            "hero": {
                "status": "Желіде",
                "greeting": "Сәлем, мен",
                "name": "Жаңабек",
                "role": "Frontend <span className='highlight'>және</span> DevOps Инженерімін",
                "desc": "Әдемі, интерактивті интерфейстер құру мен масштабталатын инфрақұрылымды орналастыруды біріктіремін. <1>React.js</1>, <3>CI/CD</3> процестеріне және бұлттық архитектураға қызығамын.",
                "contactMe": "Маған жазу"
            },
            "skills": {
                "title": "дағдылар",
                "frontend": "Фронтенд Әзірлеу",
                "frontendDesc": "Адаптивті, дәл әрі жоғары интерактивті қолданушы интерфейстерін жасау.",
                "devops": "DevOps және Инфрақұрылым",
                "devopsDesc": "Орналастыруды автоматтандыру, қосымшаларды контейнерлеу және бұлттық инфрақұрылымды басқару."
            },
            "projects": {
                "title": "Менің Жобаларым",
                "items": {
                    "portfolio": "Framer Motion анимациялары, интерактивті терминал және 3D қисаю әсерлері бар интерактивті көптілді әзірлеуші портфолиосы.",
                    "cicd": "GitLab CI/CD, Docker контейнерлері және Kubernetes оркестрациясы арқылы автоматтандырылған микросервис орналастыру құбыры.",
                    "ecommerce": "Күрделі күйді басқару, нақты уақыттағы себет және адаптивті дизайны бар заманауи интернет-дүкен."
                }
            },
            "experience": {
                "title": "тәжірибе",
                "jobs": {
                    "exp1": {
                        "role": "DevOps Инженері",
                        "company": "Alatau City Bank",
                        "period": "Маусым 2025 - Қазіргі уақыт",
                        "desc": "Linux, Docker және Kubernetes негізінде инфрақұрылымды басқару және қолдау. CI/CD құбырларын құру және Ansible көмегімен сервер конфигурациясын автоматтандыру."
                    },
                    "exp2": {
                        "role": "DevOps Инженері",
                        "company": "Jusan Bank",
                        "period": "Наурыз 2025 - Шілде 2025",
                        "desc": "CI/CD процестерін жақсарту, контейнерлерді басқару және жүйе тұрақтылығын қамтамасыз ету арқылы әзірлеушілер тобына қолдау көрсету."
                    },
                    "exp3": {
                        "role": "Фронтенд Веб-әзірлеуші",
                        "company": "Jusan Bank",
                        "period": "Қыркүйек 2022 - Наурыз 2025",
                        "desc": "React, Angular JS, JavaScript, HTML және CSS пайдаланып веб-қосымшалар негізін жасау. Cypress JS арқылы E2E тестілеу, PostgreSQL интеграциясы және командалық жұмыс."
                    }
                }
            },
            "education": {
                "title": "білім",
                "items": {
                    "edu1": {
                        "degree": "Магистратура, Computer Science",
                        "university": "Халықаралық Ақпараттық Технологиялар Университеті (IITU)",
                        "period": "Тамыз 2022 - 2024"
                    },
                    "edu2": {
                        "degree": "Бакалавриат, Computer Science",
                        "university": "Сүлеймен Демирел атындағы Университет (SDU)",
                        "period": "2018 - 2022"
                    }
                }
            },
            "contact": {
                "heading": "Ауқымды жобалар жасайық.",
                "desc": "Идеалды фронтенд немесе мықты CI/CD құбыры қажет болса, мен жаңа ұсыныстар мен фриланс жобаларға ашықпын.",
                "button": "Хабарлама жіберу",
                "rights": "React & Vite негізінде жасалған. Барлық құқықтар қорғалған."
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
