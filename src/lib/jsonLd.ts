// JSON-LD схемы для центра подологии Footura
export interface BusinessInfo {
  name: string
  description: string
  url: string
  telephone?: string
  email?: string
  address?: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
}

// Основная схема медицинского бизнеса
export function createMedicalBusinessSchema(info: BusinessInfo) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "PodiatricCare"],
    "name": info.name,
    "description": info.description,
    "url": info.url,
    "telephone": info.telephone,
    "email": info.email,
    "address": info.address ? {
      "@type": "PostalAddress",
      "streetAddress": info.address.streetAddress,
      "addressLocality": info.address.addressLocality,
      "postalCode": info.address.postalCode,
      "addressCountry": info.address.addressCountry
    } : undefined,
    "medicalSpecialty": [
      {
        "@type": "MedicalSpecialty",
        "name": "Podiatry"
      },
      {
        "@type": "MedicalSpecialty", 
        "name": "Foot Care"
      }
    ],
    "availableService": [
      {
        "@type": "MedicalService",
        "name": "Лечение вросшего ногтя",
        "description": "Профессиональное лечение вросших ногтей современными методами"
      },
      {
        "@type": "MedicalService",
        "name": "Медицинский педикюр",
        "description": "Лечебный педикюр для здоровья стоп"
      },
      {
        "@type": "MedicalService",
        "name": "Ортониксия",
        "description": "Коррекция деформированных ногтей"
      },
      {
        "@type": "MedicalService",
        "name": "Лечение грибка ногтей",
        "description": "Комплексное лечение онихомикоза"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "CZK, EUR",
    "paymentAccepted": "Cash, Credit Card",
    "openingHours": "Mo-Fr 09:00-18:00",
    "areaServed": [
      {
        "@type": "City",
        "name": "Praha"
      },
      {
        "@type": "Country", 
        "name": "Czech Republic"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Наталия Ротарь",
      "jobTitle": "Подолог, основатель центра",
      "description": "Специалист по подологии с 18-летним опытом работы"
    }
  }
}

// Схема для услуг
export function createMedicalServiceSchema(service: {
  name: string
  description: string
  price?: string
  duration?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Центр подологии Footura",
      "url": "https://footura.cz"
    },
    "availableAtOrFrom": {
      "@type": "MedicalBusiness",
      "name": "Центр подологии Footura",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Na Rybníčku 1329/5",
        "addressLocality": "Praha 2",
        "postalCode": "120 00",
        "addressCountry": "CZ"
      }
    },
    "offers": service.price ? {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "CZK"
    } : undefined
  }
}

// Схема для специалиста
export function createMedicalProfessionalSchema(person: {
  name: string
  jobTitle: string
  description: string
  experience?: string
  qualifications?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["Person", "MedicalProfessional"],
    "name": person.name,
    "jobTitle": person.jobTitle,
    "description": person.description,
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Центр подологии Footura"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Podiatrist",
      "occupationLocation": {
        "@type": "City",
        "name": "Praha"
      }
    },
    "knowsAbout": [
      "Подология",
      "Лечение заболеваний стоп",
      "Ортониксия",
      "Медицинский педикюр"
    ],
    "alumniOf": person.qualifications?.map(qual => ({
      "@type": "EducationalOrganization",
      "name": qual
    }))
  }
}

// Схема для статьи блога
export function createArticleSchema(article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author,
      "@id": "https://footura.cz/natalia"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Центр подологии Footura",
      "url": "https://footura.cz"
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "image": article.image ? {
      "@type": "ImageObject",
      "url": article.image,
      "width": 1200,
      "height": 630
    } : undefined,
    "about": [
      {
        "@type": "MedicalCondition",
        "name": "Foot disorders"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Podiatry"
      }
    ]
  }
}

// Схема для отзывов
export function createReviewSchema(reviews: Array<{
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Центр подологии Footura",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
      "reviewCount": reviews.length,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  }
} 