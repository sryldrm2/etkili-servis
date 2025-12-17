export interface Service {
  id: number
  slug: string
  title: string
  description: string
  fullDescription?: string
  image: string
  seo: {
    h1: string
    metaTitle: string
    metaDescription: string
    intro: string
    problemsTitle: string
    problems: string[]
  }
}

export interface Brand {
  name: string
  logo: string
}

export interface Reference {
  name: string
  location: string
  logo: string
}










