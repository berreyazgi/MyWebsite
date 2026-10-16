const projects = {
  inventory: {
    name:'Yazılım Envanteri', url:'https://github.com/berreyazgi/YazilimEnvanteri', tags:['ASP.NET Core MVC','Dapper','PostgreSQL','EF Core','Vanilla JS'],
    image:'assets/inventory-projects.png',imageAlt:{en:'Yazılım Envanteri project list, filters, and project inventory table',tr:'Yazılım Envanteri proje listesi, filtreleri ve envanter tablosu'},imageCaption:{en:'Project screenshot · September 2026',tr:'Proje ekran görüntüsü · Eylül 2026'},
    en:{
      category:'01 / SOFTWARE INVENTORY', summary:'An ongoing .NET MVC project for organizing software projects and their related organizational and infrastructure information.',
      sections:[
        ['The problem','A software inventory brings together information that is easy to scatter: project ownership, organizational units, repositories, servers, and technical details. The goal is to make those relationships easier to navigate.'],
        ['The approach','An ASP.NET Core MVC application with a Turkish interface. Dapper services handle runtime data access, PostgreSQL stores the data, and EF Core is used for schema and migration work. The frontend uses HTML, CSS, and vanilla JavaScript.'],
        ['What I’m working through','Connecting the interface to backend data; making project filters, detail pages, and mobile layouts usable; and keeping the controller-to-service flow clear.'],
        ['Next milestone · planned','Write meaningful tests, try Jenkins locally, then explore Docker packaging and deployment to a cloud VM. This deployment pipeline is a learning goal, not a completed feature.']
      ], flow:['MVC / View','Controller','Service / Dapper','PostgreSQL'], note:'This screenshot shows a development version of the interface.', cta:'View repository'
    },
    tr:{
      category:'01 / YAZILIM ENVANTERİ', summary:'Yazılım projelerini, bağlı oldukları birimleri ve altyapı bilgilerini düzenlemek için geliştirdiğim bir .NET MVC projesi.',
      sections:[
        ['Problem','Proje sorumluları, birimler, kaynak kod depoları, sunucular ve teknik bilgiler farklı yerlerde dağılabiliyor. Amaç, bu ilişkileri bir yazılım envanterinde daha kolay incelenebilir hale getirmek.'],
        ['Yaklaşım','Türkçe arayüzlü bir ASP.NET Core MVC uygulaması. Çalışma anındaki veri erişimini Dapper servisleri sağlıyor; veriler PostgreSQL’de tutuluyor. Şema ve migration işlemlerinde EF Core kullanılıyor. Frontend HTML, CSS ve vanilla JavaScript ile geliştiriliyor.'],
        ['Üzerinde çalıştığım konular','Arayüzü backend verilerine bağlamak; proje filtrelerini, detay sayfalarını ve mobil düzeni kullanışlı hale getirmek; controller ve servis arasındaki akışı anlaşılır tutmak.'],
        ['Sonraki adım · planlandı','Anlamlı testler yazmak, Jenkins’i yerelde denemek, ardından Docker ile paketleme ve bulut VM dağıtımını keşfetmek. Bu pipeline tamamlanmış bir özellik değil, öğrenme hedefim.']
      ], flow:['MVC / View','Controller','Service / Dapper','PostgreSQL'], note:'Ekran görüntüsü arayüzün geliştirme aşamasındaki bir sürümünü gösterir.', cta:'Kaynak kodu incele'
    }
  },
  shop: {
    name:'ShopApp', url:'https://github.com/berreyazgi/ShopApp', tags:['C#','ASP.NET Core Web API','EF Core','PostgreSQL','CQRS','Identity / JWT'],
    image:'assets/shopapp-design.png',imageAlt:{en:'ShopApp product management page design concept with product cards',tr:'Ürün kartlarını içeren ShopApp ürün yönetim sayfası tasarım konsepti'},imageCaption:{en:'Interface design concept · September 2026',tr:'Arayüz tasarım konsepti · Eylül 2026'},
    en:{
      category:'02 / E-COMMERCE', summary:'A learning project where I explore e-commerce flows, domain boundaries, and how architecture choices change as an application evolves.',
      sections:[
        ['The problem','Products, categories, carts, and orders have related but different responsibilities. Building a boutique e-commerce application gives me a concrete way to explore those boundaries.'],
        ['The approach','ASP.NET Core Web API, EF Core, PostgreSQL, and Identity/JWT. I’m applying Clean Architecture and CQRS concepts, with domain entities such as Sepet and Siparis managing their child items.'],
        ['A decision that shaped the project','I initially explored catalog and product functionality as separate services, then moved products and categories back into the monolith. The current direction keeps core shopping flows together, while payment and notification services remain planned.'],
        ['What I’m learning','When an aggregate should own its child entities; how persistence configuration can stay outside domain models; and how product variants and order snapshots affect the rest of the application.']
      ], flow:['API','Application','Domain rules','Infrastructure'], note:'The image is a design concept. Payment and notification services are planned.', cta:'View repository'
    },
    tr:{
      category:'02 / E-TİCARET', summary:'E-ticaret akışlarını, alan sınırlarını ve uygulama geliştikçe mimari kararların nasıl değiştiğini keşfettiğim bir öğrenme projesi.',
      sections:[
        ['Problem','Ürün, kategori, sepet ve sipariş birbiriyle ilişkili, ancak farklı sorumluluklara sahip. Butik bir e-ticaret uygulaması geliştirmek, bu sınırları somut bir problem üzerinde incelememi sağlıyor.'],
        ['Yaklaşım','ASP.NET Core Web API, EF Core, PostgreSQL ve Identity/JWT. Clean Architecture ve CQRS kavramlarını uyguluyorum. Sepet ve Siparis gibi alan varlıklarının kendi alt öğelerini yönetmesi üzerine çalışıyorum.'],
        ['Projeyi şekillendiren bir karar','Katalog ve ürün işlevlerini başlangıçta ayrı servisler olarak ele aldım, ardından ürün ve kategorileri monolite taşıdım. Güncel yön, temel alışveriş akışlarını birlikte tutmak. Ödeme ve bildirim servisleri ise plan aşamasında.'],
        ['Öğrendiklerim','Bir aggregate’in alt varlıklarını ne zaman yönetmesi gerektiği; veritabanı konfigürasyonunu alan modellerinden ayrı tutmak; ürün varyantlarının ve sipariş anındaki bilgilerin uygulamanın diğer bölümlerine etkisi.']
      ], flow:['API','Application','Domain kuralları','Infrastructure'], note:'Görsel bir tasarım konseptidir. Ödeme ve bildirim servisleri plan aşamasındadır.', cta:'Kaynak kodu incele'
    }
  }
};

