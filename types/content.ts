export interface NavLink {
  name: string;
  href: string;
  active?: boolean;
}

export interface ButtonLink {
  text: string;
  href: string;
}

export interface TextLink {
  text: string;
  href: string;
}

export interface HeaderLogo {
  name: string;
  dot: string;
  subtitle?: string;
  image?: string;
}

export interface CommonGroundHeader1Data {
  logo: HeaderLogo;
  navLinks: NavLink[];
  button: ButtonLink;
}

export interface SocialProof {
  donorsCount: string;
  donorsLabel: string;
  avatars: string[];
}

export interface CircularBadgeData {
  curvedText: string;
  icon: string;
  badgeText?: string;
}

export interface CommonGroundHero1Data {
  bgColor?: string;
  eyebrow: string;
  headingPart1: string;
  headingPart2: string;
  description?: string;
  primaryButton: ButtonLink;
  secondaryButton?: ButtonLink;
  socialProof: SocialProof;
  image: string;
  circularBadge: CircularBadgeData;
}

export interface CommonGroundTicker1Data {
  items: string[];
  speedSeconds: number;
}

export interface AboutCardItem {
  id?: string;
  tag: string;
  icon?: string;
  title: string;
  description: string;
  bottomTag?: string;
  badges?: string[];
}

export interface CommonGroundAbout1Data {
  eyebrow: string;
  headingPart1: string;
  headingPart2: string;
  headingItalic: string;
  cards?: AboutCardItem[];
  paragraphs: string[];
  links?: TextLink[];
}

export interface CauseItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  href: string;
  tagIcon?: string;
}

export interface CommonGroundCauses1Data {
  eyebrow: string;
  headingPart1: string;
  headingItalic: string;
  topLink: TextLink;
  items: CauseItem[];
  bottomButton?: ButtonLink;
}

export interface RootedStep {
  number: string;
  title: string;
  description: string;
}

export interface CommonGroundRooted1Data {
  leftCard: {
    word1: string;
    word2: string;
    tagline: string;
  };
  eyebrow: string;
  headingPart1: string;
  headingItalic: string;
  description: string;
  steps: RootedStep[];
}

export interface CommonGroundVolunteerCTA1Data {
  eyebrow: string;
  headingPart1: string;
  headingItalic: string;
  subtitle: string;
  primaryButton: ButtonLink;
  secondaryButton: ButtonLink;
  floralQuote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CommonGroundFAQ1Data {
  eyebrow: string;
  headingPart1: string;
  headingItalic: string;
  topLink: TextLink;
  items: FAQItem[];
}

export interface BlogItem {
  id: string;
  category?: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  href: string;
}

export interface CommonGroundBlog1Data {
  eyebrow: string;
  headingPart1: string;
  headingItalic: string;
  topLink?: TextLink;
  disclaimer?: string;
  items: BlogItem[];
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterContactData {
  title?: string;
  email: string;
  phone: string;
  address: string;
}

export interface CommonGroundFooter1Data {
  logo: {
    name: string;
    dot: string;
    tagline: string;
    image?: string;
  };
  columns: FooterColumn[];
  contact?: FooterContactData;
  social: SocialLink[];
  copyright: string;
  missionNote?: string;
  backToTopText: string;
  bottomLinks?: NavLink[];
}

export interface PageBannerData {
  breadcrumb: string;
  eyebrow: string;
  headingPart1: string;
  headingItalic: string;
  subtitle: string;
  circularBadgeText?: string;
  image?: string;
}

export interface PreFooterCTAData {
  eyebrow: string;
  headingPart1: string;
  headingItalic: string;
  subtitle: string;
  primaryButton: ButtonLink;
  secondaryLink: ButtonLink;
}

export interface MarqueeBannerSmallData {
  textPart1: string;
  textItalic: string;
  link: ButtonLink;
}

export interface TeamMemberRole {
  id: string;
  name?: string;
  position?: string;
  initials: string;
  roleTag: string;
  title: string;
  description: string;
  noteBadge?: string;
  bgVariant: "sage" | "olive" | "cream";
  image?: string;
}

export interface TeamSectionData {
  eyebrow: string;
  headingPart1: string;
  headingItalic: string;
  subtitleNote: string;
  roles: TeamMemberRole[];
  calloutCard: {
    eyebrow: string;
    headingPart1: string;
    headingItalic: string;
    description: string;
    button: ButtonLink;
    sideQuotePart1: string;
    sideQuoteItalic: string;
  };
}

export interface GalleryItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface GalleryFilterCategory {
  label: string;
  value: string;
  count: number;
}

export interface GallerySectionData {
  categories?: GalleryFilterCategory[];
  items: GalleryItem[];
  footerNote?: string;
  loadMoreButtonText?: string;
  viewPhotoText?: string;
  initialCount?: number;
  batchSize?: number;
}

export interface ContactFeatureItem {
  title: string;
  description: string;
}

export interface ContactDetailInfo {
  icon?: string;
  label: string;
  value: string;
  href?: string;
  note?: string;
}

export interface ContactSectionData {
  leftEyebrow: string;
  leftHeadingPart1: string;
  leftHeadingItalic: string;
  leftDescription: string;
  contactDetails?: ContactDetailInfo[];
  features?: ContactFeatureItem[];
  faqLink?: ButtonLink;
  image: string;
  imageCaption: string;
  formEyebrow: string;
  formHeadingPart1: string;
  formHeadingItalic: string;
  formNotice: string;
  formSubjects: string[];
  submitButtonText: string;
}

export interface FAQCategoryGroup {
  id: string;
  numberPrefix?: string;
  categoryTag?: string;
  categoryTitle: string;
  items: FAQItem[];
}

export interface FAQPageSectionData {
  sidebarTitle: string;
  sidebarBox: {
    title: string;
    subtitle: string;
    linkText: string;
    linkHref: string;
  };
  groups: FAQCategoryGroup[];
}

export interface CauseDetailData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  mission: string;
  stats: Array<{ value: string; label: string }>;
  initiatives: Array<{ title: string; description: string }>;
  impactQuote: string;
  quoteAuthor: string;
  waysToHelp: string[];
}

export interface BlogDetailData {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  subtitle: string;
  heroImage: string;
  paragraphs: string[];
  keyTakeaways: string[];
  keyTakeawaysTitle?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  backLink?: TextLink;
  contactLink?: TextLink;
}

export interface SectionVariants {
  Header: {
    variants: {
      CommonGroundHeader1: CommonGroundHeader1Data;
      [key: string]: unknown;
    };
  };
  Hero: {
    variants: {
      CommonGroundHero1: CommonGroundHero1Data;
      [key: string]: unknown;
    };
  };
  Ticker: {
    variants: {
      CommonGroundTicker1: CommonGroundTicker1Data;
      [key: string]: unknown;
    };
  };
  About: {
    variants: {
      CommonGroundAbout1: CommonGroundAbout1Data;
      [key: string]: unknown;
    };
  };
  Causes: {
    variants: {
      CommonGroundCauses1: CommonGroundCauses1Data;
      [key: string]: unknown;
    };
  };
  RootedInCare: {
    variants: {
      CommonGroundRooted1: CommonGroundRooted1Data;
      [key: string]: unknown;
    };
  };
  VolunteerCTA: {
    variants: {
      CommonGroundVolunteerCTA1: CommonGroundVolunteerCTA1Data;
      [key: string]: unknown;
    };
  };
  FAQ: {
    variants: {
      CommonGroundFAQ1: CommonGroundFAQ1Data;
      [key: string]: unknown;
    };
  };
  Blog: {
    variants: {
      CommonGroundBlog1: CommonGroundBlog1Data;
      [key: string]: unknown;
    };
  };
  Footer: {
    variants: {
      CommonGroundFooter1: CommonGroundFooter1Data;
      [key: string]: unknown;
    };
  };
  TeamSection?: {
    variants: {
      CommonGroundTeam1: TeamSectionData;
      [key: string]: unknown;
    };
  };
  GallerySection?: {
    variants: {
      CommonGroundGallery1: GallerySectionData;
      [key: string]: unknown;
    };
  };
  ContactSection?: {
    variants: {
      CommonGroundContact1: ContactSectionData;
      [key: string]: unknown;
    };
  };
  FAQPageSection?: {
    variants: {
      CommonGroundFAQPage1: FAQPageSectionData;
      [key: string]: unknown;
    };
  };
  PreFooterCTA?: {
    variants: {
      CommonGroundPreFooterCTA1: PreFooterCTAData;
      [key: string]: unknown;
    };
  };
  MarqueeBannerSmall?: {
    variants: {
      CommonGroundMarqueeBannerSmall1: MarqueeBannerSmallData;
      [key: string]: unknown;
    };
  };
  PageBanners?: {
    variants: Record<string, PageBannerData>;
  };
  CauseDetails?: {
    items: Record<string, CauseDetailData>;
  };
  BlogDetails?: {
    items: Record<string, BlogDetailData>;
  };
  [key: string]: unknown;
}

export interface PageComponentRef {
  key: string;
  component: string;
}

export interface TemplatePageConfig {
  components: PageComponentRef[];
}

export interface SharedComponentsConfig {
  Header: string;
  Footer: string;
  [key: string]: string;
}

export interface TemplateComponentsConfig {
  shared: SharedComponentsConfig;
  pages: {
    home: TemplatePageConfig;
    "about-us"?: TemplatePageConfig;
    causes?: TemplatePageConfig;
    "cause-detail"?: TemplatePageConfig;
    "our-team"?: TemplatePageConfig;
    gallery?: TemplatePageConfig;
    blog?: TemplatePageConfig;
    "blog-detail"?: TemplatePageConfig;
    faq?: TemplatePageConfig;
    contact?: TemplatePageConfig;
    [pageKey: string]: TemplatePageConfig | undefined;
  };
}

export interface PageMetadataItem {
  title: string;
  description: string;
}

export interface SiteMetadataConfig {
  site: PageMetadataItem;
  pages: Record<string, PageMetadataItem>;
}

export interface SiteTemplate {
  templateComponents: {
    "template-1": TemplateComponentsConfig;
    [templateKey: string]: TemplateComponentsConfig;
  };
  metadata?: SiteMetadataConfig;
  sections: SectionVariants;
}

export interface ContentRoot {
  CommonGround?: SiteTemplate;
  Tour?: SiteTemplate;
  [siteKey: string]: SiteTemplate | undefined;
}
